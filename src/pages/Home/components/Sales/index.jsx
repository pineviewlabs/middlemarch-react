import { useState } from "react";

import Icon from "../../../../components/icons/index.jsx";
import { useSales } from "../../../../cache/sales.jsx";

import {
  cBullet,
  cActive,
  cBullets,
  cSalesPoster,
  cSalesPosters,
  cSalesSection,
  cNavigationButton,
  cNavigationButtons,
  cSalesPosterContainer,
} from "./index.module.css";

export default () => {
  const [posters] = useSales();
  const [activePoster, setActivePoster] = useState(0);

  return (
    <section className={cSalesSection}>
      <div
        className={cSalesPosters}
        style={{ "--active-poster-index": activePoster }}
      >
        {posters.map(({ id, image, uri }) => (
          <a
            key={id}
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className={cSalesPosterContainer}
          >
            <img className={cSalesPoster} src={image} alt={"By at " + uri} />
          </a>
        ))}
      </div>

      <div className={cNavigationButtons}>
        <button
          className={cNavigationButton}
          onClick={() =>
            activePoster > 0 ? setActivePoster((old) => old - 1) : null
          }
        >
          <Icon name="previousArrow" />
        </button>
        <button
          className={cNavigationButton}
          onClick={() =>
            posters.length - 1 > activePoster
              ? setActivePoster((old) => old + 1)
              : null
          }
        >
          <Icon name="nextArrow" />
        </button>
      </div>

      <div className={cBullets}>
        {posters.map(({ id }, index) => (
          <button
            key={id}
            className={`${cBullet} ${index === activePoster ? cActive : ""}`}
            onClick={() => setActivePoster(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};
