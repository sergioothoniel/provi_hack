import styled from "styled-components";

export const ContainerPerfil = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const ContainerInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
  }
`;

export const ImgInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    width: 100px;
    border: 2px solid white;
    border-radius: 50%;
    margin-bottom: 20px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;

export const InfoDados = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;

    p {
      font-size: 0.8em;
      margin: 8px 0px;
    }
  }
`;

export const ConteInfoExtra = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 40px 0;
  > div {
    display: flex;
    width: 80px;
    height: 80px;
    border: 1px solid white;
    border-radius: 50%;
    font-size: 0.7em;
    box-sizing: border-box;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const ConteBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    width: 150px;
    height: 40px;
    text-align: left;
    margin: 5px 0;
    font-size: 0.8em;
    font-weight: 700;
    background-color: #e49029;
    border: none;
    color: white;
  }
`;
