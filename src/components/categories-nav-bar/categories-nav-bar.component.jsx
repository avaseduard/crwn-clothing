import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Title,
  LinksContainer,
  LinkToCategory,
} from './categories-nav-bar-styles'

const CategoriesNavigationBar = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Title>go to your favourite category</Title>
      <hr align='center' width='40%' />
      <LinksContainer>
        <LinkToCategory onClick={() => navigate('/shop/advanced')}>
          advanced
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('/shop/cinema')}>
          cinema
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('/shop/enterprise')}>
          enterprise
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('/shop/mini')}>
          mini
        </LinkToCategory>
        <LinkToCategory onClick={() => navigate('/shop/toys')}>
          toys
        </LinkToCategory>
      </LinksContainer>
    </Fragment>
  )
}

export default CategoriesNavigationBar
