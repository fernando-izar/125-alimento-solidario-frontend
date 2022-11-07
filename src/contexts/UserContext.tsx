import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import {
  IUser,
  IRegisterForm,
  IRequestRegisterForm,
} from "../interfaces/users.interface";
import {
  ILoginDataProps,
  ILoginDataResponse,
} from "../interfaces/login.interface";

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

export const UserContext = createContext<IContextProviderProps>(
  {} as IContextProviderProps
);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@userToken");
      const id = localStorage.getItem("@userID");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get<IUser>(`users/profile`);
          // console.log(data);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [loading]);

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
    navigate("/initialpage", { replace: true });
  };

  const loginData = (data: ILoginDataProps) => {
    api
      .post<ILoginDataResponse>("login", data)
      .then((response) => {
        setUser(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.token);
        window.localStorage.setItem(
          "@userID",
          response.data.user.id.toString()
        );
        toast.success("Login efetuado com sucesso!");
        navigate("/home", { replace: true });
      })
      .catch((error) => toast.error("Email ou senha inválidos!"));
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  const signUp = (data: IRegisterForm) => {
    console.log("data", data);
    const { passwordConfirmation, ...infoToAPI } = data;
    console.log("infoToApi", infoToAPI);
    const reqUser: IRequestRegisterForm = {
      email: infoToAPI.email,
      password: infoToAPI.password,
      name: infoToAPI.name,
      cnpj_cpf: infoToAPI.cnpj_cpf,
      responsible: infoToAPI.responsible,
      contact: infoToAPI.contact,
      type: infoToAPI.type,
      isAdm: false,
      address: {
        address: infoToAPI.address,
        complement: infoToAPI.complement,
        city: infoToAPI.city,
        state: infoToAPI.state,
        zipCode: "11000000",
      },
    };
    console.log("reqUser", reqUser);
    api
      .post<IUser>("/users", reqUser)
      .then((response) => {
        toast.success("Cadastro efetuado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Erro no cadastro!");
      });

    /* console.log(infoToAPI); */
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginData,
        toRegister,
        signUp,
        loading,
        setLoading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
