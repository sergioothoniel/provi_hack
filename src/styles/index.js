import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
body, p, h1, h2, h3, h4, h5, h6, figure{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #17222a;
    color: #F8F9FA;
    
}

a{
    text-decoration: none;
}

`

export default GlobalStyle
