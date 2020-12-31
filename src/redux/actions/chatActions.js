import { createConversation } from "../../helpers/conversations";
import { findActiveUser, getUsers } from "../../helpers/users";
import { login } from "../actions/authActions";
import { types } from "../types/types";

export const startLoadingUsers = () => {
  return async (dispatch) => {
    const users = await getUsers();
    const { data } = users;
    dispatch(setUsers(data));
  };
};
export const setUsers = (users) => ({
  type: types.chatLoadUsers,
  payload: users,
});

export const updateChatAndUserInfo = () => {
  return async (dispatch, getState) => {
    await dispatch(startLoadingUsers());

    const { users } = getState().chat;
    const { user } = getState().auth;
    const activeUser = await findActiveUser(users, user.uid);

    dispatch(login(activeUser));
  };
};

export const startLoadingActiveConversation = (userId, activeUserId) => {
  return async (dispatch) => {
    const { data } = await createConversation(userId, activeUserId);
    console.log(data);
    dispatch(setActiveConversation(data));
  };
};

export const setActiveConversation = (activeConvesation) => ({
  type: types.chatLoadActiveConversation,
  activeConvesation,
});
