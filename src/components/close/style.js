import styled from "styled-components";

export const ConteClose = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    font-size: 1em;
    line-height: 1em;
    margin: -10px 0 10px 0;
    color: white;
    right: -13px;
    top: -2px;
    span {
      width: 10px;
      height: 16px;
      text-align: center;
      padding: 3px 5px 5px 5px;
      border-radius: 5px;
      background-color: #cc6b1f;
    }
  }
`;

export const ConteLogCad = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    font-size: 1em;
    line-height: 1em;
    margin: -10px 0 10px 0;
    color: white;
    right: 20px;
    top: 30px;
    span {
      width: 10px;
      height: 16px;
      text-align: center;
      padding: 3px 5px 5px 5px;
      border-radius: 5px;
      background-color: #cc6b1f;
    }
  }
`;
