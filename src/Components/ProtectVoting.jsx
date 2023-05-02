import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectVoting = ({ loginVoter, children }) => {
  if (!loginVoter) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectVoting;
