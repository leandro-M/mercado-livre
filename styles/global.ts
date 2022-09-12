import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: ${theme.fonts.light};
    font-style: normal;
    font-display: swap;
    src: url(/fonts/proximanova-light.woff2) format('woff2');
  }

  @font-face {
    font-family: ${theme.fonts.regular};
    font-style: normal;
    font-display: swap;
    src: url(/fonts/proximanova-regular.woff2) format('woff2');
  }

  @font-face {
    font-family: ${theme.fonts.semiBold};
    font-style: normal;
    font-display: swap;
    src: url(/fonts/proximanova-semibold.woff2) format('woff2');
  }

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
