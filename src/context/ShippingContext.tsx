import { useState, createContext } from "react";
import { SHIPPING_OPTIONS } from "../constants";
import type { ShippingOption } from "../types";

type ShippingContextType = {
  shippingMethod: ShippingOption;
  setShippingMethod: React.Dispatch<React.SetStateAction<ShippingOption>>;
};

type ShippingContextProviderProps = {
  children: React.ReactNode;
};

export const ShippingContext = createContext<ShippingContextType>({
  shippingMethod: SHIPPING_OPTIONS[0],
  setShippingMethod: () => null,
});

function ShippingContextProvider({ children }: ShippingContextProviderProps) {
  const [shippingMethod, setShippingMethod] = useState(SHIPPING_OPTIONS[0]);

  return (
    <ShippingContext.Provider value={{ shippingMethod, setShippingMethod }}>
      {children}
    </ShippingContext.Provider>
  );
}

export default ShippingContextProvider;
