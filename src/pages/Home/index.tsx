import { CartDonations } from "../../components/CartDonations";
import { Footer } from "../../components/Footer";

import { ListCards } from "../../components/ListCards";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { DonationContext } from "../../contexts/DonationContext";
import { useContext } from "react";
import { MakeDonationModal } from "../../components/MakeDonationModal";
import { FormMakeDonationModal } from "../../components/FormMakeDonationModal";

export const Home = () => {
  const { isMakeDonationModal } = useContext(DonationContext);

  return (
    <Container>
      <Header></Header>
      <div className="main-container">
        <main>
          <ListCards></ListCards>
        </main>
        <aside>
          <CartDonations></CartDonations>
        </aside>
      </div>
      <Footer></Footer>
      {isMakeDonationModal && (
        <MakeDonationModal>
          <FormMakeDonationModal />
        </MakeDonationModal>
      )}
    </Container>
  );
};
