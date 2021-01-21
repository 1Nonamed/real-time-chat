import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import ArrowBackRounded from "@material-ui/icons/ArrowBackRounded";

import { UserMenu } from "./UserMenu";
import { useStyles } from "../styles/materialUIStyles";
import { removeActiveConversation } from "../redux/actions/chatActions";

export const ChatAppBar = ({ type, user, userContact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoBack = () => {
    history.push("/chat");
    dispatch(removeActiveConversation());
  };

  switch (type) {
    case "smAppBar":
      return (
        <AppBar position="sticky">
          <Toolbar>
            <Typography>Chat</Typography>
            <Typography variant='body1'>{user.firstName}</Typography>
            <UserMenu type="smMenu" />
          </Toolbar>
        </AppBar>
      );
    case "mdAppBar":
      return (
        <AppBar position="sticky">
          <Toolbar>
            <Avatar src={user.photoUrl} alt={user.username} />
            <Typography className={classes.grow}>{user.firstName}</Typography>
            <UserMenu type="mdMenu" />
          </Toolbar>
        </AppBar>
      );
    case "appBarContactUser":
      return (
        <AppBar position="sticky">
          <Toolbar>
            <ArrowBackRounded onClick={(e) => handleGoBack(e)} />
            <Avatar src={userContact.photoUrl} alt={userContact.username} />
            <div className={`${classes.grow} ml-10`}>
              <Typography variant="h6">
                {userContact.firstName} {userContact.lastName}
              </Typography>
              <Typography variant="h6">Online</Typography>
            </div>
            <UserMenu type="appBarContactUserMenu" />
          </Toolbar>
        </AppBar>
      );
    default:
      break;
  }
};
