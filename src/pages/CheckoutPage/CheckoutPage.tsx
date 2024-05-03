import ShippingContextProvider from "../../context/ShippingContext";
import { useDropdownStatus } from "../../hooks/useDropdownStatus";
import Checkout from "./Checkout";
import OrderSummary from "./OrderSummary";
import ChevronSVG from "../../svgs/ChevronSVG";
import CheckoutHeader from "./CheckoutHeader";

function CheckoutPage() {
  const { dropdownOpen, setDropdownOpen } = useDropdownStatus();

  const handleClick = () => setDropdownOpen((prev) => !prev);

  return (
    <ShippingContextProvider>
      <div className="flex flex-col items-center mb-12 justify-between items-center">
        <CheckoutHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
          <Checkout />
          <div className="order-1 md:order-2">
            <div
              onClick={handleClick}
              className="w-full max-w-screen-lg p-6 md:px-12 flex md:hidden border-b border-black justify-between hover:cursor-pointer hover:text-blood"
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
