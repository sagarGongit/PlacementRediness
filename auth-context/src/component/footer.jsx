import { useContext } from "react";
import "./footer.css";
import { AuthContext } from "../contex-provider/Auth-Context-Provider";
const Footer = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="footer">
        {auth.isLogged ? <h1>{"Welcome, User"}</h1> : <h1>{"Please log in"}</h1>}
      </div>
    </>
  );
};

export default Footer;
