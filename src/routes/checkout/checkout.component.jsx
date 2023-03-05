import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import CategoriesNavigationBar from '../../components/categories-nav-bar/categories-nav-bar.component'

import './checkout.styles.scss'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <Fragment>
      <CategoriesNavigationBar />
      <hr />
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>item</span>
          </div>
          <div className='header-block'>
            <span>name</span>
          </div>
          <div className='header-block'>
            <span>qty.</span>
          </div>
          <div className='header-block'>
            <span>price</span>
          </div>
          <div className='header-block'>
            <span>del.</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className='total'>total: €{cartTotal}</span>
        <PaymentForm />
      </div>
    </Fragment>
  )
}

export default Checkout
