import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/theme'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
