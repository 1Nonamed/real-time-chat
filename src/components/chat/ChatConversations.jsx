import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Divider, List } from "@material-ui/core";

import { ChatConversationLabel } from "./ChatConversationLabel";
import {
  setActiveConversation,
  startLoadingConversations,
} from "../../redux/actions/chatActions";

export const ChatConversations = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { conversations } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(startLoadingConversations());
  }, [dispatch]);

  const handleRedirectActiveConversation = (conversation) => {
    history.push(`/chat/${conversation._id}`);
    dispatch(setActiveConversation(conversation));
  };

  

  return conversations.map((conversation) => (
    <List dense disablePadding key={conversation._id}>
      <ChatConversationLabel
        conversation={conversation}
        handleRedirectActiveConversation={handleRedirectActiveConversation}
      />
      <Divider />
    </List>
  ));
};
