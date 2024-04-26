import LinkButton from "../../LinkButton";

function EmptyCartMessage() {
  return (
    <div className="flex flex-col gap-9">
      <p>You don't have any items in your cart.</p>
      <LinkButton path="/" text="Continue Shopping" />
    </div>
  );
}

export default EmptyCartMessage;
