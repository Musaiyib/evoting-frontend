import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectVoting = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectVoting;
