import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  extendTheme,
  Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Global } from "@emotion/react";

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat Alternates', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

const GlobalStyles = () => (
  <Global
    styles={`
      body, html {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

const Thankyou = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Box
        fontFamily="body"
        textAlign="center"
        fontSize="18px"
        lineHeight="24px"
        margin="0 auto"
        maxW="480px"
        p={4}
        height={"100vh"}
      >
        <VStack spacing={2} m={28} align="center">
          <Icon as={MdCheckCircle} w={20} h={20} color="green.500" mb={4} />
          <Text fontWeight="bold" fontSize="larger">
            Your application has been submitted successfully.
          </Text>
          <Text fontSize="large">We will get back to you soon.</Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Thankyou;
