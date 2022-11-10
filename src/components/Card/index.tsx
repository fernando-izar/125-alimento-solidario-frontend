import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";
import {
  // IAllDataDonation,
  IUpdateDonation,
} from "../../interfaces/donations.interface";
import { FlipCard } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { ReservationContext } from "../../contexts/ReservationContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBackCard } from "../../validators/schemas";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { IDonation } from "../../interfaces/donations.interface";

export const Card = ({
  food,
  quantity,
  expiration,
  classification,
  available,
  id,
  user,
}: IDonation) => {
  const { chooseImg } = useContext(DonationContext);
  const { user: currentUser } = useContext(UserContext);
  const { onClickReserve } = useContext(ReservationContext);
  const { onSubmitUpdateDonation, onClickDeleteDonation } =
    useContext(DonorContext);

  let flagId: boolean;
  user.id === localStorage.getItem("@userID")
    ? (flagId = false)
    : (flagId = true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateDonation>({
    resolver: yupResolver(schemaBackCard),
    defaultValues: {
      food: food,
      quantity: quantity,
      id: id,
    },
  });

  // const date = new Date(expiration);
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();

  const date = expiration.split("-");
  const day = date[2];
  const month = date[1];
  const year = date[0];

  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Frente do card => igual para doador e donatário */}
          <img src={chooseImg(classification.name)} alt={classification.name} />
          <div className="flip-card-front__food-information">
            <div>
              <p>{food}</p>
              <span>{classification.name}</span>
            </div>
            <div>
              <p>{quantity}</p>
            </div>
          </div>

          <div className="flip-card-front__donor-information">
            <p>{user.name}</p>
            <span>
              {user.address.city}/{user.address.state}
            </span>
          </div>
        </div>

        <div className="flip-card-back">
          {currentUser?.type === "charity" ? (
            <>
              <div className="flip-card-back__information">
                <div className="flip-card-back__information--header">
                  <div className="flip-card-back__information--food">
                    <p>{food}</p>
                    <span>{classification.name}</span>
                  </div>

                  <div className="flip-card-back__information--quantity">
                    <p>Quantidade</p>
                    <span>{quantity}</span>
                  </div>
                </div>

                <div className="flip-card-back__information--donor-data">
                  <p>{user.name}</p>
                  <span>{`${user.address.address}, ${user.address.complement}`}</span>
                  <span>
                    {user.address.city}/{user.address.state}
                  </span>
                  <span>{user.contact}</span>
                </div>

                <div className="flip-card-back__information--expiration-date">
                  <p>Validade</p>
                  <span>{`${day}/${month}/${year}`}</span>
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => onClickReserve(id.toString())}
              >
                Reservar Alimento
              </Button>
            </>
          ) : (
            <>
              <form
                className="form-edit-donation"
                /*  onSubmit={handleSubmit(onSubmitUpdateDonation)} */
              >
                <div className="form-edit-donation__food">
                  <TextField
                    variant="standard"
                    color="warning"
                    type="text"
                    InputLabelProps={{ color: "primary" }}
                    {...register("food")}
                    disabled={flagId}
                  />

                  <span>{classification.name}</span>
                </div>

                <div className="form-edit-donation__expiration">
                  <p>Validade</p>
                  <span>{`${day}/${month}/${year}`}</span>
                </div>

                <div className="form-edit-donation__quantity">
                  <label>Quantidade</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    type="text"
                    InputLabelProps={{ color: "primary" }}
                    {...register("quantity")}
                    disabled={flagId}
                  />
                </div>
              </form>

              <div className="form-edit-donation__buttons">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  disabled={flagId}
                  onClick={handleSubmit(onSubmitUpdateDonation)}
                >
                  Alterar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onClickDeleteDonation(id)}
                  disabled={flagId}
                  className="form-edit-donation__button-delete"
                >
                  Excluir
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </FlipCard>
  );
};
