import { Link } from "wouter";
import { Fragment, useState } from "react";

import {
  cActive,
  cPageLink,
  cMenuButton,
  cPageLinksContainer,
} from "./index.module.css";

export default () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Fragment>
      <button
        className={cMenuButton}
        onClick={() => setIsMenuOpened((old) => !old)}
      >
        <span></span>
      </button>

      <ul className={`${cPageLinksContainer} ${isMenuOpened ? cActive : ""}`}>
        <li>
          <Link className={cPageLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={cPageLink} href="#">
            Features
          </Link>
        </li>
        <li>
          <Link className={cPageLink} href="#">
            Pricing
          </Link>
        </li>
        <li>
          <Link className={cPageLink} href="#">
            FAQs
          </Link>
        </li>
        <li>
          <Link className={cPageLink} href="#">
            About
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
