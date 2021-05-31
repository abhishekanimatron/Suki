import { useEffect } from "react";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";

export default function Cart() {
  useEffect(() => {
    document.title = "Cart - Suki";
  }, []);
  return (
    <div>
      <FreeShip /> <Header />
      <h2>Cart page</h2>
    </div>
  );
}
