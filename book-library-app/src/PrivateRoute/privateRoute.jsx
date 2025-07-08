import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);
  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
