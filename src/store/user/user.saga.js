import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { USER_ACTION_TYPES } from './user.types'
import {
  signInSuccess,
  signInFailed,
  signUpSucces,
  signUpFailed,
  signUpStart,
} from './user.action'
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
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
    console.log(userSnapshot.data())
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
    // Trigger google sign in pop up, take auth object, pull of the user
    const { user } = yield call(signInWithGooglePopup)
    // Run user through getSnapshot
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
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
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )
    yield put(signUpSucces(user, { displayName }))
  } catch (error) {
    yield put(signUpFailed(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
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
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCES, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}
