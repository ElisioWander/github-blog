import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-base']};
  }

  body {
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-background']};

    -webkit-font-smoothing: antialiased;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  h2, h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
