import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Hook to use cart context and throws error if accessed outside of
// context provider.
export function useCart() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error(
      "Cannot access CartContext outside of CartContextProvider."
    );

  return cartContext;
}
