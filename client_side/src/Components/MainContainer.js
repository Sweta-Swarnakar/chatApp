import React, { useState } from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import UserGroups from "./UserGroups";
import { Outlet } from "react-router-dom";


export default function MainContainer() {
  return (
    <div className="main-conatainer">
      <Sidebar />
      <Outlet/>
    </div>
  );
}
