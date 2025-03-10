import LinkButton from "../components/LinkButton";

function PmtErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center grow gap-6 px-6 sm:px-12">
      <div className="flex flex-col gap-1">
        <p className="text-center">
          We were unable to process your payment due to a server error.
        </p>
        <p className="text-center">Please try again later. </p>
      </div>
      <LinkButton to="/" text="Return to Store" />
    </main>
  );
}

export default PmtErrorPage;
