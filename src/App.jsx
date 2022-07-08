import { Fragment, StrictMode } from "react";
import { Route, Switch, useLocation } from "wouter";

import Home from "./pages/Home/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import Register from "./pages/Register/index.jsx";
import Parallax from "./components/Parallax/index.jsx";
import StarsLayer from "./components/Parallax/components/StarsLayer/index.jsx";
import CloudsLayer from "./components/Parallax/components/CloudsLayer/index.jsx";
import UserProvider from "./cache/user.jsx";
import CartProvider from "./cache/cart.jsx";
import BooksProvider from "./cache/books.jsx";
import SalesProvider from "./cache/sales.jsx";
import SearchProvider from "./cache/search.jsx";

import "./App.css";

export default () => {
  const [location] = useLocation();

  return (
    <StrictMode>
      <UserProvider>
        <CartProvider>
          <SearchProvider>
            <BooksProvider>
              <SalesProvider>
                <Parallax className="page">
                  {location === "/" ? (
                    <Fragment>
                      <StarsLayer />
                      <CloudsLayer />
                    </Fragment>
                  ) : null}
                  <Header />

                  <main>
                    <Switch>
                      <Route path="/">
                        <Home />
                      </Route>
                      <Route path="/cart">
                        <Cart />
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
                </Parallax>
              </SalesProvider>
            </BooksProvider>
          </SearchProvider>
        </CartProvider>
      </UserProvider>
    </StrictMode>
  );
};
