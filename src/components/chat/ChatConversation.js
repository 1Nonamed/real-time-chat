import {
  Avatar,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@material-ui/core";

import "../../styles/components/conversations.css";

import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

// import { Sidebar } from "./Sidebar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import MoodIcon from "@material-ui/icons/Mood";
import { ArrowBackRounded } from "@material-ui/icons";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minHeight: "100vh",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(4),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  prueba: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: "100%",
    top: "auto",
    bottom: 0,
    backgroundColor: "#f0f0f0",
  },
}));

export const ChatConversation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { firstName, lastName, photoUrl, username } = user;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // dispatch(startLogout());
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackRounded fontSize="large" onClick={history.goBack} />
          <div className={classes.grow}>
            <Typography variant="h6">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body1">Online</Typography>
          </div>
          <Avatar src={photoUrl} alt={username} onClick={handleMenu} />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleLogout}>
              Log Out
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              Delete Conversation
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <main className="prueba">
        <Typography variant="h1">Hola</Typography>
        <Typography variant="h1">Como</Typography>
        <Typography variant="h1">Estas</Typography>
        <Typography variant="h1">Probando</Typography>
        <Typography variant="h1">El</Typography>
        <Typography variant="h1">Overflow</Typography>
        <Typography variant="h1">Test</Typography>
        <Typography variant="h1">Mas</Typography>
        <Typography variant="h1">Mas Pruebas</Typography>
        <Typography variant="h1">Mas Pruebas</Typography>
      </main>
      <Paper component="form" className={classes.prueba}>
        <IconButton className={classes.iconButton}>
          <MoodIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          autoComplete="off"
          autoFocus
          placeholder="Type a message"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <SendRoundedIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
