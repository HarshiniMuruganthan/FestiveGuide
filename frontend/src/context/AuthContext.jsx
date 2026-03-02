import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;

  const [auth, setAuth] = useState({ token, user });

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    setAuth({ token, user: jwtDecode(token) });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
