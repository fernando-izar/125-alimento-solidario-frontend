import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);

  .modal-make-donations {
    width: 381px;
    height: 390px;

    position: relative;

    background: #f4f4f4;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
  width: 21px;
  height: 23px;

  position: absolute;
  top: 12px;
  right: 12px;

  background-color: #ff4242;
  border: none;
  border-radius: 2px;

  color: #ffffff;

  cursor: pointer;
`;
