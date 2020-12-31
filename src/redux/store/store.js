import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { chatReducer } from "../reducers/chatReducer";
import { uiReducer } from "../reducers/uiReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  chat: chatReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
