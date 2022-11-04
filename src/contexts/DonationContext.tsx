import { useState, createContext, ReactNode, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import api from "../services/api";
import { UserContext } from "./UserContext";

import cereais from "../assets/Cereais2.png";
import enlatados from "../assets/Enlatados1.png";
import hortifruti from "../assets/Hortifruti1.png";
import laticinios from "../assets/Laticinios.jpg";
import padaria from "../assets/Paes1.png";
import { toast } from "react-toastify";
import {
  IDonation,
  IDonationProviderProps,
  IDonationProviderData,
} from "../interfaces/donations.interface";
import "react-toastify/dist/ReactToastify.css";

export const DonationContext = createContext<IDonationProviderData>(
  {} as IDonationProviderData
);

export const DonationProvider = ({ children }: IDonationProviderProps) => {
  const [donation, setDonation] = useState<IDonation | null>(null);
  const [isMakeDonationModal, setIsMakeDonationModal] = useState(false);
  const { user } = useContext(UserContext);

  const onSubmitMakeDonation: SubmitHandler<IDonation> = async (data) => {
    const token = localStorage.getItem("@userToken");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      data.available = true;
      data.userId = user?.id;
      const { data: responseData } = await api.post("donations", data);
      setDonation(responseData);
      setIsMakeDonationModal(false);
      toast.success("Obrigado pela sua doação!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Houve algum erro");
    }
  };

  const chooseImg = (value: string) => {
    switch (value) {
      case "cereais":
        return cereais;
      case "enlatados":
        return enlatados;
      case "hortifruti":
        return hortifruti;
      case "laticinios":
        return laticinios;
      case "padaria":
        return padaria;
      default:
        return "";
    }
  };

  return (
    <DonationContext.Provider
      value={{
        donation,
        setDonation,
        isMakeDonationModal,
        setIsMakeDonationModal,
        onSubmitMakeDonation,
        chooseImg,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};
