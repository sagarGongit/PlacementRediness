import { Box, SimpleGrid } from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Box display={"flex"} alignItems={"baseline"} justifyContent={"center"}>
        <Box
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          visibility={{
            base: "collapse",
            sm: "collapse",
            md: "collapse",
            lg: "visible",
          }}
          color={theme == "light" ? "black" : "white"}
          bg={theme === "light" ? "white" : "gray.700"}
          width={"100px"}
          height={"500px"}
          shadow={"md"}
        >
          <h1>sidebar</h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap="4"
          p="4"
          height={"auto"}
        >
          {["Card 1", "Card 2", "Card 3", "Card 4"].map((card) => (
            <Box
              margin={"auto"}
              key={card}
              p="4"
              shadow="md"
              width={{ base: "300px", sm: "200px", md: "300px", lg: "280px" }}
              height={"300px"}
              color={theme == "light" ? "black" : "white"}
              bg={theme === "light" ? "white" : "gray.700"}
            >
              {card}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Content;
