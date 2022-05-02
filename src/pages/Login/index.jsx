import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginContainer } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Close } from "../../components/close";

const Login = ({ setAuth }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    history.push("/");
    setAuth(true);
  };

  const voltarHome = () => {
    history.push("/");
  };

  return (
    <>
      <Close click={voltarHome} classe="login" />
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Entrar</h1>
          <Input
            placeholder="Digite seu email"
            type={"text"}
            register={register}
            name="email"
            error={errors.email?.message}
          >
            Email:
          </Input>
          <Input
            placeholder="Digite sua senha"
            type={"password"}
            register={register}
            name="password"
            error={errors.password?.message}
          >
            Senha:
          </Input>
          <Button type="submit">Entrar</Button>
        </form>

        <p>
          Ainda não é cadastrado? <a href="/register">Clique aqui</a> e
          cadastre-se!
        </p>
      </LoginContainer>
    </>
  );
};

export default Login;
