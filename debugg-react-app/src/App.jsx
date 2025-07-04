import "./App.css";
import { Box, Flex, Grid, Button, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Flex
        as="nav"
        p="4"
        width={{ sm: "sm", md: "md", lg: "lg" }}
        bg={theme === "light" ? "white" : "gray.700"}
        color={theme === "light" ? "red.100" : "blue.100"}
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button marginLeft={4} onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap="4" p="4">
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            color={theme == "light" ? "black" : "white"}
            bg={theme === "light" ? "white" : "gray.700"}
          >
            {card}
          </Box>
        ))}
      </Grid>
      <Box
        as="footer"
        p="4"
        color={theme == "light" ? "black" : "white"}
        bg={theme === "light" ? "white" : "gray.700"}
      >
        Footer Content
      </Box>
    </Container>
  );
}

export default App;
