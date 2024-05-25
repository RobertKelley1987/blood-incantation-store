import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pmtIntents } from "../services/pmt-intents";
import { CartItem } from "../types";

// Hook to create a pmt intent and generate the client secret per Stripe docs.
// Return client secret, as well as pmt intent id required to update shipping
// cost in Stripe.
// Cart items and shipping cost of customer order required as args.
export function useCreatePmtIntent(
  cartItems: CartItem[],
  shippingCost: number
) {
  const [clientSecret, setClientSecret] = useState("");
  const [pmtIntentId, setPmtIntentId] = useState("");
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend
  const items = cartItems.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    const createPmtIntent = async () => {
      const { data } = await pmtIntents.create(items, shippingCost);
      const { error, clientSecret, pmtIntentId } = data;

      if (error) {
        navigate("/checkout/pmt-error");
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
      createPmtIntent();
    }
  }, []);

  return { clientSecret, pmtIntentId };
}
