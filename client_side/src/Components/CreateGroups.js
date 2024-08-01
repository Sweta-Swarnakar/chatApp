import { IconButton } from '@mui/material'
import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function CreateGroups() {
  return (
    <div className='create-group-container'>
      <input placeholder='Enter group name' className='search-box'/>
      <IconButton>
        <DoneOutlineIcon/>
      </IconButton>
    </div>
  )
}
