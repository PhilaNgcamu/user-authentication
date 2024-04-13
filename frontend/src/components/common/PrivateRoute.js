import React from "react";
import { Route, NavLink } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <NavLink to="/login" />
      }
    />
  );
};

export default PrivateRoute;
