import { useState } from "react";

import FormGroup from "../../components/FormGroup/index.jsx";
import FormField from "../../components/FormField/index.jsx";
import { useUser } from "../../cache/user.jsx";

import { cForm, cErrorMessage, cFormSignInButton } from "./index.module.css";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [, { login }] = useUser();

  return (
    <form
      className={cForm}
      onSubmit={(event) => {
        event.preventDefault();

        login(email, password).then(() => {
          setEmail("");
          setPassword("");
          setLoginError(null);
        }, setLoginError);
      }}
    >
      <FormGroup title="Please sign-in">
        <FormField>
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={({ currentTarget }) => {
              setLoginError(null);
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
              setLoginError(null);
              setPassword(currentTarget.value);
            }}
          />
          <label>Password</label>
        </FormField>
      </FormGroup>

      {loginError ? (
        <p className={cErrorMessage}>
          The email or password is not correct. Try again.
        </p>
      ) : null}

      <button type="submit" className={cFormSignInButton}>
        Sign-in
      </button>
    </form>
  );
};
