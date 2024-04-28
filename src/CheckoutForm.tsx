import { AddressElement, PaymentElement } from "@stripe/react-stripe-js";

function CheckoutForm() {
  return (
    <form className="w-full flex flex-col p-6 gap-6">
      <div>
        <h2 className="mb-3 font-semibold uppercase">Shipping</h2>
        <AddressElement options={{ mode: "shipping" }} />
      </div>
      <div>
        <h2 className="mb-3 font-semibold uppercase">Payment</h2>
        <PaymentElement />
      </div>
      <button
        type="submit"
        className="border border-black hover:bg-blood uppercase px-6 py-3"
      >
        Submit
      </button>
    </form>
  );
}

export default CheckoutForm;
