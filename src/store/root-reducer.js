import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

// Use the combineReducers method to combine all reducers into a general one; they keys are the name of the reducer slice and the values are the actual reducer function
export const rootReducer = combineReducers({
  user: userReducer
})