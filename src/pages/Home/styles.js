import styled from "styled-components";

export const HomeContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 20px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  box-sizing: border-box;
  p {
    font-size: 0.9em;
    font-weight: 200;
    color: #ffffff80;
    box-sizing: border-box;
  }
`;

export const DivisaoHome = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 1px;
    background-color: #222d58;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
`;

export const DetailsContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      width: 30%;
    }

    svg {
      width: 3em;
      height: 3em;
    }

    p {
      word-wrap: break-word;
      color: #ffffff80;
    }
  }
`;
export const ConteBtnHome = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    margin: 50px 0;
    button {
      background-color: transparent;
      border: 1px solid #ffffff80;
      padding: 2px 60px;
      box-sizing: border-box;
    }
  }
`;

export const CardsContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    box-sizing: border-box;
  }
`;

export const BonusContainer = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    box-sizing: border-box;

    h5 {
      color: inherit;
      font-size: medium;
      text-align: center;
      margin: 30px 0;
      font-weight: 200;
    }
  }
`;

export const ConteInfoSust = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    div {
      margin: 0 10px 0 0;
    }
  }
`;

export const TittleBonus = styled.h4`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #4c535c;
    border-radius: 10px;
    color: inherit;
    background-color: #111e2f;
    box-sizing: border-box;
  }
`;
export const BonusBox = styled.ul`
  border: 2px solid;
  border-radius: 15px;
  color: inherit;
  padding: 10px 15px 0 25px;
  margin-top: 10px;
  border: 2px solid #4c535c;
  background-color: #111e2f;
  box-sizing: border-box;

  li {
    margin-bottom: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;
