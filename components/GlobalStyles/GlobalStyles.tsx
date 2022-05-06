import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Quicksand', serif;

    background-color: ${({theme}) => theme.colors.onSurface};
    color: ${({theme}) => theme.colors.font};
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  h1 {
    font-size: 2rem;

    ${({theme}) => theme.viewports.desktop} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }
`