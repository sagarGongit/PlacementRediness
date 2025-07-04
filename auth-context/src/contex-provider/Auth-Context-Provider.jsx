/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogged: false,
  });

  const Login = () => {
    setAuth({ isLogged: true });
  };

  const Logout = () => {
    setAuth({ isLogged: false });
  };

  return (
    <>
      <AuthContext.Provider value={{ Login, Logout, auth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
