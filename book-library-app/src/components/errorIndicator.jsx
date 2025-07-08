import "./errorIndicator.css";
import { Box, Heading } from "@chakra-ui/react";

const ErrorIndicator = ({ err }) => {
  return (
    <>
      <Box className="err-indicator">
        <Heading>{err}</Heading>
      </Box>
    </>
  );
};

export default ErrorIndicator;
