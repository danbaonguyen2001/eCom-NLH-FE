import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthUser } from "../redux/hook/authUser";
const PrivateRoute = ({ children, onlyPublic = false, ...rest }) => {
  const user = useAuthUser();
  console.log(user);
  
  console.log(rest.location);
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
        ) : user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
