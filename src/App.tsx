import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />

      <GlobalStyles />
    </ThemeProvider>
  )
}
