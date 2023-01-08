import { ReactNode, useContext, useRef } from "react";
import { Container, CloseButton } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";

interface IMakeDonationModalProps {
  children: ReactNode;
}

export const MakeDonationModal = ({ children }: IMakeDonationModalProps) => {
  const { setIsMakeDonationModal } = useContext(DonationContext);
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <div></div>
      <div className="modal-make-donations" ref={modalRef}>
        <CloseButton onClick={() => setIsMakeDonationModal(false)}>
          x
        </CloseButton>
        {children}
      </div>
    </Container>
  );
};
