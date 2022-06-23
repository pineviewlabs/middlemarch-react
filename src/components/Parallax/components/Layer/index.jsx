import { cLayer } from "./index.module.css";

const calculatePositionCSS = (stackPosition) =>
  `translateZ(-${stackPosition}px) scale(${stackPosition + 1})`;

export default ({ depth = 0, children }) => (
  <div
    style={{
      transform: calculatePositionCSS(depth),
    }}
    className={cLayer}
  >
    {children}
  </div>
);
