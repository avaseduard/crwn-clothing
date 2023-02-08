import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectCategories } from '../../store/categories/category.selector'
import './product-page.styles.scss'

const ProductPage = () => {
  // Bring the product database
  const categoriesMap = useSelector(selectCategories)
  // Get the path and use it to define the identifiers we need to find the product we want to render
  let { pathname } = useLocation()
  const categoryTitle =
    pathname.split('/')[2].charAt(0).toUpperCase() +
    pathname.split('/')[2].slice(1)
  const productName = pathname.split('/')[3].replaceAll('%20', ' ')

  // Find the product object and pluck off the values we want to render
  const result = categoriesMap.find(({ title }) => title === categoryTitle)
  const product = result.items.find(({ name }) => name === productName)
  const { price, imageUrl, description } = product

  return (
    <div>
      <h1>{productName}</h1>
      <h2>in {categoryTitle.toLocaleLowerCase()}</h2>
      <img src={imageUrl} alt={productName} />
      <p>Price: {price}€</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default ProductPage
