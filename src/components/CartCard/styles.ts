import styled from "styled-components";

export const Container = styled.li`
  background-color: transparent;
  width: 260px;
  height: 69px;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); */
  border-radius: 4px;
  perspective: 1000px;

  .flipper {
    position: relative;
    /* display: flex; */
    width: 100%;
    height: 70px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    /*  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    border-radius: 4px;
  }

  :hover .flipper {
    transform: rotateX(180deg) /* rotateZ(180deg) */;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .front {
    /* background-color: #bbb; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #e4e4e4;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #2b937f;
    .front--img-and-food-information {
      display: flex;
      gap: 16px;
      margin-left: 8px;

      figure {
        width: 65px;
        height: 43px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        }
      }

      .front-food {
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 18px;

          color: #2b937f;
        }
        span {
          background: #f5a7a1;
          border-radius: 9px;

          padding: 2px 10px 2px 10px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;

          color: #ffffff;
        }
      }
    }

    .front-quantity {
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #2b937f;

        margin-right: 8px;
      }
    }
  }

  .back {
    display: flex;
    justify-content: space-around;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    gap: 10px;

    /*  background: #f5f5f5; */
    background: #e4e4e4;

    transform: rotateX(180deg) /* rotateX(180deg) */;

    text-transform: capitalize;

    .back-food {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;

      margin-left: 8px;

      width: 30%;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;

        color: #2b937f;
      }

      span {
        background: #f5a7a1;
        border-radius: 9px;
        padding: 2px 10px 2px 10px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;

        color: #ffffff;
      }
    }

    .back-address {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      gap: 2px;
      width: 60%;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;

        color: #2b937f;
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;

        color: #2b937f;
      }
    }
    .back-quantity {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      width: 30%;
      height: 100%;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #2b937f;

        margin-bottom: 7px;
        margin-right: 8px;
      }
    }
  }
`;
