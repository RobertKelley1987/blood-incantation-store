type LoadingProps = {
  isLoading: boolean;
  children: React.ReactElement;
};

function Loading({ isLoading, children }: LoadingProps) {
  return isLoading ? <span>Loading...</span> : children;
}

export default Loading;
