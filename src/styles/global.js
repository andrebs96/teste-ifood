import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --generic-color: #dcdcdc;
        --header-color: #f7f7f7;
        --primary-color: #ea1d2c;
        --text-color: #3f3e3e;
        --white: #fff;
    }
    body {
        font-family: "SulSans", Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyles 