import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate= useNavigate();
  const [isAuth, setIsAuth]= useState(false);

  const {state}= useLocation();
  // console.log(state);

  const login= ()=>{
    setIsAuth(true);
    if(state.from){
      navigate(state.from, {replace:true})
    }
    else{
      navigate("/login")
    }
  }
  const logout= ()=>{
    setIsAuth(false)
  }

  return <AuthContext.Provider value= {{isAuth, login, logout}} >{children}</AuthContext.Provider>;
};
