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

const statData = [
  {
    id: 1,
    label: "Placements",
    score: "900+",
    icon: IoBusinessSharp,
    percentage: "10%",
  },
  {
    id: 2,
    label: "Students",
    score: "4000+",
    icon: PiStudentBold,
    percentage: "30%",
  },
  {
    id: 3,
    label: "Programs",
    score: "10+",
    icon: GiNotebook,
    percentage: "2%",
  },
];

const StatsWithIcons = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Card = ({ data }) => {
  return (
    <motion.div whileHover={{ translateY: -5 }}>
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
          bg={useColorModeValue("black", "gray.800")}
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
            <Text as="h3" fontSize="md" noOfLines={2} color="white">
              {data.label}
            </Text>
            <HStack spacing={2}>
              <Text as="h2" fontSize="lg" color="green.400">
                {data.score}
              </Text>
              <Flex>
                <Icon as={BsArrowUpShort} w={6} h={6} color="green.400" />
                <Text as="h2" fontSize="md" color="white">
                  {data.percentage}
                </Text>
              </Flex>
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default StatsWithIcons;
