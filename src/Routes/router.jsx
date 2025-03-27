import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin only routes
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
