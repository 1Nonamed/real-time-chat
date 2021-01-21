import { Grid } from "@material-ui/core";
import { useStyles } from "../../styles/materialUIStyles";
import moment from "moment";
import "../../styles/styles.css";

import { UserMenu } from "../UserMenu";

export const ChatMessages = ({ userContact, messages = [] }) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.grow} messagesContainer`}
      style={{ padding: "10px 20px 20px 20px" }}
    >
      {messages.map((message) =>
        message.userId === userContact._id ? (
          <Grid item key={message._id} className="d-flex flex-start">
            <Grid item className="messageBg bg-white my-5">
              <span>
                {message.message}{" "}
                <span style={{ fontSize: "12px" }}>
                  {moment(message.timestamp, "YYYYMMDD").fromNow()}
                </span>
              </span>
              <UserMenu type="chatMessageMenu" msgId={message._id} />
            </Grid>
          </Grid>
        ) : (
          <Grid item key={message._id} className="d-flex flex-end">
            <Grid item className="d-flex align-center messageBg bg-green my-5">
              <div>
                {message.message}{" "}
                <span style={{ fontSize: "12px" }}>
                  {moment(message.timestamp, "YYYYMMDD").fromNow()}
                </span>
              </div>
              <UserMenu type="chatMessageMenu" msgId={message._id} />
            </Grid>
          </Grid>
        )
      )}
    </div>
  );
};
