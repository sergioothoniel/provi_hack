import Button from "../../components/Button"
import Input from "../../components/Input"
import { InputsContainer, LoginContainer } from "./styles"

const Login = () =>{
    return(
        <LoginContainer>
            

            <InputsContainer>
                <h1>Entrar</h1>

                <Input placeholder="Digite seu email">Email:</Input>
                <Input placeholder="Digite sua senha">Senha:</Input>
                <Button>Entrar</Button>

            </InputsContainer>

        </LoginContainer>
    )
}

export default Login