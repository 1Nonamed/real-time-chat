import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { firebase } from "../firebase/firebase-config";
import { login } from "../redux/actions/authActions";
import { updateChatAndUserInfo } from "../redux/actions/chatActions";
import { ChatRouter } from "./ChatRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(
          login(
            (user = {
              _id: "",
              firstName: user.displayName,
              lastName: "",
              email: user.email,
              username: "",
              photoUrl: user.photoURL,
              uid: user.uid,
            })
          )
        );
        dispatch(updateChatAndUserInfo());
        setisLogged(true);
      } else {
        setisLogged(false);
      }
      setIsLoading(false);
    });
  }, [dispatch]);

  // VALIDATE UID EXISTS
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLogged={isLogged}
          />
          <PrivateRoute path="/" component={ChatRouter} isLogged={isLogged} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
