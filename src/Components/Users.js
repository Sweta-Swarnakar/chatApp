import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import smallIcon from '../icons/small_icon.png';

export default function Users() {
  return <div className="user-groups-list-container">
     <div className="ug-header">
        <img src={smallIcon} />
        <p className="ug-title">Online user</p>
     </div>
     <div className="sb-search">
        <IconButton>
            <SearchIcon/>
            <input placeholder="Search" className="search-box"/>
        </IconButton>
     </div>
     <div className="ug-list">
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>
        <div className="list-items">
            <p className="avatar-icon">T</p>
            <p className="con-title">User 1</p>
        </div>

     </div>
    </div>;
}
