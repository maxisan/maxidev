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
`