import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import ShippingContextProvider, {
  ShippingContext,
} from "../../context/ShippingContext";
import { useDropdownStatus } from "../../hooks/useDropdownStatus";
import Checkout from "./Checkout";
import OrderSummary from "./OrderSummary";
import ChevronSVG from "../../svgs/ChevronSVG";

function CheckoutPage() {
  const { totalValue } = useContext(CartContext).state;
  const shipping = useContext(ShippingContext).shippingMethod.cost;
  const { dropdownOpen, setDropdownOpen } = useDropdownStatus();

  const handleClick = () => setDropdownOpen((prev) => !prev);

  return (
    <ShippingContextProvider>
      <div className="flex flex-col items-center gap-6 mb-12">
        <header className="flex w-full p-6 bg-black justify-center">
          <div className="max-w-32">
            <img
              alt="Blood Incantation band logo"
              src="../imgs/logo-white.png"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
          <Checkout />
          <div className="order-1 md:order-2">
            <div
              onClick={handleClick}
              className="w-full max-w-screen-lg p-6 md:px-12 flex md:hidden border-b border-black justify-between hover:cursor-pointer"
            >
              <div className="flex gap-1">
                <ChevronSVG className={dropdownOpen ? "rotate-180" : ""} />
                <h2>Order Summary</h2>
              </div>
            </div>
            {dropdownOpen && <OrderSummary />}
          </div>
        </div>
      </div>
    </ShippingContextProvider>
  );
}

export default CheckoutPage;
