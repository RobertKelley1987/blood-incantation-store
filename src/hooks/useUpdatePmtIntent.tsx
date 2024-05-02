import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItem } from "../types";

// Hook to update the shipping cost of pmt intent in Stripe
export function useUpdatePmtIntent(
  cartItems: CartItem[],
  shippingCost: number,
  pmtIntentId: string
) {
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend
  const items = cartItems.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    // If no id is provided to look up the pmt intent, do nothing
    if (!pmtIntentId) {
      return;
    }

    const updatePmtIntent = async () => {
      const {
        data: { error },
      } = await axios.put("/pmt-intent", {
        pmtIntentId,
        items,
        shippingCost,
      });

      if (error) {
        navigate("/checkout/error");
      }
    };

    updatePmtIntent();
  }, [shippingCost]);
}
