import { useId, useState } from "react";

import FormGroup from "../../components/FormGroup/index.jsx";
import FormField from "../../components/FormField/index.jsx";
import { useUser } from "../../cache/user.jsx";

import {
  cForm,
  cErrorMessage,
  cFormRegisterButton,
  cFormRememberMeCheckbox,
} from "./index.module.css";

export default () => {
  const rememberMeId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [, { register }] = useUser();

  return (
    <form
      className={cForm}
      onSubmit={(event) => {
        event.preventDefault();

        register(email, password, rememberMe).then(() => {
          setEmail("");
          setPassword("");
          setRememberMe(false);
          setRegisterError(null);
        }, setRegisterError);
      }}
    >
      <FormGroup title="Please register">
        <FormField>
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={({ currentTarget }) => {
              setRegisterError(null);
              setEmail(currentTarget.value);
            }}
          />
          <label>Email address</label>
        </FormField>
        <FormField>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={({ currentTarget }) => {
              setRegisterError(null);
              setPassword(currentTarget.value);
            }}
          />
          <label>Password</label>
        </FormField>
      </FormGroup>

      <FormGroup>
        <input
          type="checkbox"
          id={rememberMeId}
          className={cFormRememberMeCheckbox}
          checked={rememberMe}
          onChange={({ currentTarget }) => setRememberMe(currentTarget.checked)}
        />
        <label htmlFor={rememberMeId}>Remember me</label>
      </FormGroup>

      {registerError ? (
        <p className={cErrorMessage}>A user exists already. You may login.</p>
      ) : null}

      <button type="submit" className={cFormRegisterButton}>
        Register
      </button>
    </form>
  );
};
