 
import React, { useEffect, useState } from "react";
import app from "../Serviсes/base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    app.auth().onAuthStateChanged(authState=>{
      setCurrentUser(authState)
    });
  }, [app]);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};