import React from "react";
import BasicWall from "../components/home/BasicWall";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/home/ImageCarousel";

export default function Home() {
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <BasicWall />
      <ImageCarousel />
    </>
  );
}