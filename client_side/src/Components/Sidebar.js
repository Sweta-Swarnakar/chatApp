import React, { useState } from "react";
import "./styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../features/themeSlice"; // Correctly import the action

export default function Sidebar() {
  const [Conversations, setConversations] = useState([
    {
      id: "1",
      name: "User 1",
      lastMessage: "last msg 1",
      timeStamp: "today"
    },
    {
      id: "2",
      name: "Test 2",
      lastMessage: "last msg 2",
      timeStamp: "today"
    },
    {
      id: "3",
      name: "Test 3",
      lastMessage: "last msg 3",
      timeStamp: "today"
    }
  ]);

  const dispatch = useDispatch();

  const lightTheme = useSelector((state) => state.themeKey);

  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className={`sb-header ${lightTheme ? "" : "dark"}`}>
        <div>
          <IconButton>
            <AccountCircleIcon className={`icon ${lightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => navigate("users")}>
            <PersonAddAltIcon className={`icon ${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon className={`icon ${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <ControlPointIcon className={`icon ${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton onClick={() => dispatch(themeToggle())}>
            {lightTheme ? <Brightness3Icon className={`icon ${lightTheme ? "" : "dark"}`} /> : <Brightness7Icon className={`icon ${lightTheme ? "" : "dark"}`} />}
          </IconButton>
        </div>
      </div>
      <div className={`sb-search ${lightTheme ? "" : "dark"}`}>
        <IconButton>
          <SearchIcon className={`icon ${lightTheme ? "" : "dark"}`} />
        </IconButton>
        <input placeholder="Search" className={`search-box ${lightTheme ? "" : "dark"}`} />
      </div>
      <div className={`sb-convo ${lightTheme ? "" : "dark"}`}>
        {Conversations.map((Conversation) => {
          return <ConversationItem key={Conversation.id} props={Conversation} />
        })}
      </div>
    </div>
  );
}
