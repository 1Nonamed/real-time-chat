import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Typography, Toolbar, AppBar, List } from "@material-ui/core";
import { ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import {
  createConversation,
  getConversationById,
} from "../../helpers/conversations";
import { setActiveConversation } from "../../redux/actions/chatActions";

export const ChatUsers = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const { _id: activeUserId } = user;

  const handleCreateNewChat = async (e, userId) => {
    const { data } = await createConversation(userId, activeUserId);
    const activeConversation = await getConversationById(data._id);
    dispatch(setActiveConversation(activeConversation));
    history.push(`/chat/${activeConversation._id}`);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <ArrowBack onClick={history.goBack} />
          <div>
            <Typography variant="h6">Select contact</Typography>
            <Typography variant="body1">{users.length - 1} contacts</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <List dense disablePadding>
        {users
          .filter((user) => user._id !== activeUserId)
          .map((user) => (
            <ListItem
              key={user._id}
              divider
              button
              onClick={(e) => handleCreateNewChat(e, user._id)}
            >
              <ListItemAvatar>
                <Avatar alt={user.username} src={user.photoUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={user.username}
              />
            </ListItem>
          ))}
      </List>
    </>
  );
};
