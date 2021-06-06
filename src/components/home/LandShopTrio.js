import "../../styles/landshop.css";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

export default function LandShopTrio() {
  return (
    <Container>
      <Wrap>
        <ShopImage>
          <img src="/images/landing-shop-items/marziapattern.jpg" alt="bm" />
        </ShopImage>
        <ShopContent>
          <p class="shop-text">Shop the look</p>
          <Link to={ROUTES.NOT_FOUND}>
            <img src="/images/landing-shop-items/marziashirt.jpg" alt="ms" />
          </Link>
          <p class="item-name">Striped Button Up Shirt</p>
          <p class="item-price">$ 77.00 USD</p>
        </ShopContent>
      </Wrap>
      <Wrap>
        <ShopContent>
          <p class="shop-text">Shop the look</p>
          <Link to={ROUTES.NOT_FOUND}>
            <img src="/images/landing-shop-items/felix-vest.jpg" alt="ms" />
          </Link>

          <p class="item-name">Space Vest</p>
          <p class="item-price">
            <span class="sell-price">$ 54.00 USD</span> $ 25.00 USD
          </p>
        </ShopContent>
        <ShopImage>
          <img
            src="/images/landing-shop-items/marzia-fullspaceoutfit.jpg"
            alt="ms"
          />
        </ShopImage>
      </Wrap>
      <Wrap class="row">
        <ShopImage>
          <img src="/images/carousel/Felix.jpg" alt="bm" />
        </ShopImage>
        <ShopContent>
          <p class="shop-text">Shop the look</p>
          <Link to={ROUTES.NOT_FOUND}>
            <img src="/images/landing-shop-items/felix_black.jpg" alt="fb" />
          </Link>
          <p class="item-name">Black Moon Sweatshirt</p>
          <p class="item-price">$ 108.00 USD</p>
        </ShopContent>
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  @media (maxx-width: 600px) {
    margin-top: -4rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #99cfe0;
`;

const ShopImage = styled.div`
  max-width: 50%;
  img {
    max-height: 105vh;
    object-fit: cover;
    width: 100%;
  }
`;
const ShopContent = styled.div`
  max-width: 50%;
  text-align: center;
  height: 100%;

  img {
    width: 40%;
    border: 1px solid #000;
    cursor: pointer;
  }
`;
