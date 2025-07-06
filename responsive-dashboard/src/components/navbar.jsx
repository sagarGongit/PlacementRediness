import { Button, Flex, Text } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Flex
        as="nav"
        p="4"
        width={"100%"}
        bg={theme === "light" ? "white" : "gray.700"}
        color={theme === "light" ? "red.100" : "blue.100"}
        justifyContent="space-between"
      >
        <Button size={["sm", "md", "lg"]} onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Text
          fontWeight={"bold"}
          fontSize={20}
          color={theme == "light" ? "black" : "white"}
        >
          {isLoggedIn && "Welcome User !"}
        </Text>
        <Button marginLeft={4} onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
