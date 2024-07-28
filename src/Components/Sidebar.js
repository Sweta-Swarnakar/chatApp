import React, { useState } from "react";
import "./styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Icon, IconButton } from "@mui/material";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ConversationItem from "./ConversationItem";
export default function Sidebar() {

  const [Conversations, setConversations] = useState([
    {
      id: "1",
      name: "User 1",
      lastMessage : "last msg 1",
      timeStamp : "today"
    },
    {
      id: "1",
      name: "Test 2",
      lastMessage : "last msg 2",
      timeStamp : "today"
    },
    {
      id: "1",
      name: "Test 3",
      lastMessage : "last msg 3",
      timeStamp : "today"
    }
  ]);

  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        </div>
        <div>
        <IconButton>
          <PersonAddAltIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon/>
        </IconButton>
        <IconButton>
          <ControlPointIcon />
        </IconButton>
        <IconButton>
          <Brightness3Icon />
        </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
        <SearchIcon />
        <input placeholder="Search" className="search-box"/>
        </IconButton> 
      </div>
      <div className="sb-convo">
        {Conversations.map((Conversation) => {
          return <ConversationItem key={Conversation.id} props={Conversation}/>
        })}
        
      </div>
    </div>
  );
}
