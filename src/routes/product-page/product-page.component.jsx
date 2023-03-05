import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'
import { addItemToCart } from '../../store/cart/cart.reducer'
import {
  BuyButton,
  ProductBuyingContainer,
  ProductCategory,
  ProductDescription,
  ProductImageContainer,
  ProductName,
  ProductPrice,
} from './product-page.styles.jsx'
import { useState } from 'react'
import CategoriesNavigationBar from '../../components/categories-nav-bar/categories-nav-bar.component'

const ProductPage = () => {
  const dispatch = useDispatch()
  const [buttonText, setButtonText] = useState('add to cart')

  // Bring the product database
  const categoriesMap = useSelector(selectCategoriesMap)

  // Get the path and use it to define the identifiers we need to find the product we want to render
  let { pathname } = useLocation()
  const categoryTitle =
    pathname.split('/')[2].charAt(0) + pathname.split('/')[2].slice(1)
  const productName = pathname.split('/')[3].replaceAll('%20', ' ')

  // Find the product object and pluck off the values we want to render
  const product = categoriesMap[categoryTitle].find(
    item => item.name === productName
  )
  const { price, imageUrl, description } = product

  // Add item to cart handler
  const addProductToCart = () => dispatch(addItemToCart(product))

  // Confirm user when item has been added to cart
  const confirmAddToCart = () => {
    setButtonText('added')
    setTimeout(() => {
      setButtonText('add to cart')
    }, 1500)
  }

  return (
    <div>
      <CategoriesNavigationBar />
      <hr />
      <ProductName>{productName} drone</ProductName>
      <ProductCategory>
        <span>{categoryTitle}</span> class
      </ProductCategory>
      <hr />
      <ProductImageContainer>
        <img src={imageUrl} alt={productName} />
      </ProductImageContainer>
      <hr />
      <ProductBuyingContainer>
        <ProductPrice>
          <span>Our price: </span>€{price}
        </ProductPrice>
        <BuyButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => {
            addProductToCart()
            confirmAddToCart()
          }}
        >
          {buttonText}
        </BuyButton>
      </ProductBuyingContainer>
      <ProductDescription>
        <span>Why you'll love it: </span>
        {description}
      </ProductDescription>
    </div>
  )
}

export default ProductPage
