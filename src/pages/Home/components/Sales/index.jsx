import { useState } from "react";

import Icon from "../../../../components/icons/index.jsx";
import { useTick } from "../../../../hooks/useTick.js";
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

  const shouldTick = useTick(
    () => setActivePoster((old) => (old >= posters.length - 1 ? 0 : old + 1)),
    3000,
    [posters]
  );

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
          onClick={() => {
            shouldTick(false);
            setActivePoster(
              activePoster > 0 ? (old) => old - 1 : posters.length - 1
            );
            shouldTick(true);
          }}
        >
          <Icon name="previousArrow" />
        </button>
        <button
          className={cNavigationButton}
          onClick={() => {
            shouldTick(false);
            setActivePoster(
              posters.length - 1 > activePoster ? (old) => old + 1 : 0
            );
            shouldTick(true);
          }}
        >
          <Icon name="nextArrow" />
        </button>
      </div>

      <div className={cBullets}>
        {posters.map(({ id }, index) => (
          <button
            key={id}
            className={`${cBullet} ${index === activePoster ? cActive : ""}`}
            onClick={() => {
              shouldTick(false);
              setActivePoster(index);
              shouldTick(true);
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};
