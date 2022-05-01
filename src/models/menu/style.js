import styled from "styled-components";

export const ConteMenuGeral = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.4);
    box-sizing: border-box;
    overflow-y: scroll;
  }
`;

export const ConteMenu = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 80%;
    background-color: #0d1724;
    padding: 30px;
    box-sizing: border-box;
  }
`;

export const ConteImg = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100px;
    border: 2px solid #c4671d;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 3px;
    img {
      display: flex;
      width: 100%;
      border-radius: 50%;
    }
  }
`;

export const ConteInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 30px;
      color: white;
      font-size: 1.2em;
    }

    h3 {
      margin-top: 10px;
      color: #9ea3a9;
      font-size: 0.8em;
      font-weight: 500;
    }
  }
`;

export const DivisaoMenu = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 3px;
    background-color: #0f2154;
    margin: 50px 0;
  }
`;

export const ConteBtns = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BtnsHome = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    align-items: center;
    margin-top: 20px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 10px;
      padding: 10px;
      font-size: 1.5em;
      font-weight: bold;
      color: white;
      background-color: #cc6b1f;
      margin-right: 15px;
    }

    :nth-child(1) {
      margin-top: 0px;
    }

    h2 {
      color: white;
      font-size: 1.3em;
      font-weight: 400;
    }
  }
`;
