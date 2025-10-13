// src/pages/logout.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();  // For programmatic navigation

  useEffect(() => {
    // Remove authentication data (e.g., clear localStorage or cookies)
    localStorage.removeItem("loggedIn");  // Example: clearing the logged-in state
    // Redirect to login page
    navigate("/");
  }, [navigate]);

  return <div>Logging out...</div>;  // Optionally display a loading state while redirecting
};

export default Logout;
