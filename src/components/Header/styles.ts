import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: #bdf1ea;
  height: 80px;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .divLogoApresentation {
    display: flex;
    align-items: center;
    justify-content: space-around;

    text-align: center;

    width: 40%;
    div {
      width: 50%;
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;

        color: #2b937f;
      }
    }
  }

  @media (max-width: 540px) {
    .divLogoApresentation {
      flex-direction: column-reverse;

      width: 50%;
      height: 100%;

      align-items: center;
      div {
        h2 {
          font-size: 16px;
        }
      }

      img {
        width: 80px;
      }
    }
  }

  img {
    width: 20%;
  }

  .container-header {
    display: flex;
    align-items: center;
    /* gap: 2rem; */
  }

  nav {
    display: flex;
    height: fit-content;
    gap: 1rem;
    margin-right: 20px;
  }

  .btn-header {
    display: none;
  }

  .menu-button {
    padding: 0;
  }

  .menu {
    min-width: 200px;
  }

  .btn-chosen {
    background-color: #2b937f;
  }

  @media (min-width: 541px) {
    img {
      width: max-content;
      margin-left: 10px;
    }
  }

  @media (min-width: 820px) {
    .menu-button {
      display: none;
    }
    .btn-header {
      display: initial;
    }
  }
`;
