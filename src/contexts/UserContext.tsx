import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import {
  IUser,
  IUserProviderData,
  ILoginDataProps,
  ILoginDataResponse,
  IContextProviderProps,
  IRegisterForm,
  IUserContextProviderProps,
} from "../interfaces/users.interface";

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

          const { data } = await api.get<IUser>(`users/${id}`);
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
      .post<ILoginDataResponse>("/login", data)
      .then((response) => {
        setUser(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.accessToken);
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
    const { passwordConfirmation, ...infoToAPI } = data;

    api
      .post<IUser>("/users", infoToAPI)
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
