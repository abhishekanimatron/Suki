import { useEffect } from "react";
import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import styled from "styled-components";

export default function Blackmoon() {
  useEffect(() => {
    document.title = "Black Moon - Suki";
  }, []);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        <Wrap>
          <img src="/images/landing-shop-items/felix_black.jpg" alt="bmss" />
          <p>Black Moon Sweatshirt</p>
          <h6>$ 108.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/landing-shop-items/marziashirt.jpg" alt="sbs" />
          <p>Striped Button Up Shirt</p>
          <h6>$ 77.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/bmRelaxT.jpg" alt="bmtrf" />
          <p>Black Moon Trousers Relaxed Fit</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/stripeScarf.jpg" alt="ss" />
          <p>Striped Scarf</p>
          <h6>$ 27.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/bmSlimT.jpg" alt="bmtsf" />
          <p>Black Moon Trousers Slim Fit</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/cSCap.jpg" alt="csc" />
          <p>Corduroy Suki Cap</p>
          <h6>$ 34.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/blackMoonSock.jpg" alt="bmss" />
          <p>Black Moon Sock Set</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/black-moon/corduroyShirt.jpg" alt="cbs" />
          <p>Corduroy Button Up Shirt</p>
          <h6>Sold Out</h6>
        </Wrap>
      </Container>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const Wrap = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  text-align: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 86%;
    border-bottom: 1px solid black;
    transition: 0.2s ease-out;
    &:hover {
      opacity: 0.75;
      cursor: pointer;
      transition: 0.2s ease-in;
    }
  }
  p {
    padding-top: 1rem;
  }
  h6 {
    font-weight: normal;
    color: #444;
    padding-bottom: 4rem;
    @media (max-width: 900px) {
      padding-bottom: 6rem;
    }
    @media (max-width: 900px) {
      padding-bottom: 1rem;
    }
  }
`;
