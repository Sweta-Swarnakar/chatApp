import React, { useState } from "react";
import "./styles.css";


export default function MessageSelf() {
 const props2 = {name: "Self", message: "sample msg 2"}
  return (
    <div className="self-message-container">
      <div className="self-message-box">
        <p>{props2.message}</p>
        <p className="self-time-stamp">12.40pm</p>
      </div>
    </div>
  );
}
