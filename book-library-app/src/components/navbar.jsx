import { LOGOUT } from "../reduxfiles/actionType";
import "./navbar.css";
import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isLogged, email } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/login");
    setToggle(!toggle);
  };
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    setToggle(!toggle);
  };

  return (
    <Box className="navbar" shadow={"md"}>
      <Box>My Library</Box>
      <Box className="init-nav">
        <Text>{"Hi, " + email.split("@")[0].toUpperCase()}</Text>
        <Link to="/">Home</Link>
        <Link to="/mybooks">My Books</Link>
        {isLogged ? (
          <Button
            onClick={() => dispatch({ type: LOGOUT })}
            colorPalette={"red"}
            variant={"solid"}
            color={"white"}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            colorPalette={"purple"}
            variant={"solid"}
            color={"white"}
          >
            Login
          </Button>
        )}
      </Box>

      <Box className="ham-menu">
        <RiMenu2Fill onClick={() => setToggle(!toggle)} />
      </Box>
      {toggle && (
        <Box shadow={"md"} className="drawer-span">
          <Box>
            {"Hi, " + email.split("@")[0].toUpperCase() || "example@gmail.com"}
          </Box>
          <Box>
            <Link onClick={() => setToggle(!toggle)} to={"/"}>
              Home
            </Link>
          </Box>
          <Box>
            <Link onClick={() => setToggle(!toggle)} to={"/mybooks"}>
              My Books
            </Link>
          </Box>
          {isLogged ? (
            <Button
              onClick={handleLogout}
              colorPalette={"red"}
              variant={"solid"}
              color={"white"}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              colorPalette={"purple"}
              variant={"solid"}
              color={"white"}
            >
              Login
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
