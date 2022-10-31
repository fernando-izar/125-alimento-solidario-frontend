import { Container } from "./styles";
import logo from "../../logo.png";

import { Button, Menu, MenuItem } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";

import { UserContext } from "../../contexts/UserContext";
import { SearchBox } from "../SearchBox";
import { ButtonHeader } from "../ButtonHeader";

export const Header = (props: any) => {
  const navigate = useNavigate();
  const { setIsMakeDonationModal } = useContext(DonationContext);

  const { user, logout } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDonate = () => {
    setIsMakeDonationModal(true);
    handleClose();
  };

  const handleLogout = () => {
    logout();
  };

  return user ? (
    <Container>
      <div className="divLogoApresentation">
        <img src={logo} alt="logo" />
        <div>
          <h2>{user.name}</h2>
        </div>
      </div>

      <div className="container-header">
        <SearchBox></SearchBox>

        <nav>
          {user?.type === "donor" && (
            <ButtonHeader
              variant="contained"
              className="btn-header"
              onClick={handleDonate}
            >
              Doar
            </ButtonHeader>
          )}

          <ButtonHeader
            variant="contained"
            className="btn-header"
            onClick={handleLogout}
          >
            Sair
          </ButtonHeader>
          <Button className="menu-button" onClick={handleClick}>
            <MenuOutlined></MenuOutlined>
          </Button>
          <Menu
            className="menu"
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
          >
            {user?.type === "donor" && (
              <MenuItem onClick={handleDonate}>Doar</MenuItem>
            )}

            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </nav>
      </div>
    </Container>
  ) : (
    <Container>
      <img src={logo} alt="logo" />
      <nav>
        <ButtonHeader
          className={props.page === "register" ? "btn-chosen" : ""}
          variant="contained"
          onClick={() => navigate("/register")}
        >
          Seja Parceiro
        </ButtonHeader>
        <ButtonHeader
          className={props.page === "login" ? "btn-chosen" : ""}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Login
        </ButtonHeader>
      </nav>
    </Container>
  );
};
