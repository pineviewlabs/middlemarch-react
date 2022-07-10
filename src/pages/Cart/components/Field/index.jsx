import { useId } from "react";

import {
  cField,
  cInput,
  cLabel,
  cOptional,
  cCheckbox,
  cTextMuted,
  cInputWrapper,
} from "./index.module.css";

const Text = ({
  type,
  title,
  value = null,
  prefix = null,
  optional = false,
  readOnly = false,
  className = "",
  placeholder = "",
  description = null,
}) => {
  const id = useId();

  return (
    <div className={`${cField} ${className}`}>
      {title && (
        <label htmlFor={id} className={cLabel}>
          {title}&nbsp;
          {optional ? <span className={cOptional}>(Optional)</span> : null}
        </label>
      )}
      <div className={cInputWrapper}>
        {prefix}
        <input
          id={id}
          type={type}
          readOnly={readOnly}
          className={cInput}
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>
      {description && <small className={cTextMuted}>{description}</small>}
    </div>
  );
};
const CheckBox = ({ title, className = "" }) => {
  const id = useId();

  return (
    <div className={`${cField} ${className}`}>
      <input id={id} type="checkbox" className={cCheckbox} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default ({
  type,
  title,
  value = null,
  prefix = null,
  optional = false,
  readOnly = false,
  className = "",
  placeholder = "",
  description = null,
}) => {
  switch (type) {
    case "text":
    case "email":
    case "number":
    case "search":
    case "password":
      return (
        <Text
          type={type}
          title={title}
          value={value}
          prefix={prefix}
          optional={optional}
          readOnly={readOnly}
          className={className}
          placeholder={placeholder}
          description={description}
        />
      );
    case "checkbox":
      return <CheckBox title={title} className={className} />;
    default:
      return null;
  }
};
