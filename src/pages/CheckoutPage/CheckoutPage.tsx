import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { SHIPPING_OPTIONS } from "../../constants";
import Checkout from "./Checkout";
import OrderSummary from "./OrderSummary";

function CheckoutPage() {
  const { state } = useContext(CartContext);
  const [shippingMethod, setShippingMethod] = useState(SHIPPING_OPTIONS[0]);

  return (
    <div className="flex flex-col items-center gap-12 mb-12">
      <header className="flex w-full p-6 bg-black justify-center">
        <div className="max-w-32">
          <img alt="Blood Incantation band logo" src="../imgs/logo-white.png" />
        </div>
      </header>
      <div className="grid grid-cols-2 relative w-full max-w-screen-lg px-6 sm:px-12 gap-12">
        <Checkout
          cartItems={state.items}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
        />
        <OrderSummary
          items={state.items}
          totalValue={state.totalValue}
          shippingCost={shippingMethod.cost}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;
