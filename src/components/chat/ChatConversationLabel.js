import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";

export const ChatConversationLabel = ({ membersInfo }) => {
  const { firstName, lastName, photoUrl, username } = membersInfo[1];
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={photoUrl} alt={username} />
      </ListItemAvatar>
      <ListItemText primary={`${firstName} ${lastName}`} secondary={username} />
    </ListItem>
  );
};
