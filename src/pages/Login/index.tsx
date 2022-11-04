import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ILoginDataProps } from "../../interfaces/login.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/schemas";

import { Header } from "../../components/Header";

import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Input,
  InputLabel,
  FormControl,
  IconButton,
  TextField,
  FormHelperText,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

import { Container } from "./styles";
import { ButtonLogin } from "../../components/ButtonLoginDesktop";
import { TitlesH1 } from "../../components/Titles/styles";
import { ButtonLoginMob } from "../../components/ButtonLoginMobile/styles";
import { Footer } from "../../components/Footer";

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { toRegister, loginData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDataProps>({ resolver: yupResolver(schemaLogin) });

  return (
    <>
      <Container>
        <Header page="login"></Header>

        <form className="formLogin" onSubmit={handleSubmit(loginData)}>
          <TitlesH1>Login</TitlesH1>

          {window.innerWidth > 540 ? (
            <>
              <div className="divInputLogin">
                <TextField
                  sx={{ ml: 3, mt: 3, width: "50ch" }}
                  label="E-mail"
                  id="outlined-basic"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      // <InputAdornment position="end">
                      <AccountCircle />
                      // </InputAdornment>
                    ),
                  }}
                  {...register("email")}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                />

                <FormControl sx={{ ml: 3, width: "50ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Senha
                  </InputLabel>
                  <Input
                    // label="Senha"
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    endAdornment={
                      // <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                      // </InputAdornment>
                    }
                    {...register("password")}
                    onChange={handleChange("password")}
                    error={!!errors.password?.message}
                  />
                  <FormHelperText error id="password-error-1">
                    {errors.password?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="divButtonsLogin">
                <ButtonLogin type="submit" onClick={() => handleSubmit}>
                  Entrar
                </ButtonLogin>

                <p className="pMsgReg">Você ainda não possui uma conta?</p>

                <ButtonLogin onClick={() => toRegister()} type="submit">
                  Cadastre-se
                </ButtonLogin>
              </div>
            </>
          ) : (
            <>
              <div>
                <TextField
                  sx={{ ml: 3, mt: 3, width: "35ch" }}
                  label="E-mail"
                  id="outlined-basic"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      // <InputAdornment position="end">
                      <AccountCircle />
                      // </InputAdornment>
                    ),
                  }}
                  {...register("email")}
                  error={!!errors.email?.message}
                />
                <FormHelperText error id="email-error-2">
                  {errors.email?.message}
                </FormHelperText>

                <FormControl sx={{ ml: 3, width: "35ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Senha
                  </InputLabel>
                  <Input
                    // label="Password"
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    endAdornment={
                      // <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                      // </InputAdornment>
                    }
                    {...register("password")}
                    onChange={handleChange("password")}
                    error={!!errors.password?.message}
                  />
                  <FormHelperText error id="password-error-2">
                    {errors.password?.message}
                  </FormHelperText>
                </FormControl>
                <p>{errors.password?.message}</p>
              </div>
              <div className="divButtonsLogin">
                <ButtonLoginMob type="submit" onClick={() => handleSubmit}>
                  Entrar
                </ButtonLoginMob>

                <p className="pMsgReg">Você ainda não possui uma conta?</p>

                <ButtonLoginMob onClick={() => toRegister()} type="submit">
                  Cadastre-se
                </ButtonLoginMob>
              </div>
            </>
          )}
        </form>
      </Container>
      <Footer></Footer>
    </>
  );
};
