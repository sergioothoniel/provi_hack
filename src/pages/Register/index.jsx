import { RegisterContainer } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Close } from "../../components/close";
import { api } from "../../API/index";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    nome: yup
      .string()
      .required("Campo Obrigatório")
      .matches("^([a-zA-Z]+)$", "Somente letras"),
    sobrenome: yup
      .string()
      .required("Campo Obrigatório")
      .matches("^([a-zA-Z ]+)$", "Somente letras"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    senha: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .matches(
        "(?=^.{8,20})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#!-@_])",
        "Somente letras maiúscula e minúscula, um número, e um caracter especial (# $ @ !)"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("senha")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    delete data.passwordConfirm;

    api
      .post("/auth/registro", data)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => console.log(err));
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
            name="nome"
            error={errors.name?.message}
          >
            Nome:
          </Input>
          <Input
            type={"text"}
            register={register}
            name="sobrenome"
            error={errors.surname?.message}
          >
            Sobrenome:
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
            name="senha"
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
