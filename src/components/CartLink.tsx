import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartSVG from "./svgs/CartSVG";

// Cart link with bag svg and number of cart items
type CartLinkProps = {
  className?: string;
};

function CartLink({ className }: CartLinkProps) {
  const { totalQty } = useCart().state;

  // Add additional class names
  let classNames = "flex gap-2 hover:text-blood";
  if (className) {
    classNames += ` ${className}`;
  }

  // Return styled cart link
  return (
    <Link to="/cart" className={classNames}>
      <CartSVG />
      {totalQty > 0 && totalQty}
    </Link>
  );
}

export default CartLink;
