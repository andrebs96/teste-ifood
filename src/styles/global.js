import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #ea1d2c;
        --white: #fff;
        --borders: #dcdcdc;
    }
    body {
        font-family: "SulSans", Helvetica, sans-serif;
    }
`

export default GlobalStyles 