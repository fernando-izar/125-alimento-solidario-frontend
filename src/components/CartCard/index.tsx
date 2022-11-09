import { useContext } from "react";
// import { IAllDataDonation } from "../../interfaces/donations.interface";
import { Container } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import reservado from "../../assets/Reservado.png";
import { IDonation } from "../../interfaces/donations.interface";

export const CartCard = ({
  food,
  quantity,
  expiration,
  classification,
  available,
  id,
  user,
}: IDonation) => {
  const { user: userLogged } = useContext(UserContext);
  const { chooseImg } = useContext(DonationContext);

  return (
    <Container>
      <div className="flipper">
        <div
          className="front"
          // style={{
          //   backgroundImage:
          //     !available && userLogged?.type === "donor" ? reservado : "none",

          // opacity: !available && userLogged?.type === "donor" ? "0.5" : "1",
          // }}
        >
          <div className="front--img-and-food-information">
            {!available && userLogged?.type === "donor" && (
              <img
                src={reservado}
                alt="reservado"
                style={{
                  zIndex: "1",
                  position: "absolute",
                  width: "260px",
                  marginTop: "-14px",
                  marginLeft: "-8px",
                }}
              />
            )}
            <figure>
              <img
                src={chooseImg(classification.name)}
                alt={classification.name}
              />
            </figure>

            <div className="front-food">
              <p>{food}</p>
              <span>{classification.name}</span>
            </div>
          </div>

          <div className="front-quantity">
            <p>{quantity}</p>
          </div>
        </div>

        <div className="back">
          <div className="back-food">
            <p>{food}</p>
            <span>{classification.name}</span>
          </div>

          <div className="back-address">
            <p>{user.name}</p>
            <span>{user.address.address}</span>
            <span>
              {user.address.city}/{user.address.state}
            </span>
            <span>{user.contact}</span>
          </div>

          <div className="back-quantity">
            <p>{quantity}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
