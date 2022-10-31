import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 540px) {
    flex-shrink: 0;
    /* position: absolute; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #bdf1ea;
    height: 50px;
    bottom: 0;
    /* margin-left: 5px;
    margin-right: 5px; */
    padding: 0px;
    margin: 0px 5px 0px 5px;

    .footer {
      /* width: 50%; */
    }

    .spanFooter {
      font-family: "Inter";
      font-size: 11px;
      font-weight: 700;
      color: #609e94;
    }

    .figure {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 5px;
      gap: 10px;
    }

    .instagram {
      width: 20px;
      border-radius: 5px;

      background-color: #69b9aa;
    }

    .facebook {
      width: 20px;
      background-color: #69b9aa;
      border-radius: 5px;
    }

    .twitter {
      background-color: #69b9aa;
      width: 20px;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 541px) {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #bdf1ea;
    height: 50px;
    bottom: 0;

    .footer {
      width: 50%;
    }

    .spanFooter {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 700;
      color: #609e94;
    }

    .figure {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 5px;
      gap: 20px;
    }

    .instagram {
      width: 30px;
      border-radius: 5px;

      background-color: #69b9aa;
    }

    .facebook {
      width: 30px;
      background-color: #69b9aa;
      border-radius: 5px;
    }

    .twitter {
      background-color: #69b9aa;
      width: 30px;
      border-radius: 5px;
    }
  }
`;
