import {
  CardContainer,
  ConteIndoCard,
  ConteLocal,
  DivisaoCard,
} from "./styles";

const CardVehicle = ({ name, src, fuel, location, city, price }) => {
  return (
    <CardContainer>
      <figure>
        <img src={src} alt="" />
      </figure>
      <ConteIndoCard>
        <h1>{name}</h1>
        <div>
          <p>
            R$<span>{price}</span>,00
          </p>
          <span>(aluguel semanal)</span>
        </div>
      </ConteIndoCard>
      <DivisaoCard />
      <ConteLocal>
        <h2>{fuel}</h2>
        <h2>
          {location} - {city}
        </h2>
      </ConteLocal>
    </CardContainer>
  );
};

export default CardVehicle;
