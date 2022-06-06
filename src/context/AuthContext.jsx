import React, { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth,setauth]=useState(false)
  return <AuthContext.Provider value={{auth,setauth}}>{children}</AuthContext.Provider>;
};
