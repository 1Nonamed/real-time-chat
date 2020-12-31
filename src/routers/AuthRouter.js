import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <Route>
      <Switch>
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Route>
  );
};
