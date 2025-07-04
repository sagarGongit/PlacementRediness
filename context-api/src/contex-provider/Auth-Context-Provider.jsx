/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <AuthContext.Provider value={{ changeTheme,theme }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
