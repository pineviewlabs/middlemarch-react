import PageMenu from "./components/PageMenu/index.jsx";
import CartButton from "./components/CartButton/index.jsx";
import Authentication from "./components/Authentication/index.jsx";

import {
  cActionsPanel,
  cHeaderContainer,
  cNavigationPanel,
} from "./index.module.css";

export default () => (
  <header className={cHeaderContainer}>
    <nav className={`${cNavigationPanel} maximum-width`}>
      <PageMenu />

      <div className={cActionsPanel}>
        <Authentication />
        <CartButton />
      </div>
    </nav>
  </header>
);
