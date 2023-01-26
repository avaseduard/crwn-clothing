import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()

  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  // The toggle function calls the setIsCartFunction which inverts the isCartOpen constant; so when the cart is open and the button is pushed it closes the cart and vice versa
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
