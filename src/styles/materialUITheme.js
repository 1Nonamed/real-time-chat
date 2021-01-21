import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blue[600],
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    fullWidth: true,
  },
  MuiTextField: {
    autoComplete: "off",
    fullWidth: true,
    margin: "dense",
    required: true,
    variant: "outlined",
  },
  MuiTypography: {
    variant: "inherit",
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: "#42a5f5",
        color: "#fffff",
      },
    },
  },
  MuiFab: {
    secondary: {
      position: "absolute",
      bottom: theme.spacing(5),
      right: theme.spacing(4),
    },
  },
  MuiTypography: {
    root: {
      flexGrow: 1,
      // textAlign: "center",
    },
    h6: {
      textTransform: "capitalize",
    },
    body1: {
      textAlign: "right",
    },
  },
};
