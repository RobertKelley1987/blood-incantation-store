import { Link, Outlet } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Link to="/checkout/contact">Contact</Link>
      <Link to="/checkout/shipping">Shipping</Link>
      <header>Checkout Page</header>
      <Outlet />
    </div>
  );
}

export default Checkout;
