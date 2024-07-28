import React from 'react';
import './styles.css';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import MessageSelf from './MessageSelf';
import Messageothers from './MessageOthers';

export default function ChatArea({props}) {
  return (
    <div className='chat-area-container'>
      <div className='chat-area-header'>
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
