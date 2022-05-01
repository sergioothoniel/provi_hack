import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, p, h1, h2, h3, h4, h5, h6, figure, option{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #0D1724;
    color: #F8F9FA; 
    

}

a{
    text-decoration: none;
}
`;


button{
    cursor: pointer;
}

`;

export default GlobalStyle;
