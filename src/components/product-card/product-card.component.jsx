import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.reducer'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCardContainer, Footer, Name } from './product-card.styles'

const ProductCard = ({ product, onClick }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product
  const [buttonText, setButtonText] = useState('add to cart')

  // Confirm user when item has been added to cart
  const confirmAddToCart = () => {
    setButtonText('added')
    setTimeout(() => {
      setButtonText('add to cart')
    }, 1500)
  }

  const addProductToCart = () => dispatch(addItemToCart(product))

  return (
    <ProductCardContainer onClick={onClick}>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <span className='price'>€{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={e => {
          e.stopPropagation()
          addProductToCart()
          confirmAddToCart()
        }}
      >
        {buttonText}
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
