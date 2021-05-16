import React from "react";
import styled from "styled-components";
import "../styles/icons.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  return (
    <div>
      <Wrap>
        <img id="suki-logo" src="/images/TSUKI_360x.png" alt="TSUKI" />
        <Icon id="menu-icon">
          <MenuIcon />
        </Icon>
        <Icon className="icon" id="cart-icon">
          <ShoppingCartRoundedIcon />
        </Icon>
        <Icon className="icon" id="search-icon">
          <SearchRoundedIcon />
        </Icon>
        <Icon className="icon" id="account-icon">
          <AccountCircleOutlinedIcon />
        </Icon>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  text-align: center;
  img {
    margin-left: 4rem;
    cursor: pointer;
    height: 7.5rem;
  }
`;

const Icon = styled.div`
  float: right;
  padding: 0.8rem;
  margin-top: 3rem;

  &:hover {
    color: #f4e0ea;
    cursor: pointer;
  }
`;
