import React from "react";
import UserContextProvider from "./contexts/UserContext";
import MainRoutes from "./routes";
import { DonationProvider } from "./contexts/DonationContext";
import { DonorContextProvider } from "./contexts/DonorContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { ReservationProvider } from "./contexts/ReservationContext";

import { ThemeProvider } from "@material-ui/core";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <DonationProvider>
            <DonorContextProvider>
              <ReservationProvider>
                <GlobalStyle />
                <MainRoutes />
              </ReservationProvider>
            </DonorContextProvider>
          </DonationProvider>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
