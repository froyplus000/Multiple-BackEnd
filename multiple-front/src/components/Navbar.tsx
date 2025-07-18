import { NavLink } from "react-router";
function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow-sm w-screen py-5">
      <div className="m-auto w-[80dvw] flex justify-between items-center">
        <NavLink
          to={"/"}
          className="text-4xl font-bold hover:text-amber-600 transition"
        >
          Multiple
        </NavLink>
        <div className="menu menu-horizontal gap-5">
          <NavLink className="btn" to={"/about"}>
            About
          </NavLink>
          <NavLink className="btn" to={"/signUp"}>
            Sign Up
          </NavLink>
          <NavLink className="btn" to={"/logIn"}>
            Log In
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
