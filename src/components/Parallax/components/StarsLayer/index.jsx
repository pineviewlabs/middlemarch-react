import Layer from "../Layer/index.jsx";

import { cStarsLayer } from "./index.module.css";

export default () => (
  <Layer depth={3}>
    <div className={cStarsLayer}></div>
  </Layer>
);
