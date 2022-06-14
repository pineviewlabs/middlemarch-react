import { Fragment } from "react";

import Grid from "../../components/Grid/index.jsx";
import BookCard from "../../components/BookCard/index.jsx";
import { useCart } from "../../cache/cart.jsx";

import {
  cCard,
  cTitle,
  cButton,
  cEmptyMessage,
  cCardContainer,
} from "./index.module.css";

export default () => {
  const [items, { remove, removeAll }] = useCart();

  return (
    <Fragment>
      <h1 className={cTitle}>You are going to buy:</h1>

      {items.length === 0 ? (
        <p className={cEmptyMessage}>Nothing...</p>
      ) : (
        <Grid>
          {items.map(({ book, quantity }) => (
            <div
              key={book.id}
              className={cCardContainer}
              data-quantity={quantity}
            >
              <BookCard className={cCard} book={book} />
              <div>
                <button className={cButton} onClick={() => remove(book)}>
                  Delete one
                </button>
                <button className={cButton} onClick={() => removeAll(book)}>
                  Delete all
                </button>
              </div>
            </div>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};
