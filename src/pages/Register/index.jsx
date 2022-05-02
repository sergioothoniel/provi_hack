import { RegisterContainer } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Close } from "../../components/close";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push("/login");
  };

  const voltarHome = () => {
    history.push("/");
  };

  return (
    <>
      <Close click={voltarHome} classe="login" />
      <RegisterContainer>
        <h1>Cadastar</h1>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type={"text"}
            register={register}
            name="name"
            error={errors.name?.message}
          >
            Nome completo:
          </Input>
          <Input
            type={"email"}
            register={register}
            name="email"
            error={errors.email?.message}
          >
            E-mail:
          </Input>
          <Input
            type={"password"}
            register={register}
            name="password"
            error={errors.password?.message}
          >
            Senha:
          </Input>
          <Input
            type={"password"}
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          >
            Confirme sua senha:
          </Input>

          <h5>
            Ao clicar em registrar, você concordacom nossos{" "}
            <a href="/">termos de utilização</a>
          </h5>

          <Button>Cadastrar</Button>
        </form>
      </RegisterContainer>
    </>
  );
};

export default Register;
