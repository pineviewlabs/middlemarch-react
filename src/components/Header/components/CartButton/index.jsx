import { Link } from "wouter";

import Icon from "../../../icons/index.jsx";

import { cProductsCount, cBasketContainer } from "./index.module.css";

export default () => {
  return (
    <Link className={cBasketContainer} href="/cart">
      <Icon name="basket" />
      <span className={cProductsCount}>0</span>
    </Link>
  );
};
