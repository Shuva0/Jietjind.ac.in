import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      _hover={{
        bg: "linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)",
        color: "White",
        cursor: "pointer",
      }}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Link to={href}>{icon}</Link>
        </Flex>

        <Box mt={2}>
          <Heading size="md">
            <Link to={href}>{heading}</Link>
          </Heading>
          <Text mt={1} fontSize={"sm"}>
            <Link to={href}>{description}</Link>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
const icons = [FcAssistant, FcCollaboration, FcDonate, FcManager, FcAbout];

export default function Siders({ sideData }) {
  console.log(sideData);
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {sideData.map((item, index) => {
            return (
              <Card
                heading={item.head}
                icon={<Icon as={icons[index]} w={10} h={10} />}
                href={item.link}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
