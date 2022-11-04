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
