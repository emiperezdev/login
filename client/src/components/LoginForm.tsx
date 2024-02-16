import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <section className="h-[calc(100vh-100px)] flex items-center justify-center">
      <form className="m-5 border p-5 max-w-md rounded-md drop-shadow">
        <h1 className="text-4xl font-bold text-center mb-5">Login</h1>
        <input
          className="w-full bg-slate-100 p-3 my-3 border rounded-lg"
          type="email"
          placeholder="Email"
        />

        <input
          className="w-full bg-slate-100 p-3 my-4 border rounded-lg"
          type="password"
          placeholder="Password"
        />

        <div className="flex justify-center mt-3">
          <button className="p-3 bg-sky-500 text-white rounded-lg hover:text-slate-200 text-lg">
            Login
          </button>
        </div>

        <p className="mt-5 text-slate-600">
          Don't have an account?{" "}
          <Link className="text-sky-600 hover:text-sky-800" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
