import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { UserContext } from "./UserContext";
import { IUser } from "../interfaces/users.interface";
import { DonationContext } from "./DonationContext";
import api from "../services/api";
import { render } from "@testing-library/react";
import { IDonation } from "../interfaces/donations.interface";
import { ConstructionOutlined } from "@mui/icons-material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IDonorContextProviderProps {
  children: ReactNode;
}

export interface IAllDataDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available: boolean;
  userId: number;
  id: number;
  user: IUser;
}

interface IDonorContextData {
  allDataDonations: IAllDataDonation[];
  newSearch: string;
  setNewSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  onSubmitUpdateDonation: (data: IUpdateDonation) => Promise<void>;
  onClickDeleteDonation: (id: number) => Promise<void>;
}

export interface IUpdateDonation {
  food: string;
  quantity: string;
  id: number;
}

export const DonorContext = createContext<IDonorContextData>(
  {} as IDonorContextData
);

export const DonorContextProvider = ({
  children,
}: IDonorContextProviderProps) => {
  const [allDataDonations, setAllDataDonations] = useState<IAllDataDonation[]>(
    []
  );
  const [newSearch, setNewSearch] = useState("");
  const [searched, setSearched] = useState("");

  const { loading, user } = useContext(UserContext);
  const { donation, setDonation } = useContext(DonationContext);

  const handleSetAllDataDonations = (data: IAllDataDonation[]) => {
    setAllDataDonations(data);
  };

  const onSubmitUpdateDonation = async (data: IUpdateDonation) => {
    const food = data.food;
    const quantity = data.quantity;
    const token = localStorage.getItem("@userToken");
    const id = data.id;

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.patch(`donations/${id}`, { food, quantity });

      const newDonation = await api.get<IDonation>(`donations/${id}`);
      setDonation(newDonation.data);
      toast.success("Doação editada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Houve algum erro");
    }
  };

  const onClickDeleteDonation = async (id: number) => {
    const token = localStorage.getItem("@userToken");

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.delete(`donations/${id}`);

      const result = await api.get<IAllDataDonation[]>(
        `donations?_expand=user`
      );

      setAllDataDonations(result.data);
      toast.success("Doação excluída");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Houve algum erro");
    }
  };

  useEffect(() => {
    const renderSearch = async () => {
      try {
        const result = await api.get<IAllDataDonation[]>(
          `donations?_expand=user`
        );
        const filtered = result.data.filter(
          (element) =>
            element.food
              .toLowerCase()
              .includes(searched.toLowerCase().trim()) ||
            element.user.city
              .toLowerCase()
              .includes(searched.toLowerCase().trim()) ||
            element.user.state
              .toLowerCase()
              .includes(searched.toLowerCase().trim()) ||
            element.classification
              .toLowerCase()
              .includes(searched.toLowerCase().trim())
        );

        setAllDataDonations(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    renderSearch();
  }, [searched]);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const result = await api.get<IAllDataDonation[]>(
          `donations?_expand=user`
        );
        handleSetAllDataDonations(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadDonations();
  }, [loading, donation]);

  return (
    <DonorContext.Provider
      value={{
        allDataDonations,
        setNewSearch,
        newSearch,
        setSearched,
        onSubmitUpdateDonation,
        onClickDeleteDonation,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};
