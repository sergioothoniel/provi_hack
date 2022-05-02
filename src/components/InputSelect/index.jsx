import { InputSelectContainer } from "./styles"

const InputSelect = ({children, error, register, name, opçoes, ...rest}) =>{

    return(
        <InputSelectContainer>
            <label>{children} {!!error && <span>{"   -   "+error}</span>}</label>
            <select {...register(name)}>
                <option value={''}></option>
                {opçoes.map((option, i)=>(<option key={i} value={option}>{option}</option>))}
                
            </select>

        </InputSelectContainer>
    )

}

export default InputSelect