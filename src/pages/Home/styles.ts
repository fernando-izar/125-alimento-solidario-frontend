import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;

    margin-top: 2rem;
  }

  main {
    width: 100%;
    height: 100%;
  }

  aside {
    width: 20%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 815px) {
    .main-container {
      flex-direction: row;
      align-items: flex-start;
    }

    main {
      width: 80%;
    }

    aside {
      width: 20%;
    }
  }
`;
