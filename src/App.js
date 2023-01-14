import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from './utils/firebase/firebase.utils'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { checkUserSession } from './store/user/user.action'

const App = () => {
  // Dispatch is the method we get back from the useDispatch redux hook
  const dispatch = useDispatch()

  // Runs only when the component mounts
  useEffect(() => {
    // // Returns a function that stops listening
    // const unsubscribe = onAuthStateChangedListener(user => {
    //   // Set the user to null or an object, depending on what we receive from the auth (sign in or out)
    //   // Call the function that creates an user entrance in the firestore database
    //   if (user) {
    //     createUserDocumentFromAuth(user)
    //   }
    //   dispatch(setCurrentUser(user))
    // })
    // // Makes it run whenever it unmounts
    // return unsubscribe
    // Dispatch the checkUserSession when the app mounts
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}
// Routes enables react route use
// Route enables one route
// <Route path='/' element={<Home />} /> means render the Home element when the path "/" is matched
// Index matches the '/' of the parent route; in this case we make the nav bar appear on every route
// The /* in path means that there will be another path after that one

export default App
