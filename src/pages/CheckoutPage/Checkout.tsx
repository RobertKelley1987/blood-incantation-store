import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCreatePmtIntent } from "../../hooks/useCreatePmtIntent";
import { useUpdatePmtIntent } from "../../hooks/useUpdatePmtIntent";
import CheckoutForm from "./CheckoutForm";
import type { CartItem, ShippingOption } from "../../types";
import type { StripeElementsOptions } from "@stripe/stripe-js";

// Create stripe instance outside element per Stripe docs
const stripePromise = loadStripe(
  "pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9"
);

type CheckoutProps = {
  cartItems: CartItem[];
  shippingMethod: ShippingOption;
  setShippingMethod: React.Dispatch<React.SetStateAction<ShippingOption>>;
};

function Checkout({
  cartItems,
  shippingMethod,
  setShippingMethod,
}: CheckoutProps) {
  const { clientSecret, pmtIntentId, createPmtIntentError } =
    useCreatePmtIntent(cartItems, shippingMethod.cost);
  const { updatePmtIntentError } = useUpdatePmtIntent(
    cartItems,
    shippingMethod.cost,
    pmtIntentId
  );

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
        <CheckoutForm
          createPmtIntentError={createPmtIntentError}
          updatePmtIntentError={updatePmtIntentError}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
        />
      </Elements>
    );
  };

  return clientSecret ? renderElements(options) : null;
}

export default Checkout;
