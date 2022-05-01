import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.colorSchema ? "#060672" : "#e49029")};
`;
