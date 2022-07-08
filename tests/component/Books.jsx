import BooksProvider from "/src/cache/books.jsx";
import CartProvider from "/src/cache/cart.jsx";
import UserProvider from "/src/cache/user.jsx";
import Arrivals from "/src/pages/Home/components/Arrivals/index.jsx";

export default () =>
  <UserProvider>
    <CartProvider>
      <BooksProvider><Arrivals /></BooksProvider>
    </CartProvider>
  </UserProvider>

