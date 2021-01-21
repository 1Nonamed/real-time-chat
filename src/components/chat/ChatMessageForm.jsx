import { Divider, IconButton, InputBase } from "@material-ui/core";
import { useStyles } from "../../styles/materialUIStyles";
import "../../styles/styles.css";
import MoodIcon from "@material-ui/icons/Mood";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../helpers/messages";
import { startLoadingMessages } from "../../redux/actions/chatActions";

export const ChatMessageForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { activeConversation } = useSelector((state) => state.chat);

  const [formValues, handleInputChange, reset] = useForm({
    userId: user._id,
    conversationId: activeConversation._id,
    message: ``,
    timestamp: Date.now(),
    received: false,
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(formValues);
    dispatch(startLoadingMessages());
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSendMessage}>
      <IconButton className="p-10">
        <MoodIcon />
      </IconButton>

      <InputBase
        type="text"
        name="message"
        value={formValues.message}
        autoFocus
        fullWidth
        multiline
        autoComplete="off"
        placeholder="Type a message"
        onChange={handleInputChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className="p-10">
        <SendRoundedIcon />
      </IconButton>
    </form>
  );
};
