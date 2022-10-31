import styled from "styled-components";

export const Container = styled.div`
  background: #f4f4f4;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  max-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 550px;
  h2 {
    font-size: 14px;
    font-weight: 700;
    color: #2b937f;

    align-self: flex-start;
    padding: 1rem 2rem;
    font-family: "Inter";
  }
  ul {
    list-style: none;
    overflow: auto;
    padding: 0;

    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
