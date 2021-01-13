import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import { AppRouter } from "./routers/AppRouter";

import { withTheme } from "./styles/materialUITheme";

const ChatApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default withTheme(ChatApp);
