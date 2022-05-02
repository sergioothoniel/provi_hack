import { PostContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import InputSelect from "../../components/InputSelect";
import { useHistory } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Logos from "../../components/Logo";

const Anunciar = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <PostContainer>
      <header>
        <Button onClick={() => history.push("/")}>
          <AiOutlineLeft />
        </Button>
        <Logos />
        <span>Maykon Dias</span>
      </header>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="form-inputsContainer">
          <fieldset className="inputs-radio radio-arcondicionado">
            <legend>Tipo:</legend>
            <input type="radio" name={"tipo"} value={"automóvel"} checked />
            <label>Automóvel</label>

            <input type="radio" name={"tipo"} value={"bicicleta"} />
            <label>Bicicleta</label>
          </fieldset>

          <Input register={register} name="marca">
            Marca
          </Input>
          <Input register={register} name="modelo">
            Modelo
          </Input>
          <Input register={register} name="ano">
            Ano do modelo
          </Input>
          <Input register={register} name="placa">
            Placa
          </Input>
          <InputSelect
            register={register}
            name="cambio"
            opçoes={["manual", "automático", "semi-automático"]}
          >
            Câmbio
          </InputSelect>
          <InputSelect
            register={register}
            name="combustivel"
            opçoes={[
              "gasolina",
              "alcool",
              "híbrido",
              "elétrico",
              "GNV",
              "flex",
              "diesel",
            ]}
          >
            Combutível
          </InputSelect>
          <InputSelect register={register} name="portas" opçoes={["2p", "4p"]}>
            Portas
          </InputSelect>

          <fieldset className="inputs-radio radio-arcondicionado">
            <legend>Ar-condiciondado:</legend>
            <input type="radio" name={"arcondicionado"} value={true} />
            <label>Sim</label>

            <input type="radio" name={"arcondicionado"} value={false} />
            <label>Não</label>
          </fieldset>

          <Input register={register} name="imagem">
            Imagens <span className="img-link">(link)</span>
          </Input>

          <span>
            Ao anunciar você aceita nossos <a href="\">Termos de Uso</a> e{" "}
            <a href="\">Privacidade</a>
          </span>
        </div>

        <Button type="submit">Enviar</Button>
      </form>
    </PostContainer>
  );
};

export default Anunciar;
