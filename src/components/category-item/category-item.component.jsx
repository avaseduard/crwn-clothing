import './category-item.styles.scss';

// Home page category container (with picture, title and shop now badge)
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }} // set the background image in css property
      ></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;