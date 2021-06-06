import { useEffect } from "react";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";
import styled from "styled-components";

function AnimalCrossing() {
  useEffect(() => {
    document.title = "Animal Crossing Closet - Suki";
  }, []);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <h2
        style={{ fontWeight: "normal", textAlign: "center", marginTop: "2rem" }}
      >
        Animal Crossing Closet
      </h2>
      <Container>
        <Wrap>
          <img src="/images/animal-crossing/ac1.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac2.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac3.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac4.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac5.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac6.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac7.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac8.jpg" alt="els" />
        </Wrap>
        <Wrap>
          <img src="/images/animal-crossing/ac9.jpg" alt="els" />
        </Wrap>
      </Container>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

export default AnimalCrossing;

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const Wrap = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  img {
    border-radius: 5%;
    object-fit: contain;
    width: 100%;
    min-height: 100%;
    transition: 0.2s ease-out;
    box-shadow: 0.8px 0.9px 3px grey;

    &:hover {
      cursor: pointer;
      opacity: 0.75;
      transform: scale(1.05);
      box-shadow: 1px 4px 10px grey;
      transition: 0.2s ease-in;
    }
  }
`;
