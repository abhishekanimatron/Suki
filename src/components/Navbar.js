import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import "../styles/nav.css";

export default function Navbar() {
  return (
    <Container>
      <Nav>
        <DropdownButton
          id="home-menu"
          className="dropdown-basic-button"
          title="Home ホームページ"
        >
          <Dropdown.Item className="menu-item" href="#">
            RESPONSIBILITY
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="collection-menu"
          className="dropdown-basic-button"
          title="Collections コレクション"
        >
          <Dropdown.Item className="menu-item" href="#">
            BASICS
          </Dropdown.Item>
          <Dropdown.Item className="menu-item" href="#">
            BLACK MOON
          </Dropdown.Item>
          <Dropdown.Item className="menu-item" href="#">
            SUKI SPACE PROGRAM
          </Dropdown.Item>
        </DropdownButton>

        <h6>
          Animal Crossing Closet <span>どうぶつの森 コレクション</span>
        </h6>
      </Nav>
    </Container>
  );
}

const Nav = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h6 {
    font-weight: normal;
    overflow: hidden;
    &:hover {
      color: rgb(75, 161, 187);
      background-color: transparent;
      cursor: pointer;
    }
    span {
      @media (max-width: 900px) {
        /* display: flex; */
        display: none;
      }
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;
