import React from "react";
import chatLogo from "../icons/chat.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={chatLogo} alt="chat" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-banner">Login to your account</p>
        <TextField id="outlined-basic" label="Enter name" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Log In</Button>
   
        
      </div>
    </div>
  );
}
