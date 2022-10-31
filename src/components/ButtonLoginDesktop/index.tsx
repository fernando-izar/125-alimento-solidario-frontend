import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import "inter-ui/inter.css";

export const ButtonLogin = styled(MuiButton)((props) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  width: "170px",
  height: "40px",
  marginTop: "20px",
  borderRadius: "5px",
  backgroundColor: "#69b9aa",
  color: "#FFFFFF",
  boxShadow: "5px 5px 5px 0px rgb(0, 0, 0, 0.25)",
  fontFamily: "Inter, system-ui",
  fontSize: "14px",
  lineHeight: "14px",
  fontWeight: "700",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2b937f",
  },
}));
