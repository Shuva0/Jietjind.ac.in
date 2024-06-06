import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import "./JindGenius.css";

const JindGenius = () => (
  <Box p={4}>
    {/* <Heading as="h2" size="lg" mb={4}>
      PDF Viewer Example
    </Heading> */}
    <div className="heading-css-1">
      <h1>Jind Genius</h1>
    </div>
    <Box className="control-section" m={16}>
      <iframe
        title="PDF Viewer"
        src="./images/test-pdf.pdf"
        width="100%"
        height="600px"
      />
    </Box>
  </Box>
);

export default JindGenius;
