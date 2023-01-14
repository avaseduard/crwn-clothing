import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // local storage default
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer'
// import { loggerMiddleware } from './middleware/logger'
// import thunk from 'redux-thunk'

// Configuration object for the redux persist
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'], // blacklist or whitelist - array of keys we (don't) want to set to local storage form our reducers; in this case we need only the cart
}

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware()

// It takes two values: the config object and the reducer we want to save
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Middlewares is a library helper that runs before the action hits the reducer; it is part of the logger's functionality and needs the below boilerplate to run; we can either choose logger if we want to use redux's or loggerMiddleWare if we want to run ours; the logger runs only while we are in 'development' and not when we are in 'production'
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean)

// Enable the use of redux devtools chrome extension while in 'production'
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// Create the redux store using the rootReducer and logger to help see the state; insetad of rootReducer use the persistedReducer from local storage
// export const store = createStore(rootReducer, undefined, composedEnhancers)
export const store = createStore(persistedReducer, undefined, composedEnhancers)

// Run the Saga with the rootSaga
sagaMiddleware.run(rootSaga)

// The persistor is what we pass to our redux PersistGate which wraps the App in index.js
export const persistor = persistStore(store)