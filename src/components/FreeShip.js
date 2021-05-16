import React from "react";
import styled from "styled-components";

export default function FreeShip() {
  return (
    <Container>
      <p>
        FREE WORLDWIDE SHIPPING OVER $199<span> | </span>
        <span>USE CODE: SUKI</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #010;
  color: white;
  z-index: 2;
  text-align: center;

  p {
    font-size: 0.8rem;
    font-weight: bolder;
    letter-spacing: 1.5px;

    span {
      font-weight: lighter;
      padding-left: 2rem;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
