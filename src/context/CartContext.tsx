import { createContext, useReducer } from "react";
import type { State, Action } from "../reducers/types";
import { cartReducer } from "../reducers/cartReducer";

type CartContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
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

  // Update state with local cart
  const storedCartJSON = localStorage.getItem("blood-cart");
  if (storedCartJSON && state.items.length < 1) {
    const storedCart = JSON.parse(storedCartJSON);
    dispatch({ type: "SET_CART", items: storedCart });
  }

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
