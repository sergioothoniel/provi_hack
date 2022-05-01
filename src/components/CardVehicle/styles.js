import styled from "styled-components";

export const CardContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #555c67;
    border-radius: 10px;
    padding: 20px 15px;
    box-sizing: border-box;
    background-color: #111e2f;
    margin: 20px 10px 0 0;
    figure {
      width: 200px;
      width: 150px;
      img {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
`;

export const ConteIndoCard = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.5em;
      color: white;
    }
    > div {
      color: #5b646f;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5px;
      text-align: center;
      p {
        font-size: 0.7em;
        margin-bottom: 5px;
        span {
          margin-left: 3px;
          font-size: 1.2em;
          font-weight: 600;
        }
      }
      span {
        font-size: 0.8em;
      }
    }
  }
`;

export const DivisaoCard = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 1px;
    background-color: #5b646f;
    margin: 15px 0;
  }
`;

export const ConteLocal = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    h2 {
      color: #5b646f;
      font-weight: 600;
    }
  }
`;
