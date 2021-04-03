import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --generic-color: #dcdcdc;
        --header-color: #f7f7f7;
        --primary-color: #ea1d2c;
        --white: #fff;
    }
    body {
        font-family: "SulSans", Helvetica, sans-serif;
    }
`

export default GlobalStyles 