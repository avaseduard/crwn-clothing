import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { USER_ACTION_TYPES } from './user.types'
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from './user.action'
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase/firebase.utils'

// Called by the isUserAuthenticated, checks if there is a userSnapshopt for the userAuth that it receives; if it isn't it'll make one, either way we have the userSnapshot
export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    // Create the user snapshop by yield calling the createUserDocumentFromAuth with the userAuth and additionalDetails parameters (that's how we write parameters when calling functions in redux saga)
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    )
    // Extract the id from userSnapshot and add it to userSnapshot.data
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Called by onCheckUserSession and check if the user is authenticated
export function* isUserAuthenticated() {
  try {
    // Yield call the getCurrentUser, which gets the userAuth if it exists
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    // Once we have the userAuth from above, pass it to the getSnapshotFromUserAuth and yield call it
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Sign in with google pop up
export function* signInWithGoogle() {
  try {
    // Trigger google sign in popup, take auth object, pluck of the user off it
    const { user } = yield call(signInWithGooglePopup)
    // Run user through getSnapshot
    yield call(getSnapshotFromUserAuth, user)
    // Alert user if login succeded
    alert('Sign in succes. Welcome!')
  } catch (error) {
    yield put(signInFailed(error))
    // Alert user if log in failed
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        alert('Sign in with google failed! Please try again.')
      default:
        console.log(error)
    }
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    )
    yield call(getSnapshotFromUserAuth, user)
    // Alert user if login succeded
    alert('Sign in succes. Welcome!')
  } catch (error) {
    yield put(signInFailed(error))
    // Alert user if log in failed
    switch (error.code) {
      case 'auth/user-not-found':
        alert('Log in failed! No user associated with this email adress.')
        break
      case 'auth/wrong-password':
        alert('Log in failed! Incorrect password for this email address.')
        break
      default:
        console.log(error)
    }
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )
    yield put(signUpSuccess(user, { displayName }))
    // Alert user if login succeded
    alert('Sign up and sign in succes. Welcome!')
  } catch (error) {
    yield put(signUpFailed(error))
    // Alert user if sign up failed
    switch (error.code) {
      case 'auth/email-already-in-use':
        alert('Sign up failed! Email address already in use.')
        break
      case 'auth/invalid-email':
        alert('Sign up failed! Email address is invalid.')
        break
      default:
        console.log(error.code)
    }
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
  try {
    yield call(signOutUser)
    yield call(signOutSuccess)
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

//  Saga which is listening to the check user session action type (called by checkUserSession) and when it's heard, it calls the isUserAuthenticated function
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
