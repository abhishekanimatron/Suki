import React from "react";
import styled from "styled-components";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <>
      <ContainerOne>
        <TextContent>
          <icon>
            <SportsHandballIcon />
          </icon>
          <h4>Thoughtfully designed</h4>
          <p>
            We design apparel and homeware that feature creative, fun designs
            for the daring individual.
          </p>
        </TextContent>
        <TextContent>
          <LoyaltyIcon />
          <h4>Ethically Sourced</h4>
          <p>
            We ensure that all our products are sourced responsibly and made
            from excellent quality materials.
          </p>
        </TextContent>
        <TextContent>
          <QuestionAnswerIcon />
          <h4>Get in touch</h4>
          <p>
            Do you have any questions? Please get in touch with us at any time
            and we'll be happy to assist you.
          </p>
        </TextContent>
      </ContainerOne>
      <ContainerTwo>
        <FooterFollow>
          <h3>Newsletter</h3>

          <p>
            Subscribe to be the first to hear about our latest collections,
            offers and news about the brand.
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
      <FooterLinksContainer>
        <p>© suki market 2021</p>
        <p>customer support</p>
        <p>order shipping information</p>
        <p>about</p>
        <p>collaborations</p>
        <p>wholesalers & retailers</p>
        <p>terms & conditions</p>
        <p>privacy policy</p>
        <p>powered by shopify</p>
      </FooterLinksContainer>
    </>
  );
}

const ContainerOne = styled.div`
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
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
const FooterLinksContainer = styled.div`
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }

  p {
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 0.7rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: lighter;
    &:hover {
      color: skyblue;
    }
  }
`;

const TextContent = styled.div`
  color: #fff;
  h4 {
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline;
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  p {
    margin-left: 2.5rem;
    font-size: 0.9rem;
    width: 70%;
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
    width: 50%;
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
