import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
