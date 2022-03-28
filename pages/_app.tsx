import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import styledTheme from '../theme'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }

  return (
    <ThemeProvider theme={styledTheme[theme]}>
      <button onClick={switchTheme}>Switch Theme</button>
      <GlobalStyles />
      <Component  {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
