import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import PrivatePages from "./pages/PrivateRoutes";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        element: <PrivatePages />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
    ],
  },
]);

export default routes;
