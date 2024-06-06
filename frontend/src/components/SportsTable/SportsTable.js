import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { FirstColumnData, SecondColumnData } from "./SportsData";

export default function SportsTable() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function getFont() {
    return windowSize.width > 768
      ? "20px"
      : windowSize.width < 500
      ? "10px"
      : "15px";
  }
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <chakra.h1
          textAlign="center"
          display="flex"
          justifyContent={"start"}
          alignItems="start"
          fontSize="2rem"
          fontWeight={700}
          color={"red"}
          m={12}
        >
          Explore the energy
        </chakra.h1>
        <Thead>
          {FirstColumnData.map((item, index) => {
            return (
              <Tr>
                <Th textAlign={"left"}>
                  <Flex>
                    {windowSize.width > 768 ? (
                      <img
                        width="70px"
                        height="50px"
                        src={item.url}
                        alt="sports image error"
                      />
                    ) : (
                      <p></p>
                    )}
                    <h3
                      style={{
                        paddingLeft: "2%",
                        paddingTop: "2%",
                        fontSize: getFont(),
                      }}
                    >
                      {item.label}
                    </h3>
                  </Flex>
                </Th>
                <Th textAlign={"right"}>
                  <Flex>
                    {windowSize.width > 768 ? (
                      <img
                        width="70px"
                        height="50px"
                        src={SecondColumnData[index].url}
                        alt="sports image error"
                      />
                    ) : (
                      <p></p>
                    )}
                    <h3
                      style={{
                        paddingLeft: "2%",
                        paddingTop: "2%",
                        fontSize: getFont(),
                      }}
                    >
                      {SecondColumnData[index].label}
                    </h3>
                  </Flex>
                </Th>
              </Tr>
            );
          })}
        </Thead>
      </Table>
    </TableContainer>
  );
}
