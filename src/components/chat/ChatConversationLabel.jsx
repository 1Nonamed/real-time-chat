import { useSelector } from "react-redux";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import "../../styles/styles.css";

export const ChatConversationLabel = ({
  conversation,
  handleRedirectActiveConversation,
}) => {
  const { user } = useSelector((state) => state.auth);
  const { membersObj } = conversation;

  const filteredUser = membersObj.find((member) => member._id !== user._id);
  const { firstName, lastName, photoUrl, username } = filteredUser;

  return (
    <div className="d-flex flex-wrap">
      <ListItem onClick={() => handleRedirectActiveConversation(conversation)}>
        <ListItemAvatar>
          <Avatar src={photoUrl} alt={username} />
        </ListItemAvatar>
        <ListItemText
          primary={`${firstName} ${lastName}`}
          secondary={username}
        />
      </ListItem>
    </div>
  );
};
