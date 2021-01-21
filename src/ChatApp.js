import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import { store } from "./redux/store/store";
import { AppRouter } from "./routers/AppRouter";

import { theme } from "./styles/materialUITheme";

const ChatApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default ChatApp;
