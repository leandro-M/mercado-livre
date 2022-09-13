import { createGlobalStyle, css } from 'styled-components'
import theme from './theme'

import fonts from './fonts'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${() => {
    return Object.keys(fonts).map((font) => css`
      @font-face {
        font-family: ${fonts[font as keyof typeof fonts]};
        font-style: normal;
        font-display: swap;
        src: url(/fonts/proximanova-${font}.woff2) format('woff2');
      }
    `)
  }}

  .ReactModal__Overlay--after-open {
    z-index: 999999;
  }

  .-hidden-body {
    overflow: hidden;
  }

  html {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body, #__next {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.silver};
  }

  body {
    font-family: ${theme.fonts.regular},-apple-system,Roboto,Arial,sans-serif,sans-serif
  }
`

export default GlobalStyles
