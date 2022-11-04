import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { IUser } from "../interfaces/users.interface";
import { DonationContext } from "./DonationContext";
import { IDonation } from "../interfaces/donations.interface";
import { toast } from "react-toastify";
import {
  IReservation,
  IReservationWithUsers,
} from "../interfaces/reservations.interface";
import "react-toastify/dist/ReactToastify.css";

interface IReservationProviderProps {
  children: ReactNode;
}

export interface IReservationContextData {
  onClickReserve: (id: number) => Promise<void>;
  listReservations: IReservationWithUsers[];
}

export const ReservationContext = createContext({} as IReservationContextData);

export const ReservationProvider = ({
  children,
}: IReservationProviderProps) => {
  const [reservation, setReservation] = useState<IReservation | null>(null);
  const [listReservations, setListReservations] = useState<
    IReservationWithUsers[]
  >([]);
  const { user } = useContext(UserContext);
  const { donation, setDonation } = useContext(DonationContext);

  const onClickReserve = async (id: number) => {
    try {
      await api.patch(`donations/${id}`, { available: false });

      const { data: dataReservation } = await api.get<IReservation>(
        `/donations/${id}?_expand=user`
      );
      setReservation(dataReservation);
      const token = localStorage.getItem("@userToken");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const data = {
        userId: user?.id,
        donation: dataReservation,
      };

      await api.post(`reservations`, data);

      const { data: reservByUsers } = await api.get<IReservationWithUsers[]>(
        `reservations`
      );

      setListReservations(reservByUsers);

      toast.success("Reservado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Houve algum erro");
    }

    const newDonation = await api.get<IDonation>(`donations/${id}`);
    setDonation(newDonation.data);
  };

  useEffect(() => {
    const loadListReservations = async () => {
      try {
        const { data: reservByUsers } = await api.get<IReservationWithUsers[]>(
          `reservations`
        );
        setListReservations(reservByUsers);
      } catch (error) {
        console.log(error);
      }
    };
    loadListReservations();
  }, [reservation]);

  return (
    <ReservationContext.Provider value={{ onClickReserve, listReservations }}>
      {children}
    </ReservationContext.Provider>
  );
};
