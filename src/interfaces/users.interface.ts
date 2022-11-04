import { ReactNode } from "react";

export interface IUser {
  email?: string;
  password?: string;
  name: string;
  ["cnpj/cpf"]?: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  responsible: string;
  contact: string;
  type: string;
  id: number;
}

export interface IUserProviderData {
  user: IUser | null;
}

export interface ILoginDataProps {
  email: string;
  password: string;
}

export interface ILoginDataResponse {
  user: IUser;
  accessToken: string;
}

export interface IUserContextProviderProps {
  children: ReactNode;
}

export interface IContextProviderProps {
  loginData: (data: ILoginDataProps) => void;
  toRegister: () => void;
  user: IUser | null;
  signUp: (data: IRegisterForm) => void;
  loading: boolean;
  logout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRegisterForm {
  type: boolean;
  name: string;
  ["cnpj/cpf"]: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  responsible: string;
  contact: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
