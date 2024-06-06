import React, { useState } from "react";
import {
  Container,
  Text,
  Flex,
  Icon,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PaginationContainer = ({ currIndex, setCurrIndex }) => {
  return (
    <Container
      d="flex"
      maxWidth="7xl"
      w="full"
      h="130px"
      justifyContent="space-between"
      alignItems="center"
      p={{ base: 5, sm: 10 }}
    >
      <Pagination currIndex={currIndex} setCurrIndex={setCurrIndex} />
    </Container>
  );
};

// Ideally, only the Pagination component should be used. The PaginationContainer component is used to style the preview.
const Pagination = ({ currIndex, setCurrIndex }) => {
  const handlePage = (index, item) => {
    if (index === currIndex)
      return <PaginationButton isActive>{item}</PaginationButton>;
    else return <PaginationButton>{item}</PaginationButton>;
  };
  const arr = [1, 2];
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <Flex
        as="nav"
        aria-label="Pagination"
        alignItems="center"
        mt={{ base: 3, md: 0 }}
      >
        <button
          onClick={() => {
            if (currIndex !== 0) setCurrIndex((currIndex - 1) % 2);
          }}
        >
          {currIndex === 0 ? (
            <PaginationButton
              borderTopLeftRadius="md"
              borderBottomLeftRadius="md"
              isDisabled
            >
              <Icon as={FaChevronLeft} w={3.5} h={3.5} />
            </PaginationButton>
          ) : (
            <PaginationButton
              borderTopLeftRadius="md"
              borderBottomLeftRadius="md"
            >
              <Icon as={FaChevronLeft} w={3.5} h={3.5} />
            </PaginationButton>
          )}
        </button>
        {arr.map((item, index) => handlePage(index, item))}
        <button
          onClick={() => {
            if (currIndex !== 1) setCurrIndex((currIndex + 1) % 2);
          }}
        >
          {currIndex === 1 ? (
            <PaginationButton
              borderTopRightRadius="md"
              borderBottomRightRadius="md"
              isDisabled
            >
              <Icon as={FaChevronRight} w={3.5} h={3.5} />
            </PaginationButton>
          ) : (
            <PaginationButton
              borderTopRightRadius="md"
              borderBottomRightRadius="md"
            >
              <Icon as={FaChevronRight} w={3.5} h={3.5} />
            </PaginationButton>
          )}
        </button>
      </Flex>
    </Flex>
  );
};

const PaginationButton = ({ children, isDisabled, isActive, ...props }) => {
  const activeStyle = {
    bg: useColorModeValue("gray.300", "gray.700"),
  };

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight="1rem"
      height="2.5rem"
      opacity={isDisabled && 0.7}
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      border="1px solid"
      mr="-1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default PaginationContainer;
