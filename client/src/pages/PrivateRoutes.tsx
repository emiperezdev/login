import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../stores/useAuth";

function PrivatePages() {
  const isAuth = useAuth((s) => s.isAuth);

  if (!isAuth) return <Navigate to="/login" />;

  return <Outlet />;
}

export default PrivatePages;
