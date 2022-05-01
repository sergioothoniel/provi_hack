import styled from "styled-components";

export const HomeContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 0 2px 15px 0;

  .header-mobile{
    display: flex;
    padding: 20px 0;

    >h1{
      margin-left: 30px;
    }

    >button{
      width: 50px;
    }
  }

  .header-desktop{
    display: none;
    width: 100%;
    height: 600px;

    >section{
      width: 100%;
      display: flex;
      height: 20%;
      align-items: center;
      justify-content: space-around;
      background: #00000070;
}
      
      h5, h4, h3, h1{
        background: none;
        cursor: pointer;
        font-size: medium;
        font-weight: normal;
      }

      h1{
        font-size: initial;
        font-weight: initial;
      }

      >button{
        width: 95px;
      }
    }
        
  

  @media (min-width: 500px){
    .header-mobile{
      display: none;
    }

    .header-desktop{
      display: flex;
    }

    >section{
      display: none;
    }

  }
`

export const ImgBanner = styled.img`
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 100%;
  } ;
`;

export const DescriptionContainer = styled.div`
  p {
    color: #ffffff80;
  }

  h4 {
    color: #ffffffcf;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;

  div {
    width: 33%;
  }

  svg {
    width: 3em;
    height: 3em;
  }

  p {
    color: #ffffff80;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
`;

export const BonusContainer = styled.div`
  color: #ffffff80;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;

  > div {
    max-width: 49%;
    margin-top: 20px;
  }

  h5 {
    color: inherit;
    font-size: medium;
    width: 70%;
    margin: auto;
  }
`;

export const TittleBonus = styled.h4`
  width: 100%;
  border: 2px solid;
  border-radius: 15px;
  color: inherit;
`;
export const BonusBox = styled.ul`
  border: 2px solid;
  border-radius: 15px;
  color: inherit;
  height: 135px;
  padding: 10px 15px 0 25px;
  margin-top: 10px;

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
`;
