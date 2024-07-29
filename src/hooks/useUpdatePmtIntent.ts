import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShippingContext } from "../context/ShippingContext";
import { useCart } from "./useCart";
import { pmtIntents } from "../services/pmt-intents";

// Hook to update the shipping cost of pmt intent in Stripe.
// Payment intent id must be provided as arg.
export function useUpdatePmtIntent(pmtIntentId: string) {
  const { items } = useCart().state;
  const shipping = useContext(ShippingContext).shippingMethod.cost;
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend.
  const cartItems = items.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    // If no id is provided to look up the pmt intent, do nothing.
    if (!pmtIntentId) {
      return;
    }

    const updatePmtIntent = async () => {
      try {
        await pmtIntents.update(pmtIntentId, cartItems, shipping);
      } catch (error) {
        navigate("/checkout/error");
      }
    };

    updatePmtIntent();
  }, [shipping]);
}
