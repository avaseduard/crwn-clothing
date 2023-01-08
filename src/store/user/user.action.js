import { USER_ACTION_TYPES } from './user.types'
import { createAction } from '../../utils/reducer/reducer.utils'

// Receives the user object and it creates and returns an object with the type and the value is the user for payload
export const setCurrentUser = user =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
