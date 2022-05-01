import {
  ContainerInfo,
  ContainerPerfil,
  ConteBtn,
  ConteInfoStatic,
  ContePoints,
  ConteStaticInfo,
  ConteStatistic,
  ContValor,
  DivisaoPerfil,
  ImgInfo,
} from "./style";

import editar from "../../img/editar.png";
import { useForm } from "react-hook-form";
import Input, { InputPerfilBox } from "../../components/Input";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Perfil = () => {
  const history = useHistory();

  const BtnVoltar = () => {
    history.push("/");
  };

  return (
    <ContainerPerfil>
      <ContainerInfo>
        <ImgInfo>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXFxcX////CwsLe3t7b29vT09Pn5+f19fXOzs77+/vJycnw8PDq6urt7e0K8aSoAAAE+klEQVR4nO2di5qqMAyEsQpy0fd/3WOXZYuKCiTpTD35n8D50maS0NaqchzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRwHQJiD/jHa3CT17enYNEPk0hxPdV99j8wQ2uO16w4PdOem/gaVoaqvT+ISw7EtWmSU91rdFMtTW6rG0J/eRG/Opa0KFBn6yzp5P5xPpUkM1XGDvsjQF6UxrF2fcy7laAzt5/yyRFfKUg2nXfoi1zIkNrsF3sLI7xyhPQsE3jiiFXwgtDtSzINE6iiGWqrvwL0ZBTlmzoDW8RIlgbcKhzSKKkt0hHShtmoCD4cGLWaJXpxF5zBmVKEPPlKzSQySSmaJDq3oAbU0mjijNd0jL2WeodqKYUs/v5oeLSthsEYjRMYfDNZohCafGoWQKNn0RgJpko26Fc7gSDa65do9FEE024WRgUGhdkF6T41WV+k2Tc8QBNGmnEngc42V20/g5+B6o4tl4MvU0gxHwALNFyk+m9pm0kiDXaamdj8C7qGsvSKC9YtgWtCMtFCFlXmiQTuiXWuYwKYaa7+PQD0/QyoFJ9Ow9dTMHjpXaKowgx0eDq7QFbrC/1yhef8LV/j9bpGjpoEq/P669D/oLb6/P8zR42OHbWHfie5NgOc09naBPjpkPy+9oMf65qkG/WnGvjJFf14zr2rwx4asPR9/ViEMtgrBE++IbWkK/0AaMc2m+EVqbPpoux+xzDUMIbStTQnyTMSucoNXbL+YzaM6dD3zRzBSiC5JE0bpFDuCesCk1ac55l2pXltLcF1gM0g2HGaf0C/A6W51a1c2HNXMHOWtyLUJR1S7fc7LzoquyFPM3KOXUNFKXqI0eOtIOoolVKLYUb9To7AXB9I9OCHOqFe0go8In2/hM/ol9uebAh7g+WHXO1gR/hU6EXbZRsfUD35k23t0P/p4RhZrCOG01RmvdUFPRIaq2bMRu6aM1xNDqPfbxZk/kDd9smZ/INcoid8sjmgZL9HQx6wx9HrDKManPoPyPLFh245aCzTBtlQtTtVc0KISCs9BLkLTaRh+yCfpFi0P1BDMTa1W6AR8pWY4rA8+BJ3jvgV0M2a5MoN8CDPLracD0BkznGL/BTOiynER4Q/IOdqcAiGP0+VboiPZF2quJJPIm27y3Kx8IOcNL4jAnBKz3KtcIlcBF+xvAr0iVxkOE5jpCENWp38kh/ODssyEfbYxOWe5BfMRXI6rze8xPqphfctpBbb3hGBOOMfUFfFrNGK4TqFGkbCzjCxzpzXYzabQyv4w0gf2+jlGvo/2+jkmL0kQWGHCwhTh5do9FsVbhndaNqB/o4bGKSbUHcP+zeeNaF/dowuhfhDZQqi9EwlDqB1EvhAqB5HLCycUCxuqciahWNjgRsDvUbsfRZlnInq5Bq3kJUr6yGruOUr1N8l0ZgmliQ3HgG0ZlbEb0fDiGZ1xBu8iVTqiwWqGIwqWSGuGIwqWSNf63qPQCDNn0og4m1J8bXqH+EsUaVuRkDcY3NtQoQ/m9oqI0C+oC5oRYVmT4zVrIdK3eti3oXgj8m9D4Uakd8OIyBELSDTCVEPc3idkjT5/ohGmmhISjSjVFJFoRKmGvPudEHTB9I3FiKC9KCKVipIp+QRjQjLJQP/2lewXyD6jmdg/q+H9JHPP7o/BhdihwBALsUOBIRbRWUR2dxd5/qFSgd1/MFBISfOhqPkHhUBa66YjQ/cAAAAASUVORK5CYII="
            alt="user"
          />
        </ImgInfo>
        <span>
          <img src={editar} alt="" />
        </span>
        <h1>Maykon Dias</h1>
        <h3>maykon@gmail.com</h3>
      </ContainerInfo>
      <DivisaoPerfil />

      <ConteInfoStatic>
        <ConteStatistic>
          <ConteStaticInfo>
            <ContePoints>
              <p>0</p>
              <div></div>
              <span>NewPontos</span>
            </ContePoints>
          </ConteStaticInfo>
          <ContValor>
            <span>0</span>
          </ContValor>
        </ConteStatistic>
        <ConteStatistic>
          <ConteStaticInfo>
            <ContePoints>
              <p>0</p>
              <div></div>
              <span>Alugados</span>
            </ContePoints>
          </ConteStaticInfo>
          <ContValor>
            <span>0</span>
          </ContValor>
        </ConteStatistic>
      </ConteInfoStatic>

      <DivisaoPerfil />
      <InputPerfilBox label="Nome">Maykon</InputPerfilBox>
      <InputPerfilBox label="Sobrenome">Dias</InputPerfilBox>
      <InputPerfilBox label="Email">maykon@gmail.com</InputPerfilBox>
      <InputPerfilBox label="Telefone">(67) 95555-5555</InputPerfilBox>
      <InputPerfilBox disabled="disabled" label="CPF">
        555.555.555-55
      </InputPerfilBox>
      <InputPerfilBox label="CNH">AB</InputPerfilBox>
      <InputPerfilBox label="CEP">21560-002</InputPerfilBox>
      <InputPerfilBox label="UF">MS</InputPerfilBox>
      <InputPerfilBox label="Cidade">Campo Grande</InputPerfilBox>
      <InputPerfilBox label="Bairro">Florida</InputPerfilBox>
      <InputPerfilBox label="Rua">Agua Boa</InputPerfilBox>
      <InputPerfilBox label="Nº">1523</InputPerfilBox>
      <InputPerfilBox label="Complemento"></InputPerfilBox>
      <ConteBtn>
        <Button click={BtnVoltar}>Voltar</Button>
        <Button colorSchema="true">Salvar</Button>
      </ConteBtn>
    </ContainerPerfil>
  );
};
