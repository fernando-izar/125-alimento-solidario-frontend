import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { InitialPage } from "../pages/InitialPage";
import { ExamplePage } from "../pages/ExamplePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/initialpage" element={<InitialPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/examplepage" element={<ExamplePage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default MainRoutes;
