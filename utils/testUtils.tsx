import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import { ThemeTypes } from "../theme/interface"
import { ReactElement } from "react"

const renderWithTheme = (children: ReactElement, themeType?: ThemeTypes) => {
  return render(
    <ThemeProvider theme={theme[themeType ? themeType : 'light']}>
      {children}
    </ThemeProvider>
  )
}

export default renderWithTheme