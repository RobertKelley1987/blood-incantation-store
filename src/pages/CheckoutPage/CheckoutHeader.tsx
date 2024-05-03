import { Link } from "react-router-dom";
import Logo from "../../Logo";
import CartLink from "../../CartLink";

function CheckoutHeader() {
  return (
    <header className="flex justify-center w-full bg-black ">
      <div className="flex w-full justify-between items-center max-w-screen-lg p-6 md:px-12">
        <Link to="/">
          <Logo className="max-w-32" color="white" />
        </Link>
        <CartLink className="text-white" />
      </div>
    </header>
  );
}

export default CheckoutHeader;
