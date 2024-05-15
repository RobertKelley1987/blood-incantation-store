import { useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

// Hook to save cart to local storage as its contents update.
export function useCartStorage() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalQty: 0,
    totalValue: 0,
  });

  // Fetch cart from local storage if one exists
  useEffect(() => {
    let storedCart;

    const storedCartJSON = localStorage.getItem("blood-cart");

    if (storedCartJSON) {
      storedCart = JSON.parse(storedCartJSON);
      dispatch({ type: "SET_CART", items: storedCart });
    }

    setIsLoading(false);
  }, []);

  // Update cart in local storage when items are updated
  useEffect(() => {
    const cart = JSON.stringify(state.items);
    localStorage.setItem("blood-cart", cart);
  }, [state.items]);

  return { state, dispatch, isLoading };
}
