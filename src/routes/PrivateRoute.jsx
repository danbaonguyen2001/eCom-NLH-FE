import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectLoginStatus } from "../features/auth/authSlice";
import { useAuthUser } from "../redux/hook/authUser";
const PrivateRoute = ({ children, onlyPublic = false, ...rest }) => {
  const user = useAuthUser();
  const isAuthenticated = useSelector(selectLoginStatus);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return onlyPublic ? (
          !user ? (
            children
          ) : (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
          )
        ) : user || isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
