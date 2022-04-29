import { InputBox } from "./styles"

const Input = ({children, type, register, name, error, ...rest}) =>{

    return(
        <InputBox>
            <label>{children} {!!error && <span>{"   -   "+error}</span>}</label>
            <input type={type} {...register(name)} {...rest}/>
        </InputBox>

    )
}

export default Input