import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'

import './checkout.styles.scss'
import {
  LinkToCategory,
  NavigateToCategory,
} from '../product-page/product-page.styles'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

const Checkout = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <Fragment>
      <NavigateToCategory>
        <LinkToCategory onClick={() => navigate('../../../shop/advanced')}>
          advanced
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('../../../shop/cinema')}>
          cinema
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('../../../shop/enterprise')}>
          enterprise
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('../../../shop/mini')}>
          mini
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('../../../shop/toys')}>
          toys
        </LinkToCategory>
      </NavigateToCategory>
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
