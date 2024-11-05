import { FC } from "react";

interface LoadingPageProps {}

const LoadingPage: FC<LoadingPageProps> = () => {
  return <span className="text-3xl m-auto">Loading...</span>;
};

export default LoadingPage;
