import { Link } from "wouter";
import { useId, useRef, useState, Fragment } from "react";

import Icon from "../../../icons/index.jsx";
import useClickOutside from "../../../../hooks/useClickOutside.js";
import { useUser } from "../../../../cache/user.jsx";

import {
  cAccountMenu,
  cAccountLabel,
  cAccountCheckbox,
  cAccountMenuLink,
  cAccountContainer,
  cAccountMenuLinkDelimiter,
} from "./index.module.css";

export default () => {
  const accountDropdownId = useId();
  const accountMenuContainerRef = useRef(null);
  const [isAccountMenuOpened, setIsAccountMenuOpened] = useState(false);

  const [user, { logout }] = useUser();

  useClickOutside(accountMenuContainerRef, (isInside) => {
    if (!isInside) {
      setIsAccountMenuOpened(false);
    }
  });

  return (
    <div ref={accountMenuContainerRef} className={cAccountContainer}>
      <label className={cAccountLabel} htmlFor={accountDropdownId}>
        <Icon name="userAccountProfile" />
      </label>
      <input
        className={cAccountCheckbox}
        id={accountDropdownId}
        type="checkbox"
        checked={isAccountMenuOpened}
        onChange={() => setIsAccountMenuOpened((old) => !old)}
      />
      <ul className={cAccountMenu}>
        {user ? (
          <li>
            <button className={cAccountMenuLink} onClick={logout}>
              Logout
            </button>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link className={cAccountMenuLink} href="/sign-in">
                Sign-in
              </Link>
            </li>
            <li>
              <hr className={cAccountMenuLinkDelimiter} />
            </li>
            <li>
              <Link className={cAccountMenuLink} href="/register">
                Register
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};
