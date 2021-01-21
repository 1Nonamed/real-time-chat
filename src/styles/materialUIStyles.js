import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.background.paper,
    },

    [theme.breakpoints.up("md")]: {
      // background: 'rgb(88, 161, 255)',

      background:
        "linear-gradient(180deg, rgba(88,161,255,1) 10%, rgba(88,161,255,1) 10%, rgba(237,237,237,1) 10%,  rgba(237,237,237,1) 100%)",
      // minHeight: "580px",
      // // minHeight: "600px",
      // maxHeight: "580px",
    },
  },
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    margin: "auto",
    
  },

  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

  test: {
    backgroundColor: theme.palette.background.paper,
  },

  grow: {
    flexGrow: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  form: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e8e8e8",
  },

  messagesContainer: {
    overflowY: "scroll",
    // overflowX: "hidden",
    // backgroundImage: 'url("/src/img/whatsAppBackground.png")',

    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 100px)",
    },

    [theme.breakpoints.up("md")]: {
      height: "calc(100% - 113px)",
    },
  },

  imgContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(`../../img/loginChat.png`)",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  imgAuth: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));
