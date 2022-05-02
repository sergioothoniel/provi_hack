import {FcApproval} from "react-icons/fc"
import Button from "../../components/Button"
import { ConfirmPostContainer, CortainBlur } from "./styles"

const ConfirmPost = ({onClickFinction}) =>{
    return(

        <CortainBlur>
            <ConfirmPostContainer>
                <FcApproval/>  
                <h3>Anúncio enviado com sucesso</h3>
                <Button register={[]} onClick={onClickFinction}>Voltar</Button>         

            </ConfirmPostContainer>

        </CortainBlur>
        

    )
}

export default ConfirmPost