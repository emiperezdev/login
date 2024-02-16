import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const routes = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: 'profile', element: <ProfilePage />}
]);

export default routes;