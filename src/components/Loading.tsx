type LoadingProps = {
  isLoading: boolean;
  children: React.ReactElement;
};

function Loading({ isLoading, children }: LoadingProps) {
  const renderLoading = () => {
    return (
      <div className="text-center w-full basis-full grow shrink-0 mt-12">
        Loading...
      </div>
    );
  };
  return isLoading ? renderLoading() : children;
}

export default Loading;
