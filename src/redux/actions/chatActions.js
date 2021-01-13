import { getConversations } from "../../helpers/conversations";
import { getMessages } from "../../helpers/messages";
import { findActiveUser, getUsers } from "../../helpers/users";
import { login } from "../actions/authActions";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

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

// MOVER DE AQUÍ CREO
export const updateChatAndUserInfo = () => {
  return async (dispatch, getState) => {
    await dispatch(startLoadingUsers());

    const { users } = getState().chat;
    const { user } = getState().auth;
    const activeUser = await findActiveUser(users, user.uid);
    dispatch(login(activeUser));
  };
};

export const startLoadingConversations = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const conversations = await getConversations();
    dispatch(finishLoading());

    const { user } = getState().auth;

    const filteredUserConversations = conversations.filter((conversation) => {
      const { members } = conversation;
      const userConversations = [];
      const isMemberOfConversation = members.find(
        (member) => member === user._id
      );
      if (!isMemberOfConversation) {
        return "";
      } else {
        userConversations.push(conversation);
      }
      return userConversations;
    });
    dispatch(setConversations(filteredUserConversations));
  };
};

export const setConversations = (conversations) => ({
  type: types.chatSetConversations,
  conversations,
});

export const setActiveConversation = (activeConversation) => ({
  type: types.chatSetActiveConversation,
  activeConversation,
});

export const removeActiveConversation = () => ({
  type: types.chatRemoveActiveConversation,
});

export const startLoadingMessages = () => {
  return async (dispatch, getState) => {
    const { activeConversation } = getState().chat;
    const messages = await getMessages(activeConversation._id);
    dispatch(setMessages(messages));
  };
};

export const setMessages = (messages) => ({
  type: types.chatSetMessages,
  messages,
});

export const cleanChatData = () => ({
  type: types.chatCleanData,
});
