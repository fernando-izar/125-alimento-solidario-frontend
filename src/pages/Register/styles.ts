import styled from "styled-components";
import image from "../../assets/Alimento5.jpg";

export const Container = styled.div`
  @media screen and (min-width: 541px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow-y: scroll;

    .formRegister {
      position: absolute;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 100px;
      width: 660px;
      height: auto;
      /* max-height: 85vh; */
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .divRadio {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .divFormFields {
      display: flex;
      flex-direction: column;
      width: 100 rem;
      margin-left: 30px;
    }

    .divFormFields2 {
      display: flex;
      flex-direction: column;
      width: 100 rem;
      margin-left: 30px;
    }

    .divButtonRegister {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }

    .radio-error {
      color: #d32f2f;
      font-family: "Roboto";
      font-size: 12px;

    }
  }

  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .formRegister {
      position: absolute;
      margin-top: 100px;
      width: 350px;
      height: auto;
      max-height: 82vh;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      overflow-y: scroll;
    }

    .divRadio {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;
      margin-bottom: -20px;
    }

    .divFormFields {
      width: 100 rem;
      margin-left: 30px;
    }

    .divFormFields2 {
      width: 100 rem;
      margin-left: 30px;
    }

    .divButtonRegister {
      width: 100 rem;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }

    .radio-error-mob {
      color: #d32f2f;
      font-family: "Roboto";
      font-size: 12px;

    }
  }
`;
