import React, { useState } from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";


export default function MainContainer() {
  const [headerText, setHeaderText] = useState([
    {
      id: "1",
      name: "Test 1",
      status : "online",
      timeStamp : "today"
    }
  ]);
  return (
    <div className="main-conatainer">
      <Sidebar />
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      <ChatArea props={ headerText[0]} />
    </div>
  );
}
