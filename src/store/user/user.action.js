import { USER_ACTION_TYPES } from './user.types'
import { createAction } from '../../utils/reducer/reducer.utils'

// Receives the user object and it creates and returns an object with the type and the value is the user for payload
export const setCurrentUser = user =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

// Called when the App mounts and creates an action which we have a saga that's listening for
export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })

export const signInSuccess = user =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCES, user)

export const signInFailed = error =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
