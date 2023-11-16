import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import MainMenu from "../pages/Menu/MainMenu/MainMenu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRouter from "../Router/PrivateRouter"
import AdminRouter from "./AdminRouter";
import AddItems from "../pages/Dashboard/AddItems/AddItems";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <MainMenu />
      },
      {
        path: "/shop/:category",
        element: <Shop />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <SingUp />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    children: [
      {
        path: "userHome",
        element: <UserHome />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "allUsers",
        element: <AdminRouter><AllUsers /></AdminRouter>
      },
      {
        path: "addItems",
        element: <AdminRouter><AddItems /></AdminRouter>
      },
    ]
  }
]);