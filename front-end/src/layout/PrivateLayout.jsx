// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("accessToken");

  return isLoggedIn != undefined ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
