import React, { useState, useEfect, createContext } from "react";
import { getAccesToken, getRefreshToken, logOut } from "../api/auth";

export const AuthContext = createContext();

//hook que envuelve toda la aplicacion, recibe como props toda la app
export default function AuthProvider(props) {
  //app
  const { children } = props;
  //state que contiene un user
  const [user, setUser] = useState({
    user: null,
    isLoading: true
  });

return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
