import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import "inter-ui/inter.css";

export const BigButton = styled(MuiButton)((props) => ({
  width: "450px",
  height: "120px",
  // marginTop: "100px",
  marginLeft: "27vw",
  borderRadius: "15px",
  backgroundColor: "#FA5C5C",
  color: "#FFFFFF",
  boxShadow: "5px 5px 5px 0px rgb(0, 0, 0, 0.25)",
  fontFamily: "Inter, system-ui",
  fontSize: "40px",
  lineHeight: "45px",
  fontWeight: "700",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#c12432",
  },
}));
