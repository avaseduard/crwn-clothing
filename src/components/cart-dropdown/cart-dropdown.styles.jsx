import styled from 'styled-components'
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 50px;
  z-index: 5;

  #root > div {
    display: flex;
    justify-content: center;
  }

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 767px) {
    top: 60px;
    right: 30px;
    padding: 10px;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
      margin-top: unset;
    }
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    height: 300px;
  }
`
