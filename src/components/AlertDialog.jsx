import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { deleteMessage } from "../helpers/messages";
import {
  startLoadingConversations,
  startLoadingMessages,
} from "../redux/actions/chatActions";
import { deleteConversation } from "../helpers/conversations";
import { startLogout } from "../redux/actions/authActions";
import { deleteUser } from "../helpers/users";

export default function AlertDialog({ type, chatId, msgId, setAnchorEl }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteMessage = () => {
    deleteMessage(msgId);
    dispatch(startLoadingMessages());
    setOpen(false);
    setAnchorEl(null);
  };

  const handleDeleteConversation = () => {
    deleteConversation(chatId);
    dispatch(startLoadingConversations());
    setOpen(false);
    setAnchorEl(null);
    history.push("/chat");
  };

  const handleDeleteAccount = () => {
    deleteUser(user._id);
    dispatch(startLogout());
    setOpen(false);
  };

  switch (type) {
    case "deleteMessage":
      return (
        <div>
          <span onClick={handleClickOpen}>Delete message</span>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>Delete message?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteMessage} color="primary" autoFocus>
                Delete Message
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    case "deleteChat":
      return (
        <div>
          <span onClick={handleClickOpen}>Delete chat</span>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this chat?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleDeleteConversation}
                color="primary"
                autoFocus
              >
                Delete Chat
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    case "deleteAccount":
      return (
        <div>
          <span onClick={handleClickOpen}>Delete account</span>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete your account?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteAccount} color="primary" autoFocus>
                Delete Account
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    default:
      break;
  }
}
