import styled from 'styled-components'

export const Name = styled.span`
  margin-bottom: 15px;
`

export const ProductCardContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding: 0 5px 10px 5px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 12px gray;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }

    .price {
      font-weight: bold;
    }

    ${Name} {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 767px) {
    height: 240px;
    margin-bottom: 10px;

    button {
      top: 150px;
      display: block;
      opacity: 0.5;
      min-width: unset;
      padding: 0 10px;
    }

    &:hover {
      img {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
