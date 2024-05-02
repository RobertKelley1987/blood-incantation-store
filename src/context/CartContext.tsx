import { createContext } from "react";
import type { State, Action } from "../reducers/types";
import { useCartStorage } from "../hooks/useCartStorage";

type CartContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  isLoading: boolean;
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
  isLoading: true,
});

function CartContextProvider({ children }: CartContextProviderProps) {
  const { state, dispatch, isLoading } = useCartStorage();

  return (
    <CartContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
