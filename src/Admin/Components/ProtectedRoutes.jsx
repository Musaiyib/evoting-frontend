import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/elcom" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
