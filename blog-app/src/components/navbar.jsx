import "./navbar.css";
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex
        shadow={"md"}
        className="navbar"
        as="nav"
        p="4"
        justifyContent="space-between"
      >
        <Box>
          <Image src="https://cdn.worldvectorlogo.com/logos/blogo.svg" />
          Bloggies
        </Box>
        <Box>
          <Input width={"300px"} type="text" placeholder="search..." />
          <Button colorPalette={"black"}>Search</Button>
        </Box>
        <Box>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
