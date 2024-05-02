import { useState } from "react";
import {
  LinkAuthenticationElement,
  AddressElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ShippingMethod from "./ShippingMethod";

type ShippingAddress = {
  name: string;
  address: Address;
  phone?: string;
};

type Address = {
  city: string;
  country: string;
  line1: string;
  line2: string | null;
  state: string;
  postal_code: string;
};

const paddingStyles = "p-6 md:pl-12 md:pr-6 md:pt-12";

function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setError(error.message || "Payment failed.");
    } else {
      setError("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const renderForm = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className={`${paddingStyles} order-2 md:order-1 w-full flex flex-col gap-6`}
      >
        <div>
          <h2 className="mb-3 font-semibold uppercase">Contact</h2>
          <LinkAuthenticationElement
            onChange={(e) => setEmail(e.value.email)}
          />
        </div>
        <div>
          <h2 className="mb-3 font-semibold uppercase">Shipping Address</h2>
          <AddressElement
            onChange={(e) => setShippingAddress(e.value)}
            options={{ mode: "shipping" }}
          />
        </div>
        <ShippingMethod />
        <div>
          <h2 className="mb-3 font-semibold uppercase">Payment</h2>
          <PaymentElement />
        </div>
        <button
          disabled={isLoading || !stripe || !elements}
          type="submit"
          className="border border-black hover:bg-blood uppercase px-6 py-3"
        >
          {isLoading ? "Processing..." : "Confirm Order"}
        </button>
        {error && <span className="text-blood">ERROR: {error}</span>}
      </form>
    );
  };

  return renderForm();
}

export default CheckoutForm;
