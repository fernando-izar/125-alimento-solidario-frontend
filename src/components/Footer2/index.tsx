import { Container } from "./styles";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

export const Footer2 = () => {
  return (
    <Container>
      <div className="main-content">
        <div className="left box">
          <h2>Sobre nós</h2>
          <div className="content">
            <p>
              Nossa intenção é ajudar o maior número possível de pessoas a se
              livrar de um dos piores problemas que assola as pessoas mais
              carentes no mundo. A FOME. Ajude com o que puder e faça a
              diferença na vida das pessoas.
            </p>
            <div className="social">
              <a href="#">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="#">
                <span className="fab fa-twitter"></span>
              </a>
              <a href="#">
                <span className="fab fa-instagram"></span>
              </a>
              <a href="#">
                <span className="fab fa-youtube"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Contacte-nos</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">São Paulo, SP</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+55 11 98788-1200</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">alimentosolidario@mail.com</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
