import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

// Navigation bar
const Navigation = () => {
  // Get the currentUser value from the UserContext context; the component rerenders every time the currentUser value changes; also getthe setCurrentUser function to use it below in our sign out functionality
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  // // The function is being called by the signout butto onclick and it logs out our user
  // const signOutHandler = async () => {
  //   // Get the null response (succes sign out) from signOutUser
  //   await signOutUser();
  //   // Set the value of currentUser to null
  //   setCurrentUser(null)
  // };
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {/* if iscartopen is true, it returns the component, if not, it doesn't return anything; the component is always true */}
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
// Outlet will render the child components, like Home (in this case)
// Link is an anchor tag which takes us to the given hash
// Fragment is a wrapper, like a div, but doesn't render, doesn't appear in the dom tree; it uses as a parent html for reactdom

export default Navigation;
