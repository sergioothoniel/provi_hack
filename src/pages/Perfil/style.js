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

    h1 {
      margin-top: -20px;
      color: white;
      font-size: 1.2em;
    }

    h3 {
      margin-top: 10px;
      color: #9ea3a9;
      font-size: 0.8em;
      font-weight: 500;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #cc6b1f;
      border-radius: 50%;
      padding: 5px;
      position: relative;
      top: -40px;
      right: -35px;
      box-sizing: border-box;
    }

    span img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ImgInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    width: 100px;
    border-radius: 50%;
    border: 2px solid #c4671d;
    padding: 3px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;

export const DivisaoPerfil = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 3px;
    background-color: #0f2154;
    margin: 20px 0;
  }
`;

export const ConteInfoStatic = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const ConteStatistic = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    box-sizing: border-box;
  }
`;

export const ConteStaticInfo = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #c4671d;
    box-sizing: border-box;
    padding: 5px;
  }
`;

export const ContePoints = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    background: linear-gradient(#102035, #42439a, #102035);
    p {
      margin: 5px 0 0 0;
      font-size: 2em;
    }
    span {
      text-align: center;
      margin: 1px 0;
      font-size: 0.7em;
    }
    > div {
      margin: 3px 0;
      background-color: white;
      width: 25%;
      height: 1px;
    }
  }
`;

export const ContValor = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -17px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(61, 61, 64, 0.9);
    font-weight: 200;
  }
`;

export const InputPerfil = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    label {
      color: white;
    }
    input {
      height: 30px;
      background-color: transparent;
      border: 1px solid white;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding: 5px 10px 0px 10px;
      font-size: 1em;
      margin-top: 5px;
    }
    :nth-child(1) {
      margin-top: 0;
    }
  }
`;

export const ConteBtn = styled.div`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    button {
      width: 100px;
    }
  }
`;
