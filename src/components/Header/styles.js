import styled from "styled-components";

export const ConteHeader = styled.header`
  @media (min-width: 320px) and (max-width: 500px) {
    height: 40vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ConteHeaderInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    position: absolute;
    color: white;
    top: 10px;
    left: 10px;

    button {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
  }
`;
