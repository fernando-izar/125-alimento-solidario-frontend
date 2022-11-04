import { IUser } from "./users.interface";

export interface IDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available?: boolean;
  userId?: number | null | undefined;
  id?: number;
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

export interface IUpdateDonation {
  food: string;
  quantity: string;
  id: number;
}
