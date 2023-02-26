import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component'
import { addItemToCart } from '../../store/cart/cart.reducer'
import {
  ProductBuyingContainer,
  ProductCategory,
  ProductDescription,
  ProductImageContainer,
  ProductName,
  ProductPrice,
} from './product-page.styles.jsx'

const ProductPage = () => {
  const dispatch = useDispatch()

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

  return (
    <div>
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
          <span>Our price: </span>€ {price}
        </ProductPrice>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          add to cart
        </Button>
      </ProductBuyingContainer>
      <ProductDescription>
        <span>Why you'll love it: </span>
        {description}
      </ProductDescription>
    </div>
  )
}

export default ProductPage
