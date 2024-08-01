import React from "react";
import chatIcon from "../icons/chat.png";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <img src={chatIcon} alt="chat" className="welcome-logo" />
      <p>View and text directly to people present in the chat room.</p>
    </div>
  );
}
