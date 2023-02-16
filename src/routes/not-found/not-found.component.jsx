import './not-found.styles.jsx'
import { NotFoundContainer, NotFoundMessage } from './not-found.styles.jsx'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundMessage>Oops! You seem to be lost.</NotFoundMessage>
      <img src='https://i.ibb.co/gg6qQCs/notfound.jpg' alt='not found' />
    </NotFoundContainer>
  )
}

export default NotFound
