import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import PrivatePages from "./pages/PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        element: <PrivatePages />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
    ],
  },
]);

export default routes;
