import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ConversationItem({props}) {

  const navigate = useNavigate()
  return (
    <div className='conversation-container'onClick={()=> navigate("chat")} >
      <p className='avatar-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-last-msg'>{props.lastMessage}</p>
      <p className='con-time-stamp'>{props.timeStamp}</p>
    </div>
  )
}
