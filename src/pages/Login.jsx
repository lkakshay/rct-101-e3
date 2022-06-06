import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
 const {setauth}=useContext(AuthContext)
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button onClick={()=>{
        setauth(true)
      }} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
