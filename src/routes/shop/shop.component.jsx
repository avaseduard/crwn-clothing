import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import ProductPage from '../product-page/product-page.component'
import './shop.styles.scss'

import { setCategories } from '../../store/categories/category.reducer'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path=':category/:productName' element={<ProductPage />} />
    </Routes>
  )
}

export default Shop

// The string from path allows us to acces it in the category component and set it dynamically
