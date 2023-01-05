import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  // The toggle function calls the setIsCartFunction which inverts the isCartOpen constant; so when the cart is open and the button is pushed it closes the cart and vice versa
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
