import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const location = useLocation();
  const from = {
    pathname: location.pathname,
  };

  if (token) return children;
  return <Navigate to={"/login"} state={from} replace />;
};
