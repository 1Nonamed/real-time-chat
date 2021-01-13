import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import { addUser, findActiveUser } from "../../helpers/users";
import { types } from "../types/types";
import { startLoadingUsers, updateChatAndUserInfo } from "./chatActions";
import { finishLoading, startLoading } from "./ui";

// Sirve, preguntar login vacio al inicio y luego se llena
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await dispatch(startLoadingUsers());

        const { users } = getState().chat;
        const activeUser = await findActiveUser(users, user.uid);

        dispatch(login(activeUser));
        dispatch(finishLoading());
      })
      .catch((e) => {
        //Pendiente alerta
        alert(e.message);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (
  email,
  password,
  name,
  lastname
) => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        const userF = firebase.auth().currentUser;
        userF.updateProfile({
          displayName: name,
          photoURL:
            "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
        });
        const newUser = {
          uid: user.uid,
          firstname: name,
          lastname: lastname,
          email: email,
          photoUrl:
            "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
        };
        await addUser(newUser);
        await dispatch(startLoadingUsers());

        const { users } = getState().chat;
        const activeUser = await findActiveUser(users, newUser.uid);

        dispatch(login(activeUser));
        updateChatAndUserInfo();
        dispatch(finishLoading());
      })
      .catch((e) => {
        alert(e.message);
      });
  };
};

//Login Google
export const startGoogleLogin = () => {
  return (dispatch, getState) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(async ({ user: G_User }) => {
        await dispatch(startLoadingUsers());

        const { users } = getState().chat;
        const user = await findActiveUser(users, G_User.uid);

        // If user is new, send a POST req and create the user
        if (user === undefined) {
          const userFullName = G_User.displayName.split(" ", 2);
          const newGoogleUser = {
            uid: G_User.uid,
            firstname: userFullName[0],
            lastname: userFullName[1],
            email: G_User.email,
            photoUrl: G_User.photoURL,
          };
          await addUser(newGoogleUser);
          await dispatch(startLoadingUsers());

          const { users } = getState().chat;
          const activeUser = await findActiveUser(users, G_User.uid);

          dispatch(login(activeUser));
          dispatch(finishLoading());

          // If the user already exists, just Sign in
        } else {
          const activeUser = await findActiveUser(users, user.uid);
          dispatch(login(activeUser));
          dispatch(finishLoading());
        }
      })
      .catch((e) => {
        //Pendiente alerta
        console.log(e);
        dispatch(finishLoading());
      });
  };
};

export const login = (user) => ({
  type: types.login,
  user,
});

//Logout FIREBASE
export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

//Logout REDUX STORE
export const logout = () => ({
  type: types.logout,
});
