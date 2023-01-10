import { compose, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

// Create own middleware
const loggerMiddleware = store => next => action => {
  if (!action) next(action)

  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('currentState: ', store.getState())

  next(action)

  console.log('next state: ', store.getState())
}

// Middlewares is a library helper that runs before the action hits the reducer; it is part of the logger's functionality and needs the below boilerplate to run
const middleWares = [loggerMiddleware]
const composedEnhancers = compose(applyMiddleware(...middleWares))

// Create the redux store using the rootReducer and logger to help see the state
export const store = createStore(rootReducer, undefined, composedEnhancers)
