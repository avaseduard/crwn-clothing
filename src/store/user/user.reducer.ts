import { AnyAction } from 'redux'
import { USER_ACTION_TYPES } from './user.types'
import {
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signInFailed,
  signOutFailed,
} from './user.action'
import { UserData } from '../../utils/firebase/firebase.utils'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly error: Error | null
}

export const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

// The default value of the state is the INITIAL_STATE, which is valid for when the function is run for the first time; the reducer gets triggered every single time there's an action, even in another reducer, like the cart reducer (that's how redux works), that's why we need to set the default action to return the previous state if none of the cases meet the type; the userReducer returns an object made out of state and payload
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  }
  if (
    signUpFailed.match(action) ||
    signInFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    }
  }
  return state
}
