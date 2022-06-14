import { StrictMode } from "react";
import { Route, Switch } from "wouter";

import Home from "./pages/Home/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import Register from "./pages/Register/index.jsx";
import UserProvider from "./cache/user.jsx";
import BooksProvider from "./cache/books.jsx";
import SalesProvider from "./cache/sales.jsx";
import SearchProvider from "./cache/search.jsx";

import "./App.css";

export default () => (
  <StrictMode>
    <UserProvider>
      <SearchProvider>
        <BooksProvider>
          <SalesProvider>
            <Header />

            <main>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/sign-in">
                  <SignIn />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
            </main>

            <Footer />
          </SalesProvider>
        </BooksProvider>
      </SearchProvider>
    </UserProvider>
  </StrictMode>
);
