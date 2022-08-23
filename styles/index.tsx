import { createGlobalStyle } from 'styled-components';
import viewports from './utils';

export default createGlobalStyle`

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Quicksand', serif;

    background-color: ${({ theme }) => theme.colors.main[50]};
    color: ${({ theme }) => theme.colors.font};
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 2rem;

    ${viewports.desktop} {
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
`;
