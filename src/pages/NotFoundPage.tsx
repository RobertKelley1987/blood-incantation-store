import LinkButton from "../components/LinkButton";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center grow gap-6">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
        404
      </h1>
      <p className="text-center">
        We could not find the page you are looking for.
      </p>
      <LinkButton to="/" text="Return to Store" />
    </div>
  );
}

export default NotFoundPage;
