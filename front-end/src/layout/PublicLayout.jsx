// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute =  ({ children }) => {
 cookieStore.get("accessToken")
 
return children;
  // return isLoggedIn == undefined ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
