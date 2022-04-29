import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 33%;
justify-content: center;
border: 1px solid;
border-radius: 15px;
padding: 15px 0;
cursor: pointer;
background-color: #202e38;
margin: 2px;

figure{
    height: 100px;
    width: 125px;
    background-color: inherit;
}

img{
    width: 100%;
    max-height: 100%;
    border-radius: 10px;
}

h3{
    background-color: inherit;
}

section{
    font-size: small;
    color: #ffffff80;
    text-align: start;
    background-color: inherit;
}

p{
    color: #ffffff80;
    background-color: inherit;
    margin-top: 6px;
}

span{
    font-size: x-small;
    color: #ffffff80;
    background-color: inherit;
}



`