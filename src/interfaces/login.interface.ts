import { IUser } from "./users.interface";

export interface ILoginDataProps {
  email: string;
  password: string;
}

export interface ILoginDataResponse {
  user: IUser;
  token: string;
}
