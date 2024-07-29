function AppErrorPage() {
  return (
    <main className="h-[100dvh] flex flex-col justify-center items-center grow gap-6 px-6 sm:px-12">
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
