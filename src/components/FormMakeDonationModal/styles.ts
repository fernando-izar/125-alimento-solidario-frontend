import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  form {
    margin: auto;

    width: 75%;

    display: flex;
    flex-direction: column;
    gap: 11px;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #2b937f;
    }

    p {
      color: #f78a8a;
      font-size: 11px;
    }

    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      /* identical to box height */

      color: rgba(43, 147, 127, 0.72);
    }

    select {
      background: #ffffff;
      border: 1px solid #2b937f;
      color: rgba(43, 147, 127);
      width: 50%;
    }
  }
`;
