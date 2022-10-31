import { Container } from "./styles";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

export const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <span className="spanFooter">
          Alimento Solidário&copy; - Todos os direitos reservados - 2022
        </span>
      </div>
      <div className="figure">
        <span className="spanFooter">Siga-nos nas redes sociais:</span>
        <figure>
          <img className="instagram" src={instagram} alt="" />
        </figure>
        <figure>
          <img className="facebook" src={facebook} alt="" />
        </figure>
        <figure>
          <img className="twitter" src={twitter} alt="" />
        </figure>
      </div>
    </Container>
  );
};
