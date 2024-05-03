import LinkButton from "../../components/LinkButton";

function EmptyCartMessage() {
  return (
    <div className="flex flex-col items-center gap-9">
      <p className="text-center">You don't have any items in your cart.</p>
      <LinkButton to="/" text="Continue Shopping" grow={false} />
    </div>
  );
}

export default EmptyCartMessage;
