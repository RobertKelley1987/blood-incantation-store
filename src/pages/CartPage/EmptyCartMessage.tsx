import LinkButton from "../../components/LinkButton";

function EmptyCartMessage() {
  return (
    <div className="flex flex-col items-center gap-9">
      <p className="text-center">You don't have any items in your cart.</p>
      <LinkButton path="/" text="Continue Shopping" className="w-max-content" />
    </div>
  );
}

export default EmptyCartMessage;
