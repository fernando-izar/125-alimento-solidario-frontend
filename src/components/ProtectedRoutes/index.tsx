import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { CircularProgress } from "@material-ui/core";
import { Stack } from "@mui/material";

import { Container } from "./styles";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <Container>
        <Header />
        <div>
          <Stack spacing={2} direction="row">
            <CircularProgress color="primary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="primary" />
          </Stack>
        </div>
      </Container>
    );
  }
  return user ? <Outlet /> : <Navigate to={"/initialpage"} replace />;
};
