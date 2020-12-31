import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/styles.css";
import "../../styles/components/chatUsers.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { startLoadingActiveConversation } from "../../redux/actions/chatActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ChatUsers = () => {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const { _id: activeUserId } = user;

  const handleListItemClick = (e, userId) => {
    dispatch(startLoadingActiveConversation(userId, activeUserId));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ArrowBack fontSize="large" onClick={history.goBack} />
          <div>
            <Typography variant="h6">Select contact</Typography>
            <Typography variant="body1">{users.length} contacts</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Link to="/">
        <List dense disablePadding>
          {users.map((user, index) => (
            <ListItem
              key={user._id}
              divider
              button
              onClick={(e) => handleListItemClick(e, user._id)}
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
      </Link>
    </div>
  );
};
