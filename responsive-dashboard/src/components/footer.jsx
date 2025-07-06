import { Box } from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Box
        as="footer"
        p="4"
        color={theme == "light" ? "black" : "white"}
        bg={theme === "light" ? "white" : "gray.700"}
        shadow={"md"}
        textAlign={"center"}
      >
        Footer Content
      </Box>
    </>
  );
};

export default Footer;
