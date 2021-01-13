import { types } from "../types/types";

// }

const initialState = {
  // loading: false,
  users: [],
  conversations: [],
  activeConversation: {},
  messages: [],
  error: "",
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.chatLoadUsers:
      return {
        ...state,
        users: action.payload,
      };
    case types.chatSetConversations:
      return {
        ...state,
        conversations: action.conversations,
      };
    case types.chatSetActiveConversation: {
      return {
        ...state,
        activeConversation: action.activeConversation,
      };
    }
    case types.chatRemoveActiveConversation: {
      return {
        ...state,
        activeConversation: {},
      };
    }
    case types.chatSetMessages: {
      return {
        ...state,
        messages: action.messages,
      };
    }
    case types.chatCleanData: {
      return {};
    }
    default:
      return state;
  }
};
