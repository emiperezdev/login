import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-sky-500 p-4">
      <ul className="flex justify-between text-white text-xl">
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
      </ul>
    </nav>
  );
}

export default NavBar;
