import Field from "./components/Field/index.jsx";
import { useCart } from "../../cache/cart.jsx";

import {
  cItem,
  cTitle,
  cBlock,
  cContent,
  cBookInfo,
  cCardPage,
  cMinOffset,
  cItemsList,
  cPromoCode,
  cDelimiter,
  cPromoBlock,
  cItemsCount,
  cPromoTitle,
  cBlockTitle,
  cLightBlock,
  cTopRounded,
  cItemsPrice,
  cRedeemBlock,
  cPromoResult,
  cRedeemField,
  cEmptyMessage,
  cBottomRounded,
  cPromoCodeBlock,
  cCheckoutButton,
  cPaymentBlockFields,
  cBillingBlockFields,
  cUserNamePrefixElement,
} from "./index.module.css";

export default () => {
  const discount = 5;
  const [items] = useCart();

  return (
    <div className={cCardPage}>
      <h1 className={cTitle}>Checkout form</h1>

      {items.length === 0 ? (
        <p className={cEmptyMessage}>You didn't pick up any books to buy...</p>
      ) : (
        <div className={cContent}>
          <div className={`${cPromoBlock} ${cBlock}`}>
            <h4 className={cBlockTitle}>
              Your cart <span className={cItemsCount}>{items.length}</span>
            </h4>
            <ul className={`${cItemsList} ${cTopRounded}`}>
              {items.map(({ book, quantity }) => (
                <li key={book.id} className={cItem}>
                  <div className={cBookInfo}>
                    <h6>{book.title}</h6>
                    <small>{book.author}</small>
                  </div>
                  <span>
                    {quantity > 1 ? quantity + "x" : ""}&nbsp;
                    {book.currency + book.price}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className={`${cLightBlock} ${cPromoCodeBlock} ${
                items.length === 0 ? cTopRounded : ""
              }`}
            >
              <div>
                <h6 className={cPromoTitle}>Promo code</h6>
                <small className={cPromoCode}>examplecode</small>
              </div>
              <span className={cPromoTitle}>-${discount}</span>
            </div>
            <div className={`${cLightBlock} ${cPromoResult} ${cBottomRounded}`}>
              Total (USD)
              <span className={cItemsPrice}>
                $
                {items
                  .reduce(
                    (sum, { book: { price }, quantity }) =>
                      sum + price * quantity,
                    -discount
                  )
                  .toFixed(2)}
              </span>
            </div>
            <form className={cRedeemBlock}>
              <div className={cRedeemField}>
                <input type="text" placeholder="Promo code" />
                <button type="submit">Redeem</button>
              </div>
            </form>
          </div>

          <div>
            <div className={cBlock}>
              <h4 className={cBlockTitle}>Billing address</h4>
              <div className={cBillingBlockFields}>
                <Field type="text" title="First name" />
                <Field type="text" title="Last name" />
                <Field
                  type="text"
                  title="Username"
                  prefix={
                    <Field
                      type="text"
                      value="@"
                      className={cUserNamePrefixElement}
                      readOnly
                    />
                  }
                  placeholder="Username"
                />
                <Field
                  type="email"
                  title="Email"
                  optional
                  placeholder="you@example.com"
                />
                <Field type="text" title="Address" placeholder="1234 Main St" />
                <Field
                  type="text"
                  title="Address 2"
                  optional
                  placeholder="Apartment or suite"
                />
              </div>
            </div>
            <hr className={cDelimiter} />
            <Field
              type="checkbox"
              title="Shipping address is the same as my billing address"
              className={cMinOffset}
            />
            <hr className={cDelimiter} />
            <div className={cBlock}>
              <h4 className={cBlockTitle}>Payment</h4>
              <div className={cPaymentBlockFields}>
                <Field
                  type="text"
                  title="Name on card"
                  description="Full name as displayed on card"
                />
                <Field type="text" title="Credit card number" />
                <Field type="text" title="Expiration" />
                <Field type="text" title="CVV" />
              </div>
            </div>
            <hr className={cDelimiter} />
            <div className={cMinOffset}>
              <button className={cCheckoutButton} type="submit">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
