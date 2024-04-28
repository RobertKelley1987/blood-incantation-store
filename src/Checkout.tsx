import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { CartContext } from "./context/CartContext";
import CheckoutForm from "./CheckoutForm";
import type { StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9"
);

function Checkout() {
  const { state } = useContext(CartContext);
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
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
  };

  useEffect(() => {
    const items = state.items.map((item) => {
      return { id: item.product.id, qty: item.qty };
    });

    const getClientSecret = async () => {
      const { data } = await axios.post("/create-payment-intent", {
        items: items,
      });
      setClientSecret(data.clientSecret);
    };

    // Only initiate pmt intent if cart has at least one item in it.
    // Otherwise redirect to home page.
    if (items.length < 1) {
      navigate("/");
    } else {
      getClientSecret();
    }
  }, []);

  const renderElements = (options: StripeElementsOptions) => {
    return clientSecret ? (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    ) : null;
  };

  return (
    <div>
      <header className="flex w-full p-6 border-b border-black justify-center">
        <div className="max-w-32">
          <img alt="Blood Incantation band logo" src="../imgs/logo.png" />
        </div>
      </header>
      <div className="grid grid-cols-2">
        {renderElements(options)}
        <div>
          {state.items.map((item) => {
            return (
              <div className="grid grid-cols-[100px_3fr_1fr] items-center gap-3 p-6">
                <img src={`../imgs/${item.product.imgs[0]}`} />
                <div>
                  <span className="block">
                    "{item.product.productName}" {item.product.productType}
                  </span>
                  {item.size && (
                    <span className="block">Size - {item.size}</span>
                  )}
                  <span>QTY - {item.qty}</span>
                </div>
                <span className="block">${item.product.price * item.qty}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
