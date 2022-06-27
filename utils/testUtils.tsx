/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import theme from '../theme';
import { ThemeTypes } from '../theme/interface';

const renderWithTheme = (children: ReactElement, themeType?: ThemeTypes) => render(
  <ThemeProvider theme={theme[themeType || 'light']}>
    {children}
  </ThemeProvider>,
);

export default renderWithTheme;
