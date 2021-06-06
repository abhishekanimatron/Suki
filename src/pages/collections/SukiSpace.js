import { useEffect } from "react";
import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import styled from "styled-components";

export default function SukiSpace() {
  useEffect(() => {
    document.title = "SPACE 2029 - Suki";
  }, []);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        <Wrap>
          <img src="/images/space-program/space-zip-shirt.jpg" alt="szs" />
          <h5>SALE</h5>
          <p>Space Quarter Zip Sweatshirt</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-vest.jpg" alt="sv" />{" "}
          <h5>SALE</h5>
          <p>Space Vest</p>
          <h6>
            <span>$ 54.00 USD</span> $ 25.00 USD
          </h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-sleeve.jpg" alt="ss" />{" "}
          <h5>SALE</h5>
          <p>Space Long Sleeved Shirt</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-bandana.jpg" alt="sb" />{" "}
          <h5>SALE</h5>
          <p>Space Bandana</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-pin.jpg" alt="sp" />{" "}
          <h5>SALE</h5>
          <p>Suki Space Program Enamel Pin</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-tshirt.jpg" alt="st" />{" "}
          <h5>SALE</h5>
          <p>Space T-Shirt</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-jog.jpg" alt="sj" />{" "}
          <h5>SALE</h5>
          <p>Space Joggers</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-patches.jpg" alt="sps" />{" "}
          <h5>SALE</h5>
          <p>Space Patches Set</p>
          <h6>Sold Out</h6>
        </Wrap>
        <Wrap>
          <img src="/images/space-program/space-socks.jpg" alt="ss" />
          <p>Space Program Socks</p>
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
    @media (max-width: 1100px) {
      height: 80%;
    }
    &:hover {
      opacity: 0.75;
      cursor: pointer;
      transition: 0.2s ease-in;
    }
  }
  p {
    display: inline;
    padding-top: 1rem;
  }
  h5 {
    font-weight: normal;
    color: #fff;
    letter-spacing: 2px;
    font-size: 0.7rem;
    padding: 0.7rem 0;
    width: 20%;
    background-color: #000;
  }
  h6 {
    font-weight: normal;
    color: #444;
    padding-bottom: 4rem;
    span {
      text-decoration: line-through;
      color: #888;
    }
    @media (max-width: 900px) {
      padding-bottom: 10rem;
    }
    @media (max-width: 900px) {
      padding-bottom: 1rem;
    }
  }
`;
