// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const { name, quantity, price, imageUrl } = cartItem
  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext)
  const cartItems = useSelector(selectCartItems)

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

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
}

export default CheckoutItem
