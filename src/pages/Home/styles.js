import styled from "styled-components"

export const HomeContainer = styled.div`
height: 200vh;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 90%;
margin: auto;
padding: 0 2px 15px 0;

hr{
    margin: 30px 10px;
}

header{
    display: flex;
    padding: 15px 0 0 21px;
    align-items: center;

    button{
    width: 45px;
    margin-right: 35px;
}
}

>section{
    border: 1px solid white;
    width: 100%;
    height: 30vh;
}
`

export const DescriptionContainer = styled.div`

p{    
    color: #ffffff80;
}

h4{
    color: #ffffffcf;
}
`

export const DetailsContainer = styled.div`
display: flex;

div{
    width: 33%;
}

svg{
    width: 3em;
    height: 3em;
}

p{    
    color: #ffffff80;
}
`

export const CardsContainer = styled.div`
display: flex;
`

export const BonusContainer = styled.div`
color: #ffffff80;
display: flex;
flex-wrap: wrap;
padding: 10px;
justify-content: space-between;

>div{
    max-width: 49%;
    margin-top: 20px;
}

h5{
    color: inherit;   
    font-size: medium;
    width: 70%;
    margin: auto;
}

`

export const TittleBonus = styled.h4`
width: 100%;
border: 2px solid;
border-radius: 15px;
color: inherit;
`
export const BonusBox = styled.ul`
border: 2px solid;
border-radius: 15px;
color: inherit;
height: 135px;
padding: 10px 15px 0 25px;
margin-top: 10px;

li{
    margin-bottom: 15px;
}

`

export const ButtonsContainer = styled.div`
width: 100%;
height: 110px;
display: flex;
flex-direction: column;
justify-content: space-between;

`