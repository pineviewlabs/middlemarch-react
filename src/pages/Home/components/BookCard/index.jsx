import Icon from "../../../../components/icons/index.jsx";

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

export default ({
  book: { title, price, image, author, category, currency, description },
}) => (
  <div className={cCardContainer}>
    <div className={cCardContent}>
      <strong className={cCardCategory}>{category}</strong>
      <h3 className={cCardTitle}>{title}</h3>
      <address className={cCardAuthor}>{author}</address>
      <p>{description}</p>
      <footer className={cCardCheckoutContainer}>
        <em className={cCardCurrency}>
          {currency} {price}
        </em>
        <button className={cCardAddToCartButton}>
          <Icon name="basket" />
        </button>
      </footer>
    </div>

    <div className={cCardImage}>
      <img src={image} alt={title + " title by " + author} />
    </div>
  </div>
);
