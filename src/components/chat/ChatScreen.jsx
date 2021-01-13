import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Fab, Grid, Hidden } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { ChatConversations } from "./ChatConversations";
import { Sidebar } from "../Sidebar";

import { useStyles } from "../../styles/materialUIStyles";
import { ChatConversation } from "./ChatConversation";
import { NoChatScreen } from "./NoChatScreen";
import { ChatAppBar } from "../ChatAppBar";

export const ChatScreen = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const { activeConversation } = useSelector((state) => state.chat);
  // const { membersObj } = activeConversation;
  // console.log(membersObj);

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Grid container>
          <Grid item xs={12}>
            <ChatAppBar type="smAppBar" user={user} />
            <ChatConversations />
            <Link to="/chat/users">
              <Fab color="secondary" aria-label="edit" className={classes.fab}>
                <EditIcon />
              </Fab>
            </Link>
          </Grid>
        </Grid>
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
            <Grid item md={9}>
              {!activeConversation ? <ChatConversation /> : <NoChatScreen />}
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </div>
  );
};
