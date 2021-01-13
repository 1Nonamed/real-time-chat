import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#0b7e7c",
    },
    secondary: green,
  },
});

const Theme = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
