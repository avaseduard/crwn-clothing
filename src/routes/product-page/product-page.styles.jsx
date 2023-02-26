import styled from 'styled-components'

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
    width: 100%
  }
`

export const ProductBuyingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductPrice = styled.p`
  font-size: 1.3rem;

  span {
    font-weight: bold;
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
