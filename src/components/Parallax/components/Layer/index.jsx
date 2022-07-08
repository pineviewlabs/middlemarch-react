import { cLayer } from "./index.module.css";

const calculatePositionCSS = (stackPosition) =>
  `translateZ(-${stackPosition}px) scale(calc((var(--perspective) - ${-stackPosition}) / var(--perspective)))`;

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
