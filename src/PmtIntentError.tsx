import { Link } from "react-router-dom";

function PmtIntentError() {
  return (
    <div>
      <span>
        We were unable to process your payment due to a server error. Please try
        again later.
      </span>
      <Link to="/cart">Return to cart</Link>
    </div>
  );
}

export default PmtIntentError;
