import Axios from "axios";
import { firebase } from "../firebase/firebase-config";

const usersUrl = "https://academlo-whats.herokuapp.com/api/v1/users/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

export const getUsers = async () => {
  const res = await Axios.get(usersUrl);
  return res;
};

export const addUser = async (user) => {
  const { uid, firstname, lastname, email, photoUrl } = user;
  const postData = {
    _id: "",
    firstName: `${firstname}`,
    lastName: `${lastname}`,
    email: `${email}`,
    username:
      `${firstname}${lastname}` + Math.floor(Math.random() * (9999 - 0) + 0),
    photoUrl: `${photoUrl}`,
    uid: `${uid}`,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await Axios.post(usersUrl, postData, axiosConfig);

  return res;
};

export const deleteUser = async (userId) => {
  const user = firebase.auth().currentUser;
  user
    .delete()
    .then(function () {
      console.log("user deleted succesfully");
    })
    .catch(function (error) {
      console.log(error);
    });
  const res = await Axios.delete(usersUrl + `${userId}`);
  return res;
};

export const findActiveUser = async (users, uid) => {
  return await users.find((user) => user.uid === uid);
};
