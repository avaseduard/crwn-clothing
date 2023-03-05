import styled from 'styled-components'
import Button from '../../components/button/button.component'

export const NavigateToCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    padding: 0px;
  }
`

export const LinkToCategory = styled.div`
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const ProductName = styled.h1`
  text-align: center;
`

export const ProductCategory = styled.h2`
  text-align: center;

  span {
    color: red;
    letter-spacing: 0.2rem;
  }
`

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 40%;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`

export const ProductBuyingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductPrice = styled.p`
  font-size: 1.3rem;

  span {
    font-weight: bold;
  }
`

export const BuyButton = styled(Button)`
  @media screen and (max-width: 767px) {
    min-width: 110px;
    padding: 10px;
  }
`

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid black;

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`
