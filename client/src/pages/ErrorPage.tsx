import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-3">Ooops...</h1>
        <p className="text-2xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist :("
            : "An unexpected error ocurred."}
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
