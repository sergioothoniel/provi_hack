import { ButtonContainer } from "./styles"

const Button = ({children, colorSchema = false, ...rest}) =>{
    return(
        <ButtonContainer colorSchema={colorSchema} {...rest}>{children}</ButtonContainer>
    )
}

export default Button