import Icon from "../icons/index.jsx";
import { useUser } from "../../cache/user.jsx";
import { useCart } from "../../cache/cart.jsx";

import {
  cCardTitle,
  cCardImage,
  cCardAuthor,
  cCardContent,
  cCardCategory,
  cCardCurrency,
  cCardContainer,
  cCardAddToCartButton,
  cCardCheckoutContainer,
} from "./index.module.css";

export default ({ book, className = "" }) => {
  const [user] = useUser();
  const [, { add }] = useCart();

  return (
    <div data-book-id={book.id} className={`${cCardContainer} ${className}`}>
      <div className={cCardContent}>
        <strong className={cCardCategory}>{book.category}</strong>
        <h3 className={cCardTitle}>{book.title}</h3>
        <address className={cCardAuthor}>{book.author}</address>
        <p>{book.description}</p>
        <footer className={cCardCheckoutContainer}>
          <em className={cCardCurrency}>
            {book.currency} {book.price}
          </em>
          {user ? (
            <button onClick={() => add(book)} className={cCardAddToCartButton}>
              <Icon name="basket" />
            </button>
          ) : null}
        </footer>
      </div>

      <div className={cCardImage}>
        <img src={book.image} alt={book.title + " title by " + book.author} />
      </div>
    </div>
  );
};
