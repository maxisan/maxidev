import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyles from 'styles';
import styledTheme from 'theme';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={styledTheme.light}>
      <Head>
        <title>Maxisan Dev</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

export async function getStaticProps({ locale }:{[key:string]:any}) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}