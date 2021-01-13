import React from "react";

import "../../styles/styles.css";
import { useStyles } from "../../styles/materialUIStyles";

import chatImg from "../../img/beginChat.png";

export const NoChatScreen = () => {
  const classes = useStyles();
  return (
    <div className={`noChatContainer ${classes.grow}`}>
      <div className='noChatImgContainer'>
        <img src={chatImg} alt="noChat" />
      </div>
    </div>
  );
};
