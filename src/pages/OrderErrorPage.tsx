import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

function OrderErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center grow gap-6 px-6 sm:px-12">
      <div className="flex flex-col gap-1">
        <p className="text-center">
          We received your payment but there was an error processing your order.
        </p>
        <p className="text-center">
          Please{" "}
          <Link to="/contact" className="underline hover:text-blood">
            contact us
          </Link>{" "}
          if you do not receive a refund in 2 to 3 business days.
        </p>
      </div>
      <LinkButton to="/" text="Return to Store" />
    </main>
  );
}

export default OrderErrorPage;
