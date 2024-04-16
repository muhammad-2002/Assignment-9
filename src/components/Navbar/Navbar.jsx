import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../Provider/Provider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "common-text font-bold text-sm border border-solid border-[#00afc6] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "common-text font-bold text-sm border border-solid border-[#00afc6] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          {" "}
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) =>
            isActive
              ? "common-text font-bold text-sm border border-solid border-[#00afc6] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Update-Profile
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "common-text font-bold text-sm border border-solid border-[#00afc6] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 font-work-sans fixed mx-auto z-10 px-3 md:px-16 shadow-md ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <a className="cursor-pointer text-2xl font-bold w-20">
          <img src="https://www.feefo.com/api/merchant-image/my-bali-logo.png"></img>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu-horizontal px-1 gap-6">{Links}</ul>
      </div>
      <div className="navbar-end gap-4 ">
        {user ? (
          <>
            <button
              onClick={() => logOutUser()}
              className="px-4 py-2 font-bold hover:bg-purple-400 text-white common-color rounded-sm"
            >
              log Out
            </button>
            <div className="relative group">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar`}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <div className="absolute top-16 px-1 -right-16 w-[230px]  hidden group-hover:block">
                {user?.displayName || "User Name not found"}
              </div>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 font-bold text-white common-color rounded-sm"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
