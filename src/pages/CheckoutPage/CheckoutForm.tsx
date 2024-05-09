import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LinkAuthenticationElement,
  AddressElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CartContext } from "../../context/CartContext";
import { orders } from "../../services/orders";
import ShippingMethod from "./ShippingMethod";
import type { ShippingAddress } from "../../types";

function CheckoutForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);
  const { items } = useContext(CartContext).state;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Return if stripe components are not ready
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    // Process payment
    const { error: pmtErr } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    // Display any payment errors
    if (pmtErr) {
      if (pmtErr.type === "card_error" || pmtErr.type === "validation_error") {
        setError(pmtErr.message || "Payment failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    } else {
      // Require contact info from Stripe elements to create order in db.
      if (!email || !shippingAddress || !items.length) {
        throw new Error(
          "Contact info from stripe form must be saved in component state."
        );
      }

      // Create order in server for processing.
      const { data } = await orders.create(email, shippingAddress, items);
      if (data.error) {
        // Notify user of server error
        navigate("/checkout/error");
      } else {
        // Clear cart in local storage and display order confirmation
        localStorage.removeItem("blood-cart");
        navigate("/checkout/success");
      }
    }

    setIsLoading(false);
  };

  const renderForm = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className="order-2 md:order-1 w-full flex flex-col gap-6 p-6 md:pl-12 md:pr-6 md:pt-12"
      >
        <section>
          <h2 className="mb-3 font-semibold uppercase">Contact</h2>
          <LinkAuthenticationElement
            onChange={(e) => setEmail(e.value.email)}
          />
        </section>
        <section>
          <h2 className="mb-3 font-semibold uppercase">Shipping Address</h2>
          <AddressElement
            onChange={(e) => setShippingAddress(e.value)}
            options={{ mode: "shipping" }}
          />
        </section>
        <ShippingMethod />
        <section>
          <h2 className="mb-3 font-semibold uppercase">Payment</h2>
          <PaymentElement />
        </section>
        <section>
          <button
            disabled={isLoading || !stripe || !elements}
            type="submit"
            className="w-full border border-black hover:bg-blood uppercase px-6 py-3"
          >
            {isLoading ? "Processing..." : "Confirm Order"}
          </button>
        </section>
        {error && (
          <span className="font-semibold text-blood">ERROR: {error}</span>
        )}
      </form>
    );
  };

  return renderForm();
}

export default CheckoutForm;
