import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom' // makes it possible to use the browser router from react router dom dependency; the App component is nested in the browser router
// import { UserProvider } from './contexts/user.context' // the app component is nested in the userprovider component which allows it to access the user stored data anywhere
// import { CategoriesProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context'
import { Provider } from 'react-redux' // the redux provider which wraps the whole app
import { store } from './store/store' // the redux store which is being passed to the provider
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
              <App />
            {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
