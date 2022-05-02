import {
  BonusBox,
  BonusContainer,
  ButtonsContainer,
  CardsContainer,
  ConteBtnHome,
  ConteInfoSust,
  DescriptionContainer,
  DetailsContainer,
  DivisaoHome,
  HomeContainer,
  TittleBonus,
} from "./styles";
import Button from "../../components/Button";
import { AiOutlineRight, AiFillCaretDown } from "react-icons/ai";
import Logo from "../../components/Logo";
import CardVehicle from "../../components/CardVehicle";
import { useHistory } from "react-router-dom";
import { Menu } from "../../models/menu";
import { useState } from "react";
import { Headers } from "../../components/Header";

const Home = ({ token, setToken }) => {
  console.log(token);
  const [menu, setMenu] = useState(false);
  const [logo, setlogo] = useState(true);
  const history = useHistory();

  const loginRedirect = () => {
    history.push("/login");
  };

  const registerRedirect = () => {
    history.push("/register");
  };

  const closeMenu = () => {
    setlogo(true);
    setMenu(false);
  };

  const openMenu = () => {
    setMenu(true);
    setlogo(false);
  };
  /* 
  if (!token) {
    history.push("/login");
  } */

  return (
    <>
      {menu && <Menu setAuth={setToken} click={closeMenu} />}
      {logo ? (
        <Headers auth={token} openMenu={openMenu} />
      ) : (
        <Headers classe="off" openMenu={openMenu} />
      )}
      <HomeContainer classe="off">
        <DescriptionContainer>
          <p>Contruibua para o meio-ambiente.</p>
          <p>Use //newrota</p>
        </DescriptionContainer>
        <DivisaoHome />
        <DetailsContainer>
          <div>
            <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
            <p>Alugue um carro de maneira simplificada.</p>
          </div>
          <div>
            <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
            <p>Ganhe desconto progressivo por colaborar com o meio ambiente.</p>
          </div>
          <div>
            <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
            <p>Reduza emissões e burocracias.</p>
          </div>
        </DetailsContainer>

        <ConteBtnHome>
          <Button>O que oferecemos</Button>
        </ConteBtnHome>

        <DivisaoHome />
        <CardsContainer>
          <CardVehicle
            src={"https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98279_1"}
            name="Voyage"
            location="Mooca"
            city={"SP"}
            price="180"
            fuel={"Híbrido"}
          />
          <CardVehicle
            src={
              "https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg?resize=650,434"
            }
            name="Audi Q7"
            fuel={"Híbrido"}
            location="Mooca"
            city={"SP"}
            price="400"
          />
          <CardVehicle
            src={
              "https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg?resize=650,434"
            }
            name="Audi Q7"
            fuel={"Híbrido"}
            location="Mooca"
            city={"SP"}
            price="400"
          />
        </CardsContainer>

        <ConteBtnHome>
          <Button>Ver catalógo</Button>
        </ConteBtnHome>
        <DivisaoHome />

        <BonusContainer>
          <h5>
            Um planeta mais sustentável é nosso <b>destio</b>.
          </h5>
          <ConteInfoSust>
            <div>
              <TittleBonus>quem aluga</TittleBonus>
              <BonusBox>
                <li>30% de desconto ao locar veículo elético ou híbrido</li>
                <li>30% de cashback ao locar uma bicicleta</li>
              </BonusBox>
            </div>
            <div>
              <TittleBonus>quem aluga</TittleBonus>
              <BonusBox>
                <li>30% de desconto ao locar veículo elético ou híbrido</li>
                <li>30% de desconto ao locar uma bicicleta</li>
              </BonusBox>
            </div>
          </ConteInfoSust>
        </BonusContainer>
        <ConteBtnHome>
          <Button>Saiba mais</Button>
        </ConteBtnHome>
        <DivisaoHome />
        {!token && (
          <ButtonsContainer>
            <Button colorSchema onClick={loginRedirect}>
              Entre
            </Button>
            <Button onClick={registerRedirect}>Cadastre-se</Button>
          </ButtonsContainer>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
