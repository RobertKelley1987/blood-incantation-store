import { createContext, useEffect, useReducer, useState } from "react";
import type { State, Action } from "../reducers/types";
import { cartReducer } from "../reducers/cartReducer";

type CartContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  isLoading: boolean;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalQty: 0,
    totalValue: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Update state with local cart
  useEffect(() => {
    const storedCartJSON = localStorage.getItem("blood-cart");
    if (storedCartJSON && state.items.length < 1) {
      const storedCart = JSON.parse(storedCartJSON);
      dispatch({ type: "SET_CART", items: storedCart });
    }
    setIsLoading(false);
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
