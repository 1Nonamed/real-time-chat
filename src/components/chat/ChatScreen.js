import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Avatar,
  Fab,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { ChatConversations } from "./ChatConversations";
// import { Sidebar } from "./Sidebar";
import { startLogout } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  title: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(4),
  },
}));

export const ChatScreen = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { firstName, photoUrl, username } = user;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {/* <Sidebar /> */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chat
          </Typography>
          <Typography>{firstName}</Typography>
          <Avatar src={photoUrl} alt={username} onClick={handleMenu} />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleLogout}>
              Log Out
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              Delete Account
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <ChatConversations />
      <Link to="/chat/users">
        <Fab color="secondary" aria-label="edit" className={classes.fab}>
          <EditIcon />
        </Fab>
      </Link>
    </div>
  );
};
