import LinkButton from "../../components/LinkButton";

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center gap-9">
      <p className="text-center">
        Your message has been sent! You should hear back from us in 2 to 3
        business days.
      </p>
      <LinkButton to="/" text="Continue Shopping" grow={false} />
    </div>
  );
}

export default SuccessMessage;
