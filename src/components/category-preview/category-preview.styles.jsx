import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    align-items: center;
    margin-bottom: 20px;
  }
`

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
