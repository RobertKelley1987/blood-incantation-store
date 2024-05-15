import { useDropdownWithResize } from "../../hooks/useDropdownWithResize";
import StripeCheckout from "./StripeCheckout";
import OrderSummary from "./OrderSummary";
import ChevronSVG from "../../svgs/ChevronSVG";

function CheckoutPage() {
  const { dropdownOpen, setDropdownOpen } = useDropdownWithResize();

  const handleClick = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
      <StripeCheckout />
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
  );
}

export default CheckoutPage;
