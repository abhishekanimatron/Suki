import styled from "styled-components";
import { useEffect } from "react";

import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";
import { IOSSwitch } from "../components/cart/switchIos";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Cart() {
  useEffect(() => {
    document.title = "Cart - Suki";
  }, []);
  return (
    <div>
      <FreeShip /> <Header />
      <Navbar />
      <Container>
        <Hero>
          <h2>Shopping Cart</h2>
          <div id="hero-content">
            <div id="hero-left">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th className="description">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="img">
                      <a href="/">
                        <img
                          src="/images/all-products/tsukiSocks.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>
                      <div className="desc">
                        <h5>Suki Socks</h5>
                        <h6 className="product-property">S</h6>
                      </div>
                      <a href="/" className="remove-btn">
                        REMOVE
                      </a>
                    </td>
                    <td className="item-price">$ 12.00 USD</td>
                    <td className="quantity">
                      <div id="quantity-selector">
                        <span id="quantity-minus">
                          <RemoveIcon />
                        </span>
                        <input
                          aria-label="quantity"
                          type="text"
                          defaultValue="1"
                          pattern="[0-9]*"
                        />
                        <span id="quantity-plus">
                          <AddIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="img">
                      <a href="/">
                        <img
                          src="/images/all-products/tsukiEBeret.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>
                      <div className="desc">
                        <h5>Suki Embroidered Wool Beret</h5>
                        <h6 className="product-property">M</h6>
                      </div>
                      <a href="/" className="remove-btn">
                        REMOVE
                      </a>
                    </td>
                    <td className="item-price">$ 32.00 USD</td>
                    <td className="quantity">
                      <div id="quantity-selector">
                        <span id="quantity-minus">
                          <RemoveIcon />
                        </span>
                        <input
                          aria-label="quantity"
                          type="text"
                          defaultValue="1"
                          pattern="[0-9]*"
                        />
                        <span id="quantity-plus">
                          <AddIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a id="continue-shopping-btn" href="/">
                Continue Shopping
              </a>
            </div>
            <div id="hero-right">
              <h4>
                Subtotal: <span>$ 0.00 USD</span>
              </h4>
              <div className="shipping-option">
                <span id="icon-cart">
                  <AddShoppingCartIcon />
                </span>
                <div className="ship-details">
                  <h5>Shipping Protection</h5>
                  <p>
                    from Damage, Loss & Theft for <span>$0.98</span>{" "}
                  </p>
                </div>
                <span id="toggle-btn">
                  <IOSSwitch />
                </span>
              </div>
              <button>Check Out</button>
              <p id="before-taxes-info">Before taxes & shipping costs</p>
            </div>
          </div>
        </Hero>
      </Container>
      <FollowFooter />
      <FooterLinks />
    </div>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin: 0 8rem;
  @media (max-width: 1024px) {
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hero = styled.div`
  h2 {
    margin: 2rem 0;
    margin-left: 1rem;
    font-weight: normal;
  }
  #hero-content {
    display: flex;
    margin-bottom: 7rem;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 2rem;
    }
    #hero-left {
      @media (max-width: 768px) {
        width: 100%;
        padding: 0%;
      }
      width: 68%;
      table {
        margin-bottom: 3rem;
        @media (max-width: 768px) {
          margin-bottom: 2rem;
        }
        width: 100%;
        table-layout: fixed;
        th {
          padding: 0.2rem 0rem;
          padding-left: 0.5rem;
          font-size: 1rem;
          font-weight: normal;
        }
        td {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 0.2rem;
          border-bottom: 1px solid #000;
        }
      }
      thead {
        border-bottom: 1px solid #000;
        tr {
          padding-bottom: 5px;
          font-size: 1rem;
          font-weight: normal;
        }
      }
      #continue-shopping-btn {
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
        color: black;
        transition: ease-in 0.2s;
        &:hover {
          padding-bottom: 0;
        }
      }
    }
    .img img {
      width: 3.3rem;
    }
    .description {
      width: 30%;
    }
    .desc {
      &:hover {
        cursor: pointer;
        color: #f4b1a1;
      }
      h5 {
        font-size: 0.95rem;
        font-weight: normal;
      }
      .product-property {
        color: #bbb;
        font-size: 0.95rem;
        font-weight: normal;
      }
    }
    .remove-btn {
      color: gray;
      font-size: 0.8rem;
      &:hover {
        text-decoration: none;
        color: #ddd;
      }
    }
    .item-price {
      font-size: 0.95rem;
    }
    #quantity-selector {
      @media (max-width: 768px) {
        width: 100%;
      }
      width: 70%;
      height: 100%;
      position: relative;
      span {
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        top: 0;
        width: 40%;
      }
      #quantity-minus {
        left: 0;
        justify-content: flex-start;
        padding-left: 10px;
      }
      #quantity-plus {
        right: 0;
        justify-content: flex-end;
        padding-right: 10px;
      }
      input {
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        text-align: center;
        width: 100%;
      }
    }
    #hero-right {
      @media (max-width: 768px) {
        margin-top: 2rem;
      }
      display: flex;
      justify-content: space-space-between;
      flex-direction: column;
      height: 100%;
      h4 {
        font-weight: normal;
        letter-spacing: 0.7px;
        font-size: 1.3rem;
        span {
          padding: 0 1.5rem;
        }
      }
      button {
        margin-top: 0.8rem;
        background-color: #f4e0ea;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.1rem;
        width: 100%;
        padding: 0.7rem 0.1rem;
        transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
        &:hover {
          background-color: #edcddd;
        }
        @media (max-width: 768px) {
          width: 45%;
        }
        @media (max-width: 536px) {
          width: 100%;
        }
      }
      #before-taxes-info {
        margin-top: 1rem;
        @media (max-width: 768px) {
          margin-top: 0;
        }
      }
      .shipping-option {
        margin-top: 1rem;
        display: flex;
        height: 100%;
        #icon-cart {
          color: gray;
        }
        p {
          font-size: 0.8rem;
        }
        .ship-details {
          h5 {
            font-size: 0.7rem;
            margin: 0;
          }
          p {
            font-size: 0.6rem;
          }
          span {
            font-weight: bold;
            color: black;
          }
        }
        #toggle-btn {
          padding-right: 0;
        }
      }
    }
  }
`;
