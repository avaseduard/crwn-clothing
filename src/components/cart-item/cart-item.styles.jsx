import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`

export const CartItemImage = styled.img`
  width: 40%;
  height: 100%;
`

export const CartItemDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;

  .name {
    font-size: 16px;
    margin-bottom: 10px;
  }
`
