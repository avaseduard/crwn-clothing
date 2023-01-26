import { FC } from 'react'
import { CartItem as TCartItem } from '../../store/cart/cart.types'
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
} from './cart-item.styles'

type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
}

export default CartItem
