import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../stores/useAuth";

function PrivatePages() {
  const isAuth = useAuth((s) => s.isAuth);

  setTimeout(() => {
    if (!isAuth) return <Navigate to="/login" />;
  }, 1000);

  return <Outlet />;
}

export default PrivatePages;
