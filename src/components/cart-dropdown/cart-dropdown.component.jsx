import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'

import { setIsCartOpen } from '../../store/cart/cart.action'
import OutsideClickHandler from 'react-outside-click-handler'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  let isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  // With the useNavigate hook we navigate to a specific route with a click
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    // Collapse the dropdown cart
    toggleIsCartOpen()
    // Navigate to checkout
    navigate('/checkout')
  }

  return (
    <OutsideClickHandler onOutsideClick={toggleIsCartOpen}>
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>go to checkout</Button>
      </CartDropdownContainer>
    </OutsideClickHandler>
  )
}

export default CartDropdown
