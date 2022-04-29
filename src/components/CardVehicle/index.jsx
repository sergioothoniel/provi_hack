import { CardContainer } from "./styles"

const CardVehicle = ({name, src, fuel, location, city, price }) =>{
    return(
        <CardContainer>
            <figure><img src={src} alt="" /></figure>

            <section>
                <h3>{name}</h3>
                <p>{fuel}</p>
                <p>{location}-{city}</p>
            </section>

            <span>{price}<p>Diária</p></span>
            
        </CardContainer>

    )
}

export default CardVehicle