import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

// Home page container for all categories
const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
