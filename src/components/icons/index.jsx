import SearchIcon from "./SearchIcon.jsx";
import BasketIcon from "./BasketIcon.jsx";
import NextArrowIcon from "./NextArrowIcon.jsx";
import PreviousArrowIcon from "./PreviousArrowIcon.jsx";
import UserAccountProfileIcon from "./UserAccountProfileIcon.jsx";

import { cIcon } from "./index.module.css";

const IconNameComponent = {
  search: <SearchIcon />,
  basket: <BasketIcon />,
  nextArrow: <NextArrowIcon />,
  previousArrow: <PreviousArrowIcon />,
  userAccountProfile: <UserAccountProfileIcon />,
};

export default ({
  name,
  width = "100%",
  height = width,
  className = "",
  ...other
}) => (
  <span
    style={{ "--icon-width": width, "--icon-height": height }}
    className={`${className} ${cIcon}`}
    {...other}
  >
    {IconNameComponent[name]}
  </span>
);
