import { Fragment } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'
import CategoriesNavigationBar from '../../components/categories-nav-bar/categories-nav-bar.component'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <Fragment>
      <CategoriesNavigationBar />
      <hr />
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      )}
      {/* get the keys in an array (shop's actual categories from map) and setting them as title */}
    </Fragment>
  )
}

export default CategoriesPreview
