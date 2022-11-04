import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export interface IDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available?: boolean;
  userId?: number | null | undefined;
  id?: number;
}

export interface IDonationProviderProps {
  children: ReactNode;
}

export interface IDonationProviderData {
  donation: IDonation | null;
  setDonation: React.Dispatch<React.SetStateAction<IDonation | null>>;
  isMakeDonationModal: boolean;
  setIsMakeDonationModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitMakeDonation: SubmitHandler<IDonation>;
  chooseImg: (value: string) => string;
}
