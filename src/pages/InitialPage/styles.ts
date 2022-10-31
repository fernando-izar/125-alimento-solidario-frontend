import styled from "styled-components";
import image from "../../assets/Losango-Initial-Page.png";
import image2 from "../../assets/Rectangle-Initial-Page.png";

export const Container = styled.div`
  @media screen and (min-width: 541px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .figLogo {
      margin-left: 45vw;
    }

    .imgLogo {
      margin-top: 30px;
      width: 300px;
    }

    h1 {
      width: 650px;
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
      color: #ffffff;
      font-family: "Inter";
      margin-top: 50px;
      margin-left: 27vw;
      margin-bottom: 25px;
      text-align: center;
    }
  }

  @media screen and (max-width: 540px) {
    width: 100%;
    height: 100%;
    background-image: url(${image2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .imgLogo {
      margin-top: 30px;
      margin-left: 10vw;
      width: 200px;
    }

    h1 {
      width: 350px;
      font-size: 50px;
      font-weight: 700;
      line-height: 50px;
      color: #ffffff;
      font-family: "Inter";
      margin-top: 70px;
      margin-left: 8vw;
      margin-bottom: 80px;

      text-align: center;
    }
  }
`;
