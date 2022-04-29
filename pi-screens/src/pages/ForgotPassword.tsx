import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  
  return (
    <div className="divzona">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="retype password" />
  </div>
  )
}

export default ForgotPassword;