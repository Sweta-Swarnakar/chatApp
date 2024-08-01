import React from 'react';
import './styles.css';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import MessageSelf from './MessageSelf';
import Messageothers from './MessageOthers';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ChatArea() {
  const lightTheme = useSelector((state) => state.themeKey);
  const [headerText, setHeaderText] = useState([
    {
      id: "1",
      name: "Test 1",
      status : "online",
      timeStamp : "today"
    }
  ]);
  const props = headerText[0];
  return (
    <div className={`chat-area-container ${lightTheme ? "" : "dark"}`}>
      <div className={`chat-area-header ${lightTheme ? "" : "dark"}`}>
        <p className='avatar-icon'>{props.name[0]}</p>
      <div className='header-text'>
        <p className='con-title'>{props.name}</p>
        <p className='con-time-stamp'>{props.status}</p>
      </div>
      <IconButton>
        <DeleteOutlineIcon/>
      </IconButton>
      
      </div>
      <div className='message-container'> 
        <Messageothers/>
        <MessageSelf/>
        <Messageothers/>
        <MessageSelf/>
        <Messageothers/>
        <MessageSelf/>
        <Messageothers/>
        <MessageSelf/>
      </div>
      <div className='input-text-area'>
        <input placeholder="Type a message" className="search-box"/>
        <IconButton>
          <SendIcon/>
        </IconButton>  
      </div>
    </div>
  )
}
