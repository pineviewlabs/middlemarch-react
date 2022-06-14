import { Link } from "wouter";

import Icon from "../../../icons/index.jsx";
import { useUser } from "../../../../cache/user.jsx";
import { useCart } from "../../../../cache/cart.jsx";

import { cProductsCount, cBasketContainer } from "./index.module.css";

export default () => {
  const [user] = useUser();
  const [items] = useCart();

  return user ? (
    <Link className={cBasketContainer} href="/cart">
      <Icon name="basket" />
      <span className={cProductsCount}>{items.length}</span>
    </Link>
  ) : null;
};
