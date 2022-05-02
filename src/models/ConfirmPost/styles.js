import styled from "styled-components"

export const ConfirmPostContainer = styled.div`
width: 75vw;
height: 48vh;
position: fixed;
top: 18%;
left: 12%;    
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 30px;


h3{
    background-color: inherit;
    font-size: initial;
    font-weight: inherit;
}

svg{
    width: 125px;
    height: 125px;
}

button{
    width: 20%;
    margin-top: 50px;
}

`

export const CortainBlur = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background-color: #8080806e;

`