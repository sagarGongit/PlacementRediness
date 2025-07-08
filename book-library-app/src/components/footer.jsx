import { Box, Flex, Text, Link, Icon, VStack, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaBook } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.200" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <HStack spacing={3} mb={{ base: 6, md: 0 }}>
          <Icon as={FaBook} boxSize={10} color="purple" />
          <Text fontSize="lg" fontWeight="bold">
            My Library
          </Text>
        </HStack>

        <VStack spacing={2} align="center" color={"cornflowerblue"}>
          <Text fontSize="sm">Explore. Learn. Grow.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <Icon color={"white"} as={FaFacebook} />
            </Link>
            <Link href="https://twitter.com">
              <Icon color={"white"} as={FaTwitter} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon color={"white"} as={FaInstagram} />
            </Link>
          </HStack>
        </VStack>

        <Text fontSize="xs" mt={{ base: 6, md: 0 }}>
          © {new Date().getFullYear()} My Library. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
