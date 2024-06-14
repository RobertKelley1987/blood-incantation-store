import { Outlet } from "react-router-dom";
import ShippingContextProvider from "../../context/ShippingContext";
import CheckoutHeader from "./Header";

function Checkout() {
  return (
    <ShippingContextProvider>
      <div className="flex flex-col items-center items-center min-h-screen">
        <CheckoutHeader />
        <Outlet />
      </div>
    </ShippingContextProvider>
  );
}

export default Checkout;
