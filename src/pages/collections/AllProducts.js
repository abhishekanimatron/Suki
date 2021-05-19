import React from "react";
import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import styled from "styled-components";

export default function AllProducts() {
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        <Wrap>
          <img src="/images/all-products/eLogotShirt.jpg" alt="els" />
          <p>Embroidered Logo T-shirt</p>
          <h6>$ 56.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/eLogoTurtleneck.jpg" alt="elt" />
          <p>Embroidered Logo Turtleneck</p>
          <h6>$ 80.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/oversizeHoodie.jpg" alt="oh" />
          <p>Oversized Hoodie</p>
          <h6>$ 108.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/tsukiEBeret.jpg" alt="teb" />
          <p>Suki Embroidered Wool Beret</p>
          <h6>$ 32.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/tsukiECap.jpg" alt="tec" />
          <p>Suki Logo Embroidered Cap</p>
          <h6>$ 34.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/tsukiSocks.jpg" alt="ts" />
          <p>Suki Socks</p>
          <h6>$ 12.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/gbKanjiPin.jpg" alt="gbkp" />
          <p>Gold and Black Kanji Enamel Pin</p>
          <h6>$ 8.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/s2KanjiPin.jpg" alt="skp" />
          <p>Set of 2 Suki Kanji Enamel Pins</p>
          <h6>$ 14.00 USD</h6>
        </Wrap>
        <Wrap>
          <img src="/images/all-products/bpKanjiPin.jpg" alt="bpkp" />
          <p>Black and Pink Kanji Enamel Pin</p>
          <h6>$ 8.00 USD</h6>
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
