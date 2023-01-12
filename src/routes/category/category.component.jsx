import { useContext, useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom' // alows to get the path value ':category' from shop component route, as an object
import ProductCard from '../../components/product-card/product-card.component'
// import { CategoriesContext } from '../../contexts/categories.context'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'
import './category.styles.scss'

const Category = () => {
  const { category } = useParams() // get the category from shop to define below
  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  // Render only when category category or categoriesMap change
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className='category-title'>{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {/* map only if products is available (it takes time to fetch the categoriesMap) */}
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  )
}

export default Category
