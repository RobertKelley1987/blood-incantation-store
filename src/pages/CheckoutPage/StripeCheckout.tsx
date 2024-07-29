import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCreatePmtIntent } from "../../hooks/useCreatePmtIntent";
import { useUpdatePmtIntent } from "../../hooks/useUpdatePmtIntent";
import CheckoutForm from "./CheckoutForm";
import type { StripeElementsOptions } from "@stripe/stripe-js";

// Create stripe instance outside element per Stripe docs
const stripePromise = loadStripe(
  "pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9"
);

function Checkout() {
  const { clientSecret, pmtIntentId, isLoading } = useCreatePmtIntent();
  useUpdatePmtIntent(pmtIntentId);

  const options: StripeElementsOptions = {
    clientSecret,
    fonts: [
      {
        cssSrc:
          "https://fonts.googleapis.com/css?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap",
      },
    ],
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#FFFFFF",
        colorDanger: "rgb(230, 35, 49)",
        fontFamily: "Public Sans, sans-serif",
        fontSizeSm: "1rem",
        spacingUnit: "0px",
        colorText: "black",
        colorTextSecondary: "black",
        borderRadius: "0px",
        focusBoxShadow: "0px 0px 0px 0px",
        focusOutline: "1px solid black",
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

  return isLoading ? (
    <p className="p-6 md:pl-12 md:py-12">Loading...</p>
  ) : (
    renderElements(options)
  );
}

export default Checkout;
