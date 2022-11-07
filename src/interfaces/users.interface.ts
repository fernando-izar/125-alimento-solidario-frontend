import { IAddress } from "./addresses.interface";

export interface IUser {
  email?: string;
  password?: string;
  name: string;
  cnpj_cpf?: string;
  responsible: string;
  contact: string;
  type: string;
  id: string;
  address: IAddress;
}

export interface IRegisterForm {
  email: string;
  password: string;
  name: string;
  cnpj_cpf: string;
  responsible: string;
  contact: string;
  type: boolean;
  passwordConfirmation: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  zipCode?: string | null;
}

export interface IRequestRegisterForm {
  email: string;
  password: string;
  name: string;
  cnpj_cpf: string;
  responsible: string;
  contact: string;
  type: boolean;
  address: IAddress;
  isAdm: boolean;
}

// export interface IRegisterForm {
//   email: string;
//   password: string;
//   name: string;
//   cnpj_cpf: string;
//   responsible: string;
//   contact: string;
//   type: boolean;
//   passwordConfirmation: string;
//   address: IAddress;
// }
