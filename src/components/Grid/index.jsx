import { cGrid } from "./index.module.css";

export default ({ className = "", children }) => (
  <div className={`${cGrid} ${className}`}>{children}</div>
);
