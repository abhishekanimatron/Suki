import React from "react";
import styled from "styled-components";

export default function FreeShip() {
  return (
    <Container>
      <p>
        FREE WORLDWIDE SHIPPING OVER $199<span> | </span>
        <span>USE CODE: ABHISHEK</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #010;
  color: white;
  text-align: center;
  padding: 0.2rem;

  p {
    font-size: 0.8rem;
    font-weight: bolder;
    letter-spacing: 1.5px;

    span {
      font-weight: lighter;
      padding-left: 2rem;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
