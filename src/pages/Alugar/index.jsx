import { AlugarContainer } from "./styles"
import {AiOutlineSearch} from "react-icons/ai";

import {database} from "../../database"
import CardVehicle from "../../components/CardVehicle";
import { useState } from "react";
import Button from "../../components/Button"
import Logos from "../../components/Logo"
import { useHistory } from "react-router-dom";
 
const Alugar = () =>{

    const history = useHistory()

    const [listVeiculos] = useState(database)    

   
    return(
        <AlugarContainer>
            <header>
                <Button onClick={()=>history.push('/')}>Voltar</Button>
                <Logos/>
            </header>


            <div className="filtros">            
            <input placeholder="Digite a local desejado" value='Rio de Janeiro-RJ' type='text'/>
            <AiOutlineSearch/>
            </div>

            <div className="cards-container">
                {listVeiculos.map((value, i)=>(
                    <CardVehicle key={i} name={value.locatario.carrosAnunciados.modelo} 
                    src={value.locatario.carrosAnunciados.fotos[0]}
                    fuel={value.locatario.carrosAnunciados.combustivel}
                    location={value.bairro}
                    city={value.municipio}
                    price={value.locatario.carrosAnunciados.preço}
                    />
                ))}
            </div>
            


        </AlugarContainer>
    )
}

export default Alugar