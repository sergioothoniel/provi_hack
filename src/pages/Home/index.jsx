import { BonusBox, BonusContainer, ButtonsContainer, CardsContainer, DescriptionContainer, DetailsContainer, HomeContainer, TittleBonus } from "./styles"
import Button from "../../components/Button"
import {AiOutlineRight, AiFillCaretDown} from "react-icons/ai"
import Logo from "../../components/Logo"
import CardVehicle from "../../components/CardVehicle"
import { useHistory } from "react-router-dom"

const Home = () =>{

    const history = useHistory()

    const loginRedirect = () =>{
        history.push('/login')
    }

    const registerRedirect = () =>{
        history.push('/register')
    }

    return(
        <HomeContainer>
            <header>
                <Button><AiOutlineRight/></Button>
                <Logo/>
            </header>

            <section>
                BANNER
            </section>

            <DescriptionContainer>
                <p>Diversos carros e bicicletas na palma da sua mão</p>
                <p>Grande disponibilidade de veículos sutentáveis</p>
                <p>Simples assim</p>    
                <h4>Somos o futuro.</h4>
            </DescriptionContainer>

            <DetailsContainer>
                <div>
                    <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
                    <p>Alugue um carro de maneira simplificada</p>
                </div>
                <div>
                    <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
                    <p>Ganhe desconto progressivo por colaborar com o meio ambiente</p>
                </div>
                <div>
                    <AiFillCaretDown fill="#0e151a" stroke="#fff" strokeWidth={15} />
                    <p>Reduza gastos, emissões e burocracias</p>
                </div>
            </DetailsContainer>

            <CardsContainer>
                <CardVehicle src={"https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98279_1"} name="Voyage" fuel={"Gasolina"} location="Mooca" city={'SP'} price="R$ 180,00"/>
                <CardVehicle src={"https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg?resize=650,434"} name="Audi Q7" fuel={"Híbrido"} location="Mooca" city={'SP'} price="R$ 400,00"/>
                <CardVehicle src={"https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg?resize=650,434"} name="Audi Q7" fuel={"Híbrido"} location="Mooca" city={'SP'} price="R$ 400,00"/>
            </CardsContainer>

           <hr />

            <BonusContainer>
                <h5>Um planeta mais sustentável é nosso <b>destio</b></h5>
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
            </BonusContainer>

            <ButtonsContainer>
                <Button colorSchema onClick={loginRedirect}>Entre</Button>
                <Button onClick={registerRedirect}>Cadastre-se</Button>
            </ButtonsContainer>


        </HomeContainer>
    )
}

export default Home