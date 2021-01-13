import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Hidden } from "@material-ui/core";

import { startLoadingMessages } from "../../redux/actions/chatActions";
import { ChatMessages } from "./ChatMessages";
import { ChatMessageForm } from "./ChatMessageForm";

import { useStyles } from "../../styles/materialUIStyles";
import "../../styles/styles.css";
import "../../styles/components/conversations.css";
import { ChatAppBar } from "../ChatAppBar";
import { Sidebar } from "../Sidebar";

export const ChatConversation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { activeConversation, messages = [] } = useSelector(
    (state) => state.chat
  );
  const { membersObj } = activeConversation;
  const { messages: messagesData } = messages;
  const userContact = membersObj.find((member) => member._id !== user._id);

  useEffect(() => {
    dispatch(startLoadingMessages());
  }, [messages.length, dispatch]);

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <ChatAppBar type="appBarContactUser" userContact={userContact} />
        <Grid container className={classes.messagesContainer}>
          <ChatMessages userContact={userContact} messages={messagesData} />
        </Grid>
        <ChatMessageForm />
      </Hidden>
      <Hidden smDown>
        <div className={classes.container}>
          <Grid
            container
            style={{
              height: "95%",
              border: "1px solid green",
            }}
            className={classes.test}
          >
            <Grid item md={3}>
              <Sidebar user={user} />
            </Grid>
            <Grid item md={9} style={{ position: "relative", height: "100%" }}>
              <ChatAppBar type="appBarContactUser" userContact={userContact} />
              <Grid container className={classes.messagesContainer}>
                <ChatMessages
                  userContact={userContact}
                  messages={messagesData}
                />
              </Grid>
              <ChatMessageForm />
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </div>
  );
};
