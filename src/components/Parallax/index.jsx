import { cParallax } from "./index.module.css";

export default ({ className = "", children }) => (
  <div className={`${cParallax} ${className}`}>{children}</div>
);
