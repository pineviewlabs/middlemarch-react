import Field from "./components/Field/index.jsx";
import { useCart } from "../../cache/cart.jsx";

import {
  cTitle,
  cBlock,
  cContent,
  cCardPage,
  cMinOffset,
  cPromoCode,
  cDelimiter,
  cPromoBlock,
  cItemsCount,
  cPromoTitle,
  cBlockTitle,
  cLightBlock,
  cItemsPrice,
  cRedeemBlock,
  cRedeemField,
  cEmptyMessage,
  cPromoInfoTop,
  cCheckoutButton,
  cPromoInfoBottom,
  cPaymentBlockFields,
  cBillingBlockFields,
  cUserNamePrefixElement,
} from "./index.module.css";

export default () => {
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
            <div className={`${cLightBlock} ${cPromoInfoTop}`}>
              <div>
                <h6 className={cPromoTitle}>Promo code</h6>
                <small className={cPromoCode}>examplecode</small>
              </div>
              <span className={cPromoTitle}>-$5</span>
            </div>
            <div className={`${cLightBlock} ${cPromoInfoBottom}`}>
              Total (USD)
              <span className={cItemsPrice}>
                $
                {items
                  .reduce(
                    (sum, { book: { price }, quantity }) =>
                      sum + price * quantity,
                    0
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
