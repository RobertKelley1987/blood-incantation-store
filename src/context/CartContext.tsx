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

export const CartContext = createContext<CartContextType>({
  state: {
    items: [],
    totalQty: 0,
    totalValue: 0,
  },
  dispatch: () => null,
});

function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalQty: 0,
    totalValue: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
