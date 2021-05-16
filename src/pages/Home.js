import React from "react";
import BasicWall from "../components/BasicWall";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <BasicWall />
    </>
  );
}
