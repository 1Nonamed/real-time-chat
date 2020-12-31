import React, { useEffect, useState } from "react";
import Axios from "axios";

import { List } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ChatConversationLabel } from "./ChatConversationLabel";

export const ChatConversations = () => {
  // const conversations = [1, 2, 3, 4, 5];
  const [conversations, setConversations] = useState([]);


  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = async () => {
    const res = await Axios.get(
      "https://academlo-whats.herokuapp.com/api/v1/users/1/conversations"
    );
    const { data } = res;
    setConversations(data);
  };

  return (
    <div>
      
      {conversations.map((conversation, i) => (
        <List dense disablePadding key={conversation._id}>
          <Link id="linkToConversation" to={`/chat/${conversation._id}`}>
            <ChatConversationLabel membersInfo={conversation.membersObj} />
          </Link>
        </List>
      ))}
    </div>
  );
};
