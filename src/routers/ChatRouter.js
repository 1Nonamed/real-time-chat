import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChatConversation } from "../components/chat/ChatConversation";
import { ChatScreen } from "../components/chat/ChatScreen";
import { ChatUsers } from "../components/chat/ChatUsers";

export const ChatRouter = () => {
  return (
    <Route>
      <Switch>
        <Route path="/chat/users" component={ChatUsers} />
        <Route path="/chat/:id" component={ChatConversation} />
        <Route path="/chat" component={ChatScreen} />
        <Redirect to="/chat" />
      </Switch>
    </Route>
  );
};
