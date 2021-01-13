import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Avatar, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";

import { startLogout } from "../redux/actions/authActions";

import AlertDialog from "./AlertDialog";
// import { cleanChatData } from "../redux/actions/chatActions";

export const UserMenu = ({ type, msgId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.auth);
  const { activeConversation } = useSelector((state) => state.chat);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePush = () => {
    history.push("/chat/users");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    // dispatch(cleanChatData());
    setAnchorEl(null);
  };

  switch (type) {
    case "smMenu":
      return (
        <div>
          <Avatar
            src={user.photoUrl}
            alt={user.username}
            onClick={handleMenu}
          />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleLogout}>
              Log Out
            </MenuItem>
            <MenuItem dense>
              <AlertDialog type="deleteAccount" userId={user._id} />
            </MenuItem>
          </Menu>
        </div>
      );
    case "mdMenu":
      return (
        <div>
          <div className="d-flex align-center">
            <ChatRoundedIcon onClick={handlePush} />
            <MoreVertIcon onClick={handleMenu} />
          </div>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleLogout}>
              Log Out
            </MenuItem>
            <MenuItem dense>
              <AlertDialog type="deleteAccount" userId={user._id} />
            </MenuItem>
          </Menu>
        </div>
      );
    case "appBarContactUserMenu":
      return (
        <div>
          <div className="d-flex align-center">
            <VideocamRoundedIcon fontSize="large" />
            <CallIcon />
            <MoreVertIcon onClick={handleMenu} />
          </div>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleClose}>
              Contact info
            </MenuItem>
            <MenuItem dense>
              <AlertDialog
                type="deleteChat"
                chatId={activeConversation._id}
                setAnchorEl={setAnchorEl}
              />
            </MenuItem>
          </Menu>
        </div>
      );
    case "chatMessageMenu":
      return (
        <span>
          <ExpandMoreIcon onClick={handleMenu} />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem dense onClick={handleClose}>
              Reply
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              Star message
            </MenuItem>
            <MenuItem dense>
              <AlertDialog
                type="deleteMessage"
                msgId={msgId}
                setAnchorEl={setAnchorEl}
              />
            </MenuItem>
          </Menu>
        </span>
      );
    default:
      break;
  }
};
