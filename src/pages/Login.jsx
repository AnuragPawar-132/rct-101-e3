import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate= useNavigate();
  const [loginInfo, setloginInfo]= useState({});
  const {login}= useContext(AuthContext);

  const handleSubmitLogin=(e)=>{
    const {name, value}= e.target;
    setloginInfo({...loginInfo, [name]:value})
    login()
  }
  
  return (
    <div>
      <input data-cy="login-email" placeholder="Email" />
      <input data-cy="login-password" placeholder="Password" />
      <button data-cy="login-submit" onClick={handleSubmitLogin}>Login</button>
    </div>
  );
};

export default Login;
