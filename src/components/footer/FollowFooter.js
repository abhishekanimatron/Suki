import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import styled from "styled-components";

export default function FollowFooter() {
  return (
    <ContainerTwo>
      <FooterFollow>
        <h3>Newsletter</h3>
        <p>
          Subscribe to be the first to hear about our latest collections, offers
          and news about the brand.
        </p>
        <input type="text" />
        <button>JOIN</button>
      </FooterFollow>
      <FooterFollow>
        <h3>Follow us on Instagram</h3>
        <icon>
          <InstagramIcon style={{ cursor: "pointer" }} />
        </icon>
      </FooterFollow>
    </ContainerTwo>
  );
}

const ContainerTwo = styled.div`
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const FooterFollow = styled.div`
  margin-top: 2rem;
  color: #fff;
  h3 {
    margin-right: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid #fff;
  }
  input {
    padding: 0.5rem 1rem;
    background-color: #000;
    border-color: #fff;
    color: #fff;
    width: 88%;
  }
  button {
    letter-spacing: 2px;
    padding: 0.63rem;
    border: none;
    font-weight: bold;
  }
  icon {
    &:hover {
      color: skyblue;
    }
  }
`;
