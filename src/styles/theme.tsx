import { createTheme } from "@material-ui/core/styles";
import "inter-ui/inter.css";

const fontMain = "Inter, system-ui";
const theme = createTheme({
  palette: {
    primary: {
      main: "#69b9aa",
      contrastText: "#fff",
    },
    secondary: {
      main: "#69b9aa",
      // main: "#F5A7A1",
    },
    text: {
      primary: "#2b937f",
      secondary: "#535353",
      // secondary: "#2b937f",
    },
  },
  typography: {
    fontFamily: fontMain,
    fontSize: 14,
    h1: {
      fontFamily: fontMain,
    },
    h2: {
      fontFamily: fontMain,
    },
    h3: {
      fontFamily: fontMain,
    },
    h4: {
      fontFamily: fontMain,
    },
    h5: {
      fontFamily: fontMain,
    },
    h6: {
      fontFamily: fontMain,
    },
    button: {
      fontFamily: fontMain,
      fontWeight: 700,
      // fontSize: "14px",
      // lineHeight: "16.94px",
      // textTransform: "none"
    },
  },
});

export default theme;
