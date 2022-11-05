import { IUser } from "./users.interface";
// import { IClassification } from "./classifications.interface";
import { IDonation } from "./donations.interface";

export interface IReservation {
  donation: IDonation;
  id: number;
  user: IUser;
  date?: Date;
}

// export interface IReservationWithUsers {
//   userId: number;
//   id?: number;
//   donation: IReservation;
// }

// export interface IReservation {
//   food: string;
//   quantity: string;
//   expiration: string;
//   classification: IClassification;
//   available: boolean;
//   userId: number;
//   id: number;
//   user: IUser;
// }
