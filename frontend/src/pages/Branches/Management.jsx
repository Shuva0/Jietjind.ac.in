import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import TopHeader from "../../components/TopHeaderAbout/topHeaderAbout";
import BranchSider from "./BranchSider";

const ManagementDepartment = () => {
  const [institutionText, setInstitutionText] = useState("");
  const [aicteText, setAICTEText] = useState("");
  const [ind, setInd] = useState(0);
  const [toStart, setStart] = useState(false);
  useEffect(() => {
    const institution = "JIET GROUP OF INSTITUTION";
    var insLength = institution.length;

    setTimeout(() => {
      if (ind !== insLength) {
        setInstitutionText(institutionText + institution[ind]);
        setInd(ind + 1);
      }
    }, 100);
    if (institutionText.length === 25) {
      setStart(true);
      setInd(0);
    }
  }, [institutionText]);

  useEffect(() => {
    if (toStart === true) {
      const aicte = "APPROVED BY AICTE";
      const aicLength = aicte.length;
      setTimeout(() => {
        if (ind !== aicLength) {
          setAICTEText(aicteText + aicte[ind]);
          setInd(ind + 1);
        }
      }, 100);
    }
  }, [aicteText, toStart]);
  return (
    <>
      <TopHeader text1={institutionText} text2={aicteText} />
      <div className="main-box1">
        <div className="child-11">
          <Box
            p={8}
            m={4}
            boxShadow="lg"
            borderRadius="md"
            bg="white"
            maxW="85%"
            mx="auto"
          >
            <Heading as="h1" size="xl" mb={4} color="teal.500">
              Department of Management Studies
            </Heading>
            <Box textAlign="center">
              <Image
                src="/assets/images/imagesUpdated/Management.png"
                alt="branch-img"
                maxW="75%"
                mx="auto"
                borderRadius="2rem"
                my={4}
              />
            </Box>
            <Text fontSize={{ base: "lg", md: "s" }} mb={6}>
              Department of Management Studies offers Graduation in Business
              Administration. It is a 3 year degree course including Management
              and Organization Behavior along with Business Studies and
              Economics as the main subjects. It is the course which lays
              foundation for Masters in Management, Finance Control,
              International Business, Retail Management etc.
            </Text>
            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <VStack align="start" spacing={4} mb={8}>
                <Heading as="h4" size="lg" color="teal.500">
                  Salient Features
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <span>&#8605;</span> Study through Management Games
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Case Studies
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Industrial Visits
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Expert Lectures from Industries
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Customized events like Leadership
                    Summit, Business Plan Competition etc
                  </ListItem>
                </List>
              </VStack>
            </Flex>
          </Box>
        </div>
        <div className="child-21">
          <BranchSider />
        </div>
      </div>
    </>
  );
};

export default ManagementDepartment;
