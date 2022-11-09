import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";
import { UserContext } from "../../contexts/UserContext";
import { ReservationContext } from "../../contexts/ReservationContext";
import { CartCard } from "../CartCard";
import { Container } from "./styles";

export const CartDonations = () => {
  const { allDataDonations } = useContext(DonorContext);
  const { user } = useContext(UserContext);
  const { listReservations } = useContext(ReservationContext);
  const idStorage = localStorage.getItem("@userID");

  // return <Container></Container>;

  if (user?.type === "donor") {
    return (
      <Container>
        <h2>Meu histórico</h2>
        <ul>
          {allDataDonations?.map(
            (element) =>
              idStorage &&
              idStorage === element.user.id && (
                <CartCard
                  key={element.id}
                  food={element.food}
                  quantity={element.quantity}
                  expiration={element.expiration}
                  classification={element.classification}
                  available={element.available}
                  id={element.id}
                  user={element.user}
                ></CartCard>
              )
          )}
        </ul>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Meu histórico</h2>
        <ul>
          {listReservations?.map(
            (element) =>
              idStorage &&
              idStorage === element.user.id && (
                <CartCard
                  key={element.id}
                  food={element.donation.food}
                  quantity={element.donation.quantity}
                  expiration={element.donation.expiration}
                  classification={element.donation.classification}
                  available={element.donation.available}
                  id={element.donation.id}
                  user={element.donation.user}
                ></CartCard>
              )
          )}
        </ul>
      </Container>
    );
  }
};
