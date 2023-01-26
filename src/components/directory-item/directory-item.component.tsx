import { FC } from 'react'
import { DirectoryCategory } from '../directory/directory.component'
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'
import { useNavigate } from 'react-router-dom'

type DirectoryItemProps = {
  category: DirectoryCategory
}

// Home page category container (with picture, title and shop now badge)
const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category
  // Link the cards to their appropiate category routes
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
