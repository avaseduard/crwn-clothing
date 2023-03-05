import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom' // alows to get the path value ':category' from shop component route, as an object
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector'
import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'
import CategoriesNavigationBar from '../../components/categories-nav-bar/categories-nav-bar.component'
import './category.styles.scss'

const Category = () => {
  const navigate = useNavigate()
  const { category } = useParams() // get the category from shop to define below
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  // Render only when category or categoriesMap change
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoriesNavigationBar />
      <hr />
      <h2 className='category-title'>{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {/* map only when products are available (it takes time to fetch the categoriesMap) */}
          {products &&
            products.map(product => (
              <ProductCard
                onClick={() => navigate(product.name)}
                key={product.id}
                product={product}
              />
            ))}
        </div>
      )}
    </Fragment>
  )
}

export default Category
