import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
