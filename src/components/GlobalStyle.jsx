import { createGlobalStyle } from 'styled-components'
import GlobalFont from '../fonts/Zaha-Hadid-Sans.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Zaha Hadid Sans';
    src: local('Zaha Hadid Sans'), url(${GlobalFont}) format('truetype');
    }
    html {
        font-size: 62.5%;
    }
    body {
        width : 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Zaha Hadid Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .loader {
        width: 100vw;
        height: 100vh;
        text-align: center;
        margin-top: 20%;
    }
`
export default GlobalStyle
