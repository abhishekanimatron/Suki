import React from "react";
import styled from "styled-components";

export default function BasicWall() {
  return (
    <Container>
      <img src="/images/fINALHERO2_2048x.jpg" alt="" />
      <HeroContentWrap>
        <HeroContent>
          <h3>Back to Basics</h3>
          <ShopButton>SHOP NOW</ShopButton>
        </HeroContent>
      </HeroContentWrap>
    </Container>
  );
}

const Container = styled.div`
  img {
    max-width: 100%;
    margin: 0;
    border: 0;
    display: block;
    height: 100vh;
    overflow: hidden;
    background-position: center;
    height: auto;
  }
`;

const HeroContentWrap = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
`;

const HeroContent = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: lighter;
    @media (max-width: 600px) {
      margin-top: -150px;
    }
  }
`;

const ShopButton = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  color: white;
  border: 1px solid #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.7rem 2rem;
`;
