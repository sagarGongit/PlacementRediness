import { useContext } from "react";
import "./navbar.css";
import { AuthContext } from "../contex-provider/Auth-Context-Provider";
const Navbar = () => {
  const { auth, Login, Logout } = useContext(AuthContext);
  return (
    <>
      <div className="navbar">
        <h1>Navbar</h1>
        {auth.isLogged ? (
          <button onClick={Logout}>Logout</button>
        ) : (
          <button onClick={Login}>Login</button>
        )}
      </div>
    </>
  );
};

export default Navbar;
