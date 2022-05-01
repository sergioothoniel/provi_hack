import styled from "styled-components";

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 100%;
    height: 40px;
    background-color: initial;
    border: none;
    border-bottom: 1px solid #2f1a76;
    margin-top: 10px;
    color: #ffffff;
    font-size: initial;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  span {
    color: red;
  }
`;
