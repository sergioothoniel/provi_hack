import styled from "styled-components"

export const AlugarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
display: flex;
flex-direction: column;

header{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;

    >button{
        width: 50px;
        margin-right: 20px;
    }
}

.cards-container{
    display: flex;
    flex-wrap: wrap;

    >div{
        width: 30%;
        height: 215px;



        figure{
            width: 90%;

        }

        h1, h2, span{
            font-size: x-small;
        }
    }
}

input{
    background-color: #16264f;
    border: none;
    border-radius: 10px;
    color: inherit;
}
`