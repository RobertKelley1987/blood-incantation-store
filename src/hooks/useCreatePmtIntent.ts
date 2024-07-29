import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShippingContext } from "../context/ShippingContext";
import { useCart } from "../hooks/useCart";
import { pmtIntents } from "../services/pmt-intents";

// Hook to create a pmt intent and generate the client secret per Stripe docs.
// Return client secret, as well as pmt intent id required to update shipping
// cost in Stripe.
export function useCreatePmtIntent() {
  const { items } = useCart().state;
  const shipping = useContext(ShippingContext).shippingMethod.cost;
  const [clientSecret, setClientSecret] = useState("");
  const [pmtIntentId, setPmtIntentId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend
  const cartItems = items.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    const createPmtIntent = async () => {
      try {
        const { clientSecret, pmtIntentId } = await pmtIntents.create(
          cartItems,
          shipping
        );
        setClientSecret(clientSecret);
        setPmtIntentId(pmtIntentId);
        setIsLoading(false);
      } catch (error) {
        navigate("/checkout/pmt-error", { replace: true });
      }
    };

    // Only initiate pmt intent if cart has at least one item in it,
    // otherwise redirect to home page.
    if (cartItems.length < 1) {
      navigate("/");
    } else {
      createPmtIntent();
    }
  }, []);

  return { clientSecret, pmtIntentId, isLoading };
}
