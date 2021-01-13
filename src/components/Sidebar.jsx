import "../styles/styles.css";
import { ChatConversations } from "./chat/ChatConversations";
import { ChatAppBar } from "./ChatAppBar";

export const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <ChatAppBar type="mdAppBar" user={user} />
      <div style={{ overflowY: "auto", height: "100%" }}>
        <ChatConversations />
      </div>
    </div>
  );
};
