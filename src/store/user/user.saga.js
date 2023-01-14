import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { USER_ACTION_TYPES } from './user.types'
import { signInSuccess, signInFailed } from './user.action'
import {
  getCurrentUser,
  createUserDocumentFromAuth,
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
    console.log(userSnapshot)
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

//  Saga which is listening to the check user session action type (called by checkUserSession) and when it's heard, it calls the isUserAuthenticated function
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
  yield all([call(onCheckUserSession)])
}
