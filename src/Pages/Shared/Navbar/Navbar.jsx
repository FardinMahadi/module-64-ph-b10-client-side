import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log out successfull",
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : ""
          }
        >
          Order Food
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : ""
          }
        >
          <Badge color="secondary" badgeContent={cart.length} showZero>
            <FaShoppingCart className="mr-2" />
          </Badge>
        </NavLink>
      </li>

      {user ? (
        <>
          <li onClick={handleLogOut}>
            <NavLink>Log Out</NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sm:fixed z-50 sm:bg-black sm:bg-opacity-30 sm:text-white max-w-screen-xl">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <NavLink
            to="/"
            className="uppercase font-cinzel flex flex-col items-center p-2"
          >
            <span className="text-2xl font-bold">Bistro Boss</span>
            <span className="text-xl">Restaurant</span>
          </NavLink>
        </div>
        {/* large screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
