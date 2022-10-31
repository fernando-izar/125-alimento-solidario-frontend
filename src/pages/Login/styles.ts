import styled from "styled-components";
import image from "../../assets/Alimento5.jpg";

export const Container = styled.div`
  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .formLogin {
      position: absolute;
      margin-top: 200px;
      width: 350px;
      height: auto;
      max-height: 85vh;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      overflow-y: scroll;
    }

    .divButtonsLogin {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .pMsgReg {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 500;
      color: #2b937f;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 541px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .formLogin {
      position: absolute;
      margin-top: 150px;
      width: 460px;
      height: auto;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .divInputLogin {
    }

    .divButtonsLogin {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    .pMsgReg {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 500;
      color: #2b937f;
      margin-top: 20px;
    }
  }
`;
