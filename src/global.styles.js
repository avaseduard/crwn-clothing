import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 40px;
    background-color: #f5f5f5;

    @media screen and (max-width: 767px) {
      padding: 0;
      background-color: #ffffff;
    }
  }

  .main-container {
    max-width: 70rem;
    height: auto;
    margin: 2vw auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2rem 6rem 0.5rem rgba(0, 0, 0, 0.5);
  
    @media screen and (max-width: 767px) {
      max-width: 100%;
      margin: 0;
      padding: 10px;
      border-radius: 0;
      box-shadow: unset;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }
`
