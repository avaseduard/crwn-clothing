import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../store/user/user.selector'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { signOutStart } from '../../store/user/user.action'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'

// Navigation bar
const Navigation = () => {
  const dispatch = useDispatch()
  // Hook that we pass a selector function, which extracts of the value that we want from the whole redux store state object; every time the state changes (sign in or out), the currentUser changes and react rerenders the whole component
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const signOutUser = () => dispatch(signOutStart())

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/search'><i className='fas fa-search'></i></NavLink>
          <NavLink to='/shop'>shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink to='/auth'>sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {/* if iscartopen is true, it returns the component, if not, it doesn't return anything; the component is always true */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <hr />
      <Outlet />
    </Fragment>
  )
}
// Outlet will render the child components, like Home (in this case)
// Link is an anchor tag which takes us to the given hash
// Fragment is a wrapper, like a div, but doesn't render, doesn't appear in the dom tree; it uses as a parent html for reactdom

export default Navigation
