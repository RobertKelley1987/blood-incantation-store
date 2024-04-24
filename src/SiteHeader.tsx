import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import Nav from "./Nav";
import Logo from "./Logo";
import ShoppingCartSVG from "./ShoppingCartSVG";

function SiteHeader() {
  const { state } = useContext(CartContext);

  return (
    <header className="flex w-full flex-col items-center gap-12">
      <Link to="/cart" className="flex self-end gap-2 pt-6 pr-6 font-sans">
        <ShoppingCartSVG />
        {/* TODO: This num needs to be total items in cart, not a static zero. */}
        <span>{state.totalQty}</span>
      </Link>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
}

export default SiteHeader;
