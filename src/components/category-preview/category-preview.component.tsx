// import { Link } from 'react-router-dom'
import { FC } from 'react'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles'
import { CategoryItem } from '../../store/categories/category.types'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title className='title' to={title}>
          {title}
        </Title>
      </h2>
      <Preview>
        {/* Show only the first four items */}
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
