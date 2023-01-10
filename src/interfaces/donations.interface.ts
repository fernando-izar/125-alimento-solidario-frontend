import { IUser } from "./users.interface";
import { IClassification } from "./classifications.interface";

export interface IDonation {
  food: string;
  quantity: string;
  expiration: string;
  classification: IClassification;
  available: boolean;
  user: IUser;
  id: string;
}

export interface IDonationRequest {
  food: string;
  quantity: string;
  expiration: string;
  classification_id: string;
}

// export interface IAllDataDonation {
//   food: string;
//   quantity: string;
//   expiration: string;
//   classification: IClassification;
//   available: boolean;
//   userId: number;
//   id: number;
//   user: IUser;
// }

export interface IUpdateDonation {
  food: string;
  quantity: string;
  id: string;
}
