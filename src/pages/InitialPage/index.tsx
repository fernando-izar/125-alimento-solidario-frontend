import { Container } from "./styles";
import initialPageImg from "../../assets/InitialPageDiamond.png";
import logo from "../../assets/Alimento-solidario3.png";
import { BigButton } from "../../components/BigButtonDesktop";
import { BigButton2 } from "../../components/BigButtonMobile";

import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const InitialPage = () => {
  const { toRegister } = useContext(UserContext);
  return (
    <>
      <Container>
        <Header></Header>
        <figure className="figLogo">
          <img className="imgLogo" src={logo} alt="" />
        </figure>
        <h1>Vamos juntos vencer a batalha contra a fome no Brasil!</h1>
        {window.innerWidth > 540 ? (
          <BigButton onClick={() => toRegister()} type="submit">
            Entre você também nessa luta!
          </BigButton>
        ) : (
          <BigButton2 onClick={() => toRegister()} type="submit">
            Entre você também nessa luta!
          </BigButton2>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};
