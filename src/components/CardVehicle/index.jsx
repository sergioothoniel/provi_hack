import { CardContainer } from "./styles"
import {Modal} from "../modal"
import {useState} from "react"

const CardVehicle = ({name, src, fuel, location, city, price }) =>{
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };
    return(
        <CardContainer onClick={openModal}>
            <figure ><img src={src} alt="" /></figure>

            <section>
                <h3>{name}</h3>
                <p>{fuel}</p>
                <p>{location}-{city}</p>
            </section>

            <span>{price}<p>Diária</p></span>
            <Modal showModal={showModal} setShowModal={setShowModal} src= {src} />
        </CardContainer>

    )
}

export default CardVehicle