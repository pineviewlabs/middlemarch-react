import { useState, useContext, useEffect, createContext } from "react";

const UserContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

const registerUser = (setUser) => (email, password, shouldRemember) =>
  fetch("/api/register", {
    method: "PUT",
    body: JSON.stringify({ email, password, shouldRemember }),
  })
    .then(async (response) =>
      response.ok
        ? response.json()
        : Promise.reject({
            status: response.status,
            body: await response.json(),
          })
    )
    .then((user) => {
      if (user) {
        sessionStorage.setItem(import.meta.env.VITE_AUTH_KEY, user.id);
      }
      setUser(user);
    });

const loginUser = (setUser) => (email, password) =>
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
    .then(async (response) =>
      response.ok
        ? response.json()
        : Promise.reject({
            status: response.status,
            body: await response.json(),
          })
    )
    .then((user) => {
      if (user) {
        sessionStorage.setItem(import.meta.env.VITE_AUTH_KEY, user.id);
      }
      setUser(user);
    });

const logout = (setUser) => () => {
  sessionStorage.removeItem(import.meta.env.VITE_AUTH_KEY);
  setUser(null);
};

const tryToFetchUser = (setUser) =>
  fetch("/api/check-user", {
    method: "POST",
    body: JSON.stringify({
      userId: sessionStorage.getItem(import.meta.env.VITE_AUTH_KEY),
    }),
  })
    .then((response) => (response.ok ? response.json() : null))
    .then(setUser);

export const useUser = () => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => void tryToFetchUser(setUser), []);

  return [
    user,
    {
      login: loginUser(setUser),
      logout: logout(setUser),
      register: registerUser(setUser),
    },
  ];
};
