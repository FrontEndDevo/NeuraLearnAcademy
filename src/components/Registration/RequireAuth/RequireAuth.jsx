/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const userAuth = useSelector((state) => state.userAuth.isAuthenticated);

  const location = useLocation();
  return userAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
