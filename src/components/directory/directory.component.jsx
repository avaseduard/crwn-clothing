import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles'

// Home categories array of objects
const categories = [
  {
    id: 1,
    title: 'advanced',
    imageUrl: 'https://i.ibb.co/MhrnQ4x/advanced.png',
    route: 'shop/advanced',
  },
  {
    id: 2,
    title: 'cinema',
    imageUrl: 'https://i.ibb.co/zhP55V4/cinema.png',
    route: 'shop/cinema',
  },
  {
    id: 3,
    title: 'enterprise',
    imageUrl: 'https://i.ibb.co/2KKnHNM/enterprise.png',
    route: 'shop/enterprise',
  },
  {
    id: 4,
    title: 'mini',
    imageUrl: 'https://i.ibb.co/y5B3d9T/mini.png',
    route: 'shop/mini',
  },
  {
    id: 5,
    title: 'toys',
    imageUrl: 'https://i.ibb.co/CsfX7fL/toys.png',
    route: 'shop/toys',
  },
]

// Home page container for all categories
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  )
}

export default Directory
