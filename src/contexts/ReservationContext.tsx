import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";
import { IDonation } from "../interfaces/donations.interface";
import { toast } from "react-toastify";
import { IReservation } from "../interfaces/reservations.interface";
import "react-toastify/dist/ReactToastify.css";
import { DonorContext } from "./DonorContext";

interface IReservationProviderProps {
  children: ReactNode;
}

export interface IReservationContextData {
  onClickReserve: (id: string) => Promise<void>;
  listReservations: IReservation[];
}

export const ReservationContext = createContext({} as IReservationContextData);

export const ReservationProvider = ({
  children,
}: IReservationProviderProps) => {
  const [reservation, setReservation] = useState<IReservation | null>(null);
  const [listReservations, setListReservations] = useState<IReservation[]>([]);
  const { setAllDataDonations } = useContext(DonorContext);

  const onClickReserve = async (id: string) => {
    try {
      const token = localStorage.getItem("@userToken");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data: dataReservation } = await api.post<IReservation>(
        `reservations/${id}`
      );
      setReservation(dataReservation);

      const { data: reservByUsers } = await api.get<IReservation[]>(
        `reservations/user`
      );

      setListReservations(reservByUsers);

      const allDonations = await api.get<IDonation[]>(`donations/expand`);
      setAllDataDonations(allDonations.data);

      toast.success("Reservado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Houve algum erro");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const loadListReservations = async () => {
      try {
        const { data: reservByUsers } = await api.get<IReservation[]>(
          `reservations/user`
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
