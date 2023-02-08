import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
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
            <Link to={title.concat('/', product.name)}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
