import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
// import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
// import './navigation.styles.jsx';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'

// Navigation bar
const Navigation = () => {
  // Hook that we pass a selector function, which extracts of the value that we want from the whole redux store state object; every time the state changes (sign in or out), the currentUser changes and react rerenders the whole component
  const currentUser = useSelector(selectCurrentUser)

  // Get the currentUser value from the UserContext context; the component rerenders every time the currentUser value changes; also getthe setCurrentUser function to use it below in our sign out functionality
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  // const { currentUser } = useContext(UserContext)
  // // The function is being called by the signout butto onclick and it logs out our user
  // const signOutHandler = async () => {
  //   // Get the null response (succes sign out) from signOutUser
  //   await signOutUser();
  //   // Set the value of currentUser to null
  //   setCurrentUser(null)
  // };
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
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
      <Outlet />
    </Fragment>
  )
}
// Outlet will render the child components, like Home (in this case)
// Link is an anchor tag which takes us to the given hash
// Fragment is a wrapper, like a div, but doesn't render, doesn't appear in the dom tree; it uses as a parent html for reactdom

export default Navigation
