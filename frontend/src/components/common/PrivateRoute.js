import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Make a fetch request to check if user is authenticated
        const response = await fetch("/api/auth/check", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          // If not authenticated, navigate to the login page
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Render nothing until authentication is checked
  }

  // If authenticated, render the specified component
  return <Component {...rest} />;
};

export default PrivateRoute;
