import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItem } from "../types";

// Hook to create a pmt intent and generate the client secret per Stripe docs.
// Pmt intent id is tracked so the intent amount can be updated with
// shipping cost if necessary.
export function useCreatePmtIntent(
  cartItems: CartItem[],
  shippingCost: number
) {
  const [clientSecret, setClientSecret] = useState("");
  const [pmtIntentId, setPmtIntentId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend
  const items = cartItems.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await axios.post("/pmt-intent", {
        items,
        shippingCost,
      });

      const { error, clientSecret, pmtIntentId } = data;

      if (error) {
        setError(error.message);
      } else {
        setClientSecret(clientSecret);
        setPmtIntentId(pmtIntentId);
      }
    };

    // Only initiate pmt intent if cart has at least one item in it,
    // otherwise redirect to home page.
    if (items.length < 1) {
      navigate("/");
    } else {
      getClientSecret();
    }
  }, []);

  return { clientSecret, pmtIntentId, createPmtIntentError: error };
}
