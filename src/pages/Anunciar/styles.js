import styled from "styled-components"

export const PostContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;

header{
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;

    h1{
        margin-right: 100px;
    }
    
    >span{
        font-size: x-small;
    }    

    >button{
        width: 50px;
    }
}

form{
    width: 90%;
    margin: auto;

    button{
        margin: 30px 0;
    }
}

.form-inputsContainer{  
   
    height: 215vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #0D0D0D;
    border-radius: 10px;
    padding: 0 30px;

    fieldset{
        padding: 10px 20px;

        input{
            margin-left: 30px;
        }
    }

    >span{
        font-size: small;
        text-align: center;
    }

    >p{
        background-color: inherit;
        margin-top: -33px;
        font-size: x-small;
        
        >a{
            text-decoration: underline;
            color: inherit;
        }
    }
}


    .img-link{
        font-size: small;
        color: inherit;
    }

    >span{
        font-size: small;
        text-align: center;
    }

    

`

