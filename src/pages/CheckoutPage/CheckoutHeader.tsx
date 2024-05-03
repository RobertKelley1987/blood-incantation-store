import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import CartLink from "../../components/CartLink";

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
