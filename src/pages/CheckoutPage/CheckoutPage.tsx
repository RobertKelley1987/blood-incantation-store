import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import { useClientSecret } from "../../hooks/useClientSecret";
import OrderSummary from "./OrderSummary";

const stripePromise = loadStripe(
  "pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9"
);

function Checkout() {
  const { state } = useContext(CartContext);
  const { clientSecret } = useClientSecret(state.items);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        fontFamily: "Public Sans, sans-serif",
        fontSizeSm: "1rem",
        spacingUnit: "0px",
      },
    },
    loader: "always",
  };

  const renderElements = (options: StripeElementsOptions) => {
    return clientSecret ? (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    ) : null;
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <header className="flex w-full p-6 bg-black justify-center">
        <div className="max-w-32">
          <img alt="Blood Incantation band logo" src="../imgs/logo-white.png" />
        </div>
      </header>
      <div className="grid grid-cols-2 relative w-full max-w-screen-lg px-6 sm:px-12 gap-12">
        {renderElements(options)}
        <OrderSummary items={state.items} />
      </div>
    </div>
  );
}

export default Checkout;
