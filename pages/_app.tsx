import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import menuMock from 'components/NavBar/mocks/menuMock';
import GlobalStyles from 'styles';
import styledTheme from 'theme';
import Loading from 'components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={styledTheme.light}>
      <Head>
        <title>Maxisan Dev</title>
      </Head>
      <GlobalStyles />
      <NavBar menu={menuMock} />
      <Component {...pageProps} />
      {/* <Loading /> */}
    </ThemeProvider>
  );
}

export default MyApp;
