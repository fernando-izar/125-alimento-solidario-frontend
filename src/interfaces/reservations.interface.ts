import { IUser } from "./users.interface";

export interface IReservation {
  food: string;
  quantity: string;
  expiration: string;
  classification: string;
  available: boolean;
  userId: number;
  id: number;
  user: IUser;
}

export interface IReservationWithUsers {
  userId: number;
  id?: number;
  donation: IReservation;
}
