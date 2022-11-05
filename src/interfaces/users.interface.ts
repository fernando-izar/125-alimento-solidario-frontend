import { IAddress } from "./addresses.interface";

export interface IUser {
  email?: string;
  password?: string;
  name: string;
  cnpj_cpf?: string;
  responsible: string;
  contact: string;
  type: string;
  id: number;
  address: IAddress;
}

export interface IRegisterForm {
  type: boolean;
  name: string;
  cnpj_cpf: string;
  responsible: string;
  contact: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  address: IAddress;
}
