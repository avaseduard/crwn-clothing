import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom' // makes it possible to use the browser router from react router dom dependency; the App component is nested in the browser router
import { Provider } from 'react-redux' // the redux provider which wraps the whole app
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store/store' // the redux store which is being passed to the provider
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <div className='main-container'>
            <App />
            </div>
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
serviceWorkerRegistration.register()
