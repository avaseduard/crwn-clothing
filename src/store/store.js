import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // local storage default
// import logger from 'redux-logger'

// Create own middleware
const loggerMiddleware = store => next => action => {
  if (!action) next(action)

  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('currentState: ', store.getState())

  next(action)

  console.log('next state: ', store.getState())
}

// Configuration object for the redux persist
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'], // array of keys we don't want to set to local storage form our reducers; in this case user is coming form firebase, so we don't want to mess with that
}

// It takes two values: the config object and the reducer we want to save
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Middlewares is a library helper that runs before the action hits the reducer; it is part of the logger's functionality and needs the below boilerplate to run
const middleWares = [loggerMiddleware]
const composedEnhancers = compose(applyMiddleware(...middleWares))

// Create the redux store using the rootReducer and logger to help see the state; insetad of rootReducer use the persistedReducer from local storage
// export const store = createStore(rootReducer, undefined, composedEnhancers)
export const store = createStore(persistedReducer, undefined, composedEnhancers)

// The persistor is what we pass to our redux PersistGate which wraps the App in index.js
export const persistor = persistStore(store)
