import { RegisterContainer } from "./style"
import Input from "../../components/Input"
import Button from "../../components/Button"

const Register = () =>{
    return(
        <RegisterContainer>
            <h1>Cadastar</h1>

            <Input>Nome completo:</Input>
            <Input>E-mail:</Input>
            <Input>Senha:</Input>
            <Input>Confirme sua senha:</Input>

            <h5>Ao clicar em registrar, você concordacom nossos <a href="/">termos de utilização</a></h5>

            <Button>Cadastrar</Button>

        </RegisterContainer>
    )
}

export default Register