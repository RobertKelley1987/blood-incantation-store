function AppErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center grow gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-center">
          We are experiencing some technical difficulties.
        </p>
        <p className="text-center">Please try us again later.</p>
      </div>
    </main>
  );
}

export default AppErrorPage;
