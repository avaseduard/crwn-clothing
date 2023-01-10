import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/category.action'
import './shop.styles.scss'

const Shop = () => {
  const dispatch = useDispatch()

  // Run only once the function that gets our items from the firestore database
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
    </Routes>
  )
}

export default Shop

// The string from path allows us to acces it in the category component and set it dynamically
