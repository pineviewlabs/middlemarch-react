import { useState, useContext, createContext } from "react";

const CartContext = createContext([]);

export default ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={[items, setItems]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const [items, setItems] = useContext(CartContext);

  return [
    items,
    {
      add: (item) =>
        setItems(
          items.some(({ book }) => book.id === item.id)
            ? items.map(({ book, quantity }) => ({
                book,
                quantity: quantity + (book.id === item.id ? 1 : 0),
              }))
            : items.concat([{ book: item, quantity: 1 }])
        ),

      remove: (item) =>
        setItems(
          items
            .map(({ book, quantity }) =>
              book.id === item.id
                ? quantity === 1
                  ? null
                  : { book, quantity: quantity - 1 }
                : { book, quantity }
            )
            .filter(Boolean)
        ),
      removeAll: (item) =>
        setItems(
          items
            .map(({ book, quantity }) =>
              book.id === item.id ? null : { book, quantity }
            )
            .filter(Boolean)
        ),
    },
  ];
};
