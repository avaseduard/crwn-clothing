// import { useContext } from 'react'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
// import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>product</span>
        </div>
        <div className='header-block'>
          <span>description</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>total: €{cartTotal}</span>
    </div>
  )
}

export default Checkout
