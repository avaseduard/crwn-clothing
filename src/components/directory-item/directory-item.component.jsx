import './directory-item.styles.scss'

// Home page category container (with picture, title and shop now badge)
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }} // set the background image in css property
      ></div>
      <div className='body'>
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
