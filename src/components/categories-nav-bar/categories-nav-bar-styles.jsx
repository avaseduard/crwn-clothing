import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 150px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    padding: 0px;
  }
`

export const LinkToCategory = styled.div`
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 5px;
  }
`
