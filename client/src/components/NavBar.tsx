import { Link } from "react-router-dom";
import useAuth from "../stores/useAuth";
import useUserStore from "../stores/useUserStore";
import UserDto from "../entities/UserDto";

function NavBar() {
  const isAuth = useAuth((s) => s.isAuth);
  const setAuth = useAuth(s => s.setAuth);
  const setUser = useUserStore(s => s.setUser);

  const handleLogout = () => {
    setAuth(false);
    setUser({} as UserDto);
  }

  return (
    <nav className="bg-sky-500 p-4">
      <ul className="flex justify-between text-white text-xl">
        {isAuth ? (
          <>
            <li className="hover:text-slate-200">
              <Link to="/">Home</Link>
            </li>
            <div className="flex gap-4">
              <li className="hover:text-slate-200">
                <Link onClick={handleLogout} to="/">Logout</Link>
              </li>
            </div>
          </>
        ) : (
          <>
            <li className="hover:text-slate-200">
              <Link to="/">Home</Link>
            </li>
            <div className="flex gap-4">
              <li className="hover:text-slate-200">
                <Link to="/register">Register</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link to="/login">Login</Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
