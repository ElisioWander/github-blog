import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'
import { queryClient } from './services/reactQuery'
import { QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/theme'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Router />
      </QueryClientProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
