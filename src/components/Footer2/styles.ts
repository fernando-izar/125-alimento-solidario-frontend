import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #bdf1ea;

  .main-content {
    display: flex;
  }

  .main-content .box {
    flex-basis: 50%;
    padding: 10px 20px;
  }

  .box h2 {
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .box .content {
    margin: 20px 0 0 0;
  }

  .left .content .social {
    margin: 20px 0 0 0;
  }

  .left .content .social a {
    padding: 0 2px;
  }

  .left .content .social a span {
    height: 40px;
    width: 40px;
    background: #fa5c5c;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.3s;
  }

  .left .content .social a span:hover {
    background: #c12432;
  }
`;
