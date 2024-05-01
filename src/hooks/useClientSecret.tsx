import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItem } from "../types";

export function useClientSecret(cartItems: CartItem[]) {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const items = cartItems.map((item) => {
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

  return { clientSecret };
}
