import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  SimpleGrid,
  Container,
  Stack,
} from "@chakra-ui/react";
// Here we have used framer-motion package for animations
import { motion } from "framer-motion";
// Here we have used react-icons package for the icons
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { IoBusinessSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";

const statData = [
  {
    id: 1,
    label: "Computer Science & Engineering",
    score: "",
    icon: IoBusinessSharp,
    percentage: "",
  },
  {
    id: 2,
    label: "Electrical Engineering",
    score: "",
    icon: MdOutlineElectricalServices,
    percentage: "",
  },
];

const StatsSec = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={5} mt={6} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Card = ({ data }) => {
   const bgColor = useColorModeValue("transparent");
   const hoverColor = useColorModeValue(
     "rgba(239, 68, 68, 0.2)",
     "rgba(239, 68, 68, 0.2)"
   );
  return (
    <motion.div
      bgColor={bgColor}
      whileHover={{ translateY: -5, backgroundColor: hoverColor }}
    >
      <Stack
        direction="column"
        rounded="md"
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "2px 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        w="100%"
        textAlign="left"
        align="start"
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack
          py={6}
          px={5}
          spacing={4}
          borderLeft={"4px solid black"}
          borderBottom={"4px solid #ec3237"}
          borderTop={"4px solid black"}
          borderRight={"4px solid #ec3237"}
          bg={useColorModeValue("transparent", "gray.800")}
          w="100%"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="#ec3237"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text
              as="h3"
              fontSize="lg"
              fontWeight={"500"}
              noOfLines={2}
              color="black"
            >
              {data.label}
            </Text>
            <HStack spacing={2}>
              <Text as="h2" fontSize="4xl" color="green.400">
                {data.score}
              </Text>
              {/* <Flex>
                <Icon as={BsArrowUpShort} w={6} h={6} color="green.400" />
                <Text as="h2" fontSize="md" color="white">
                  {data.percentage}
                </Text>
              </Flex> */}
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default StatsSec;
