import "./loadingIndicator.css";
import { Box, Spinner } from "@chakra-ui/react";

const LoadingIndicator = () => {
  return (
    <>
      <Box className="loading-indicator">
        <Spinner size="lg" color="colorPalette.600" colorPalette={"orange"} />
      </Box>
    </>
  );
};

export default LoadingIndicator;
