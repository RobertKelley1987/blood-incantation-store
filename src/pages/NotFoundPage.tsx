import LinkButton from "../components/LinkButton";

function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center grow gap-6 px-6 sm:px-12">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
        404
      </h1>
      <p className="text-center">
        We could not find the page you are looking for.
      </p>
      <LinkButton to="/" text="Return to Store" />
    </main>
  );
}

export default NotFoundPage;
