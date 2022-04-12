import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="divzona">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="retype password" />
      <button onClick={() => {navigate("/")}}> To login </button>
  </div>
  )
}

export default ForgotPassword;