import { types } from "../types/types";

// }

const initialState = {
  // loading: false,
  users: [],
  conversations: [],
  messages: [],
  activeConvesation: null,
  error: "",
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.chatLoadUsers:
      return {
        ...state,
        users: action.payload,
      };
    case types.chatLoadActiveConversation: {
      return {
        ...state,
        activeConvesation: action.activeConvesation
      };
    }
    default:
      return state;
  }
};
