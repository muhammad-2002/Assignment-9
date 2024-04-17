import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider/Provider";
import "./index.css";
import router from "./routes/Router";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>

    <ToastContainer />
  </React.StrictMode>
);
