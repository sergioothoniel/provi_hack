import { ButtonContainer } from "./styles";

const Button = ({ click, children, colorSchema = false, ...rest }) => {
  return (
    <>
      {click ? (
        <ButtonContainer onClick={click} colorSchema={colorSchema} {...rest}>
          {children}
        </ButtonContainer>
      ) : (
        <ButtonContainer colorSchema={colorSchema} {...rest}>
          {children}
        </ButtonContainer>
      )}
    </>
  );
};

export default Button;
