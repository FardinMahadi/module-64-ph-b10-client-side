import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaCommentAlt,
  FaBook,
  FaWallet,
  FaList,
  FaEnvelope,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-80 min-h-screen bg-[#D1A054] text-black">
        {/* Restaurant Logo & Name */}
        <Link
          to="/"
          className="uppercase font-cinzel flex flex-col items-center p-2 text-black mt-5"
        >
          <span className="text-2xl font-bold">Bistro Boss</span>
          <span className="text-xl">Restaurant</span>
        </Link>

        {/* User Dashboard Options */}
        <ul className="menu p-4">
          <li>
            <NavLink
              to="/dashboard/user-home"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaCommentAlt /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaBook /> My Booking
            </NavLink>
          </li>
        </ul>

        {/* Divider between Dashboard and Website Links */}
        <div className="divider"></div>

        {/* Website Navigation Links */}
        <ul className="menu p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaList /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaShoppingCart /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive
                    ? "bg-white bg-opacity-20 font-bold"
                    : "hover:bg-white hover:bg-opacity-20"
                }`
              }
            >
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
