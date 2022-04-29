import { InputBox } from "./styles"

const Input = ({children, type, ...rest}) =>{

    return(
        <InputBox>
            <label>{children}</label>
            <input type={type} {...rest}/>
        </InputBox>

    )
}

export default Input