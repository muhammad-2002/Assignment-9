import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/NoData/MainLayout/Mainlayout";
import NoData from "../components/NoData/NoData";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import StateDetails from "../components/Slider/StateDetails/StateDetails";
import UpdateProfiles from "../components/UpdateProfile/UpdateProfile";
import AdminInfo from "../pages/Admin info/AdminInfo";
import ContactUs from "../pages/ContactUS/ContactUs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "./../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Mainlayout></Mainlayout>,
    errorElement: <NoData></NoData>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/state-Details/:id",
        element: (
          <PrivateRoute>
            <StateDetails></StateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfiles></UpdateProfiles>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminInfo></AdminInfo>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
