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

export default ({ name, className = "", ...other }) => (
  <span className={`${className} ${cIcon}`} {...other}>
    {IconNameComponent[name]}
  </span>
);
