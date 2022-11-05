import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";
import { Card } from "../Card";
import { Container } from "./styles";

export const ListCards = () => {
  const { allDataDonations } = useContext(DonorContext);

  return (
    <Container>
      <ul>
        {allDataDonations?.map(
          (element) =>
            element.available && (
              <Card
                key={element.id}
                food={element.food}
                quantity={element.quantity}
                expiration={element.expiration}
                classification={element.classification}
                available={element.available}
                id={element.id}
                user={element.user}
              ></Card>
            )
        )}
      </ul>
    </Container>
  );
};
