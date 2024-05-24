import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

// Hook to update app's cart to reflect a locally stored cart if one exists
export function useLocalCart() {
  const { dispatch } = useContext(CartContext);

  // Set cart state to reflect locally stored cart if one exists
  useEffect(() => {
    const storedCartJSON = localStorage.getItem("blood-cart");
    if (storedCartJSON) {
      const storedCart = JSON.parse(storedCartJSON);
      dispatch({ type: "SET_CART", items: storedCart });
    }
  }, []);
}
