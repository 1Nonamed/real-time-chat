import { types } from "../types/types";

// {
//   "_id": "5fdbf8baa158063ea44132e6",
//   "firstName": "Oscar",
//   "lastName": "Islas Reyes",
//   "email": "oislasreyes@gmail.com", si
//   "username": "oislasreyes",
//   "photoUrl": "", si
//   "uid": "2mMbeWxkmbdMgDgIsaGPNEmntQz2", si
//   "__v": 0
// },

const initialState = {
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.user,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
