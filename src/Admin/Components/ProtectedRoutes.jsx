import React from "react";
import { isJwtExpired } from "jwt-check-expiration";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    const token = JSON.parse(user).token;
    if (isJwtExpired(token)) {
      localStorage.removeItem("user");
      return <Navigate to="/elcom" replace />;
    }
  }

  if (!user) {
    return <Navigate to="/elcom" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
