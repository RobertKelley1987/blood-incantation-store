import { Link } from "react-router-dom";

function EmptyCartMessage() {
  return (
    <div>
      <p>You don't have any items in your cart :(</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default EmptyCartMessage;
