import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop

// The string from path allows us to acces it in the category component and set it dynamically
