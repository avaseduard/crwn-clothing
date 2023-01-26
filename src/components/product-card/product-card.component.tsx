// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CategoryItem } from '../../store/categories/category.types'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCardContainer, Footer, Name } from './product-card.styles'

export type ProductCardProps = {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
