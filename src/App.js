import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkUserSession } from './store/user/user.action'
import { GlobalStyle } from './global.styles'
import Spinner from './components/spinner/spinner.component'

const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
)
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
)
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))

const App = () => {
  // Dispatch is the method we get back from the useDispatch redux hook
  const dispatch = useDispatch()

  // Runs only when the component mounts
  useEffect(() => {
    // Dispatch the checkUserSession when the app mounts
    dispatch(checkUserSession())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
// Routes enables react route use
// Route enables one route
// <Route path='/' element={<Home />} /> means render the Home element when the path "/" is matched
// Index matches the '/' of the parent route; in this case we make the nav bar appear on every route
// The /* in path means that there will be another path after that one

export default App
