import LinkButton from "../components/LinkButton";

function OrderConfirmationPage() {
  return (
    <div className="flex flex-col justify-center items-center grow gap-6">
      <div>
        <p className="text-center">Thank you for your order!</p>
        <p className="text-center">
          You should receive a confirmation email shortly.
        </p>
      </div>
      <LinkButton to="/" text="Return to Store" />
    </div>
  );
}

export default OrderConfirmationPage;
