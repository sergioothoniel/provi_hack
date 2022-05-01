import { ConteFrase, ConteLogo, LogoContainer } from "./styles";

const Logos = ({ funct }) => {
  return (
    <>
      {funct ? (
        <LogoContainer>
          <ConteLogo>
            <p>
              // new<span>rota</span>
            </p>
          </ConteLogo>
          <ConteFrase>
            <p>
              O <span>futuro</span> da mobilidade.
            </p>
          </ConteFrase>
        </LogoContainer>
      ) : (
        <LogoContainer>
          <ConteLogo>
            <p>
              // new<span>rota</span>
            </p>
          </ConteLogo>
        </LogoContainer>
      )}
    </>
  );
};

export default Logos;
