import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import GlobalStyles from 'styles';
import styledTheme from 'theme';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';
import 'lang/i18n';

enum Pages {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const path = router.pathname
  const getTheme = ():string => {
    return path.split('/')[1] || 'home'
  }

  getTheme()

  return (
    <ThemeProvider theme={styledTheme[getTheme() as Pages]}>
      <Head>
        <title>Maxisan Dev</title>
      </Head>
      <GlobalStyles />
      <NavBar/>
      <Component {...pageProps} />
      {/* <Loading /> */}
    </ThemeProvider>
  );
}

export default MyApp;
