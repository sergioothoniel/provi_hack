import styled from "styled-components";

export const LogoContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ConteLogo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1.2em;
    margin-bottom: 10px;
    span {
      font-weight: 600;
    }
    p {
      font-weight: 200;
    }
  }
`;

export const ConteFrase = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    span {
      font-weight: 400;
    }
    p {
      font-weight: 200;
    }
  }
`;
