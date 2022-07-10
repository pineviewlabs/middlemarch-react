import { cFormField } from "./index.module.css";

export default ({ className = "", children }) => (
  <div className={`${cFormField} ${className}`}>{children}</div>
);
