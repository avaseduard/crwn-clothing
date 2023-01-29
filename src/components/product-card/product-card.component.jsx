// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCardContainer, Footer, Name } from './product-card.styles'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = product
  // const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  const cartItems = useSelector(selectCartItems)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <span className='price'>€{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
