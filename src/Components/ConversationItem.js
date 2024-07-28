import React from 'react'

export default function ConversationItem({props}) {
  return (
    <div className='conversation-container'>
      <p className='avatar-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-last-msg'>{props.lastMessage}</p>
      <p className='con-time-stamp'>{props.timeStamp}</p>
    </div>
  )
}
