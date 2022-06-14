import { cFormGroup, cFormGroupTitle } from "./index.module.css";

export default ({ children, title }) => (
  <fieldset className={cFormGroup}>
    {title ? <legend className={cFormGroupTitle}>{title}</legend> : ""}
    {children}
  </fieldset>
);
