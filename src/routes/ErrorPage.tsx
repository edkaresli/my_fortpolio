import { useRouteError } from "react-router-dom";

interface ErrorObjectInfo {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorObjectInfo;
  console.error(error);
  
  return (
    <div id="error-page" className="flex flex-col items-center justify-center w-full h-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;