import { ReactNode, useContext, useEffect, useRef } from "react";
import { Children } from "react";
import { Container, CloseButton } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";
import { ModelTraining } from "@mui/icons-material";

interface IMakeDonationModalProps {
  children: ReactNode;
}

export const MakeDonationModal = ({ children }: IMakeDonationModalProps) => {
  const { setIsMakeDonationModal } = useContext(DonationContext);
  const modalRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {

  //Tests-----------------------
  // const tags = Array.prototype.slice.call(modalRef.current?.children);
  // const regex = /.*(?=\.)\./;
  // console.log("tags", tags[0].className);
  // console.log("modalRef.current", modalRef.current?.className);
  // console.log("includes", tags.includes(modalRef.current));
  // console.log("target", target);
  //----------------------------

  //   const handleOutClick = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (modalRef.current && !modalRef.current.contains(target)) {
  //       setIsMakeDonationModal(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutClick);
  //   };
  // });

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
