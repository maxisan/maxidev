import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import styledTheme from '../theme';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={styledTheme.light}>
      <Head>
        <title>Create Nexsadasdt App Iujuu</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
