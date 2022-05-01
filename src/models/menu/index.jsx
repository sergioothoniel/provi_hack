import {
  BtnsHome,
  ConteBtns,
  ConteImg,
  ConteInfo,
  ConteMenu,
  ConteMenuGeral,
  Divisao,
} from "./style";

import home from "../../img/home.png";
import anunciar from "../../img/anunciar.png";
import alugar from "../../img/alugar.png";
import historico from "../../img/historico.png";
import notificacao from "../../img/notificacao.png";
import configuracao from "../../img/configuracao.png";
import logOut from "../../img/logOut.png";
import { Close } from "../../components/close";
import { useHistory } from "react-router-dom";

export const Menu = ({ click }) => {
  const history = useHistory();

  const funcPerfil = () => {
    history.push("/perfil");
  };

  return (
    <ConteMenuGeral>
      <ConteMenu>
        <Close click={click} />
        <ConteInfo>
          <ConteImg onClick={funcPerfil}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXFxcX////CwsLe3t7b29vT09Pn5+f19fXOzs77+/vJycnw8PDq6urt7e0K8aSoAAAE+klEQVR4nO2di5qqMAyEsQpy0fd/3WOXZYuKCiTpTD35n8D50maS0NaqchzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRwHQJiD/jHa3CT17enYNEPk0hxPdV99j8wQ2uO16w4PdOem/gaVoaqvT+ISw7EtWmSU91rdFMtTW6rG0J/eRG/Opa0KFBn6yzp5P5xPpUkM1XGDvsjQF6UxrF2fcy7laAzt5/yyRFfKUg2nXfoi1zIkNrsF3sLI7xyhPQsE3jiiFXwgtDtSzINE6iiGWqrvwL0ZBTlmzoDW8RIlgbcKhzSKKkt0hHShtmoCD4cGLWaJXpxF5zBmVKEPPlKzSQySSmaJDq3oAbU0mjijNd0jL2WeodqKYUs/v5oeLSthsEYjRMYfDNZohCafGoWQKNn0RgJpko26Fc7gSDa65do9FEE024WRgUGhdkF6T41WV+k2Tc8QBNGmnEngc42V20/g5+B6o4tl4MvU0gxHwALNFyk+m9pm0kiDXaamdj8C7qGsvSKC9YtgWtCMtFCFlXmiQTuiXWuYwKYaa7+PQD0/QyoFJ9Ow9dTMHjpXaKowgx0eDq7QFbrC/1yhef8LV/j9bpGjpoEq/P669D/oLb6/P8zR42OHbWHfie5NgOc09naBPjpkPy+9oMf65qkG/WnGvjJFf14zr2rwx4asPR9/ViEMtgrBE++IbWkK/0AaMc2m+EVqbPpoux+xzDUMIbStTQnyTMSucoNXbL+YzaM6dD3zRzBSiC5JE0bpFDuCesCk1ac55l2pXltLcF1gM0g2HGaf0C/A6W51a1c2HNXMHOWtyLUJR1S7fc7LzoquyFPM3KOXUNFKXqI0eOtIOoolVKLYUb9To7AXB9I9OCHOqFe0go8In2/hM/ol9uebAh7g+WHXO1gR/hU6EXbZRsfUD35k23t0P/p4RhZrCOG01RmvdUFPRIaq2bMRu6aM1xNDqPfbxZk/kDd9smZ/INcoid8sjmgZL9HQx6wx9HrDKManPoPyPLFh245aCzTBtlQtTtVc0KISCs9BLkLTaRh+yCfpFi0P1BDMTa1W6AR8pWY4rA8+BJ3jvgV0M2a5MoN8CDPLracD0BkznGL/BTOiynER4Q/IOdqcAiGP0+VboiPZF2quJJPIm27y3Kx8IOcNL4jAnBKz3KtcIlcBF+xvAr0iVxkOE5jpCENWp38kh/ODssyEfbYxOWe5BfMRXI6rze8xPqphfctpBbb3hGBOOMfUFfFrNGK4TqFGkbCzjCxzpzXYzabQyv4w0gf2+jlGvo/2+jkmL0kQWGHCwhTh5do9FsVbhndaNqB/o4bGKSbUHcP+zeeNaF/dowuhfhDZQqi9EwlDqB1EvhAqB5HLCycUCxuqciahWNjgRsDvUbsfRZlnInq5Bq3kJUr6yGruOUr1N8l0ZgmliQ3HgG0ZlbEb0fDiGZ1xBu8iVTqiwWqGIwqWSGuGIwqWSNf63qPQCDNn0og4m1J8bXqH+EsUaVuRkDcY3NtQoQ/m9oqI0C+oC5oRYVmT4zVrIdK3eti3oXgj8m9D4Uakd8OIyBELSDTCVEPc3idkjT5/ohGmmhISjSjVFJFoRKmGvPudEHTB9I3FiKC9KCKVipIp+QRjQjLJQP/2lewXyD6jmdg/q+H9JHPP7o/BhdihwBALsUOBIRbRWUR2dxd5/qFSgd1/MFBISfOhqPkHhUBa66YjQ/cAAAAASUVORK5CYII="
              alt=""
            />
          </ConteImg>
          <h1>Maykon Dias</h1>
          <h3>maykon@gmail.com</h3>
        </ConteInfo>
        <Divisao></Divisao>
        <ConteBtns>
          <BtnsHome>
            <img src={home} />
            <h2>Home</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={anunciar} />
            <h2>Anunciar</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={alugar} />
            <h2>Alugar</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={historico} />
            <h2>Histórico</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={notificacao} />
            <h2>Notificações</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={configuracao} />
            <h2>Configurações</h2>
          </BtnsHome>
          <BtnsHome>
            <img src={logOut} />
            <h2>Log Out</h2>
          </BtnsHome>
        </ConteBtns>
      </ConteMenu>
    </ConteMenuGeral>
  );
};
