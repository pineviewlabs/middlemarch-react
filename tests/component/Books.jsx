import BooksProvider from "/src/cache/books.jsx";
import CartProvider from "/src/cache/cart.jsx";
import Arrivals from "/src/pages/Home/components/Arrivals/index.jsx";

export default () => (
  <CartProvider>
    <BooksProvider>
      <Arrivals />
    </BooksProvider>
  </CartProvider>
);
