import styled from "styled-components"

export const InputSelectContainer = styled.div`
select{
    width: 100%;
    height: 40px;
    background-color: initial;
    border: none;
    border-bottom: 1px solid #2f1a76;
    margin-top: 10px;
    color: #FFFFFF;
    font-size: initial;
}

option{
    border: none;
    border-bottom: 1px solid #2f1a76;
    margin-top: 10px;
    color: #FFFFFF;
    font-size: initial;
}

select:focus {
box-shadow: 0 0 0 0;
outline: 0;
}

span{
    color: red;
}
`