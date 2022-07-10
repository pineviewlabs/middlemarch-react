import { Link } from "wouter";

import Icon from "../../../icons/index.jsx";
import { useCart } from "../../../../cache/cart.jsx";

import { cProductsCount, cBasketContainer } from "./index.module.css";

export default () => {
  const [items] = useCart();

  return (
    <Link className={cBasketContainer} href="/cart">
      <Icon name="basket" />
      <span className={cProductsCount}>{items.length}</span>
    </Link>
  );
};
