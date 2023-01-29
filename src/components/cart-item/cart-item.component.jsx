import { memo } from 'react'
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
} from './cart-item.styles'

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <span className='name'>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  )
})

export default CartItem
