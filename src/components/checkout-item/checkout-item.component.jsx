import { memo } from 'react'
import { useDispatch } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.reducer'
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

const CheckoutItem = memo(({ cartItem }) => {
  const dispatch = useDispatch()
  const { name, quantity, price, imageUrl } = cartItem

  const addItemHandler = () => dispatch(addItemToCart(cartItem))

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem))

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan className='name'>{name}</BaseSpan>
      <Quantity className='quantity'>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>€{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
})

export default CheckoutItem
