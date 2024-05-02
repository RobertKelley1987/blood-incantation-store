import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ShippingContext } from "../../context/ShippingContext";
import { CartContext } from "../../context/CartContext";
import { useCreatePmtIntent } from "../../hooks/useCreatePmtIntent";
import { useUpdatePmtIntent } from "../../hooks/useUpdatePmtIntent";
import CheckoutForm from "./CheckoutForm";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import type { CartItem, ShippingOption } from "../../types";
import { useContext } from "react";

// Create stripe instance outside element per Stripe docs
const stripePromise = loadStripe(
  "pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9"
);

function Checkout() {
  const items = useContext(CartContext).state.items;
  const shipping = useContext(ShippingContext).shippingMethod.cost;
  const { clientSecret, pmtIntentId } = useCreatePmtIntent(items, shipping);
  useUpdatePmtIntent(items, shipping, pmtIntentId);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        fontFamily: "Public Sans, sans-serif",
        fontSizeSm: "1rem",
        spacingUnit: "0px",
        colorText: "black",
        colorTextSecondary: "black",
        borderRadius: "0px",
      },
    },
    loader: "always",
  };

  const renderElements = (options: StripeElementsOptions) => {
    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    );
  };

  return clientSecret ? renderElements(options) : null;
}

export default Checkout;
