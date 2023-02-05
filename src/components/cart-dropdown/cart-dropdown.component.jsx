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

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const isCartOpen = useSelector(selectIsCartOpen)

  // With the useNavigate hook we navigate to a specific route with a click
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    // Collapse the dropdown cart
    dispatch(setIsCartOpen(!isCartOpen))
    // Navigate to checkout
    navigate('/checkout')
  }

  return (
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
  )
}

export default CartDropdown
