import React, { useState } from "react";
import "./styles.css";

export default function Messageothers() {
  const props = { name: "User 1", message: "sample msg 1" };
  return (
    <div className="other-msg-container">
      <div className="conversation-container">
        <p className="avatar-icon">{props.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props.name}</p>
          <p className="con-last-msg">{props.message}</p>
          <p className="self-time-stamp">12.30pm</p>
        </div>
      </div>
    </div>
  );
}
