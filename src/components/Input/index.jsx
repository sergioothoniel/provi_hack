import { InputPerfil } from "../../pages/Perfil/style";
import { InputBox } from "./styles";

const Input = ({ children, type, register, name, error, ...rest }) => {
  return (
    <InputBox>
      <label>
        {children} {!!error && <span>{"   -   " + error}</span>}
      </label>
      <input type={type} {...register(name)} {...rest} />
    </InputBox>
  );
};

export default Input;

export const InputPerfilBox = ({ children, label, disabled }) => {
  return (
    <>
      {disabled ? (
        <InputPerfil>
          <label>{label}</label>
          <input disabled placeholder={children} />
        </InputPerfil>
      ) : (
        <InputPerfil>
          <label>{label}</label>
          <input placeholder={children} />
        </InputPerfil>
      )}
    </>
  );
};
