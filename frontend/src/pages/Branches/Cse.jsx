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

const CseDepartment = () => {
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
              Department of Computer Science & Engineering
            </Heading>
            <Box textAlign="center">
              <Image
                src="/assets/images/imagesUpdated/cse.png"
                alt="branch-img"
                maxW="75%"
                mx="auto"
                borderRadius="2rem"
                my={4}
              />
            </Box>
            <Text fontSize={{ base: "lg", md: "s" }} mb={6}>
              Welcome to the Department of Computer Science & Engineering at
              Jind Institute of Engineering and Technology, Jind. Established in
              1998, our department is committed to training quality engineers.
              We provide a range of services, including seminars, corporate
              training, and workshops, all conducted by experts, to prepare our
              students for successful careers as future software professionals.
              Our Personality Development Programs (PDP) classes are designed to
              enhance their technical skills and overall professional growth.
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
                    <span>&#8605;</span> Team of Qualified and Experienced
                    Faculty members.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Connectivity to Internet through OFC
                    based 4Mbps lease line.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> MOU with various Industries like Priya
                    Industries Ltd, Wipro, TCS ION, Allbiz, Cognizant, etc.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> More than 600 computers of various
                    brands and reputed companies.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Wi-Fi facility is available for
                    students.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Regular Workshop/Seminars.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Visiting Faculties from reputed
                    Institutes like DCE, NIT, NSIT, IIT, and Universities
                    regularly visit the department.
                  </ListItem>
                </List>
              </VStack>

              <VStack align="start" spacing={4} mb={8}>
                <Heading as="h4" size="lg" color="teal.500">
                  Scope for Higher Education
                </Heading>
                <Text fontSize="lg">
                  <span>&#8611;</span> Masters of Technology <br />
                  <span>&#8611;</span> Masters in Control Engineering <br />
                  <span>&#8611;</span> Post Graduate in System Maintenance
                  Engineering
                  <br />
                  <span>&#8611;</span> CCNA, MCSE, MCSP <br />
                  <span>&#8611;</span> Web Designer <br />
                  <span>&#8611;</span> Software Developer <br />
                  <span>&#8611;</span> Software Testing, Editing, and Rating{" "}
                  <br />
                  <span>&#8611;</span> Language Lab
                </Text>
              </VStack>
            </Flex>

            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <VStack align="start" spacing={4} mb={8}>
                <Heading as="h4" size="lg" color="teal.500">
                  Major Labs
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <span>&#8618;</span> General Purpose Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Central Computing Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Advance Technology Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Programming Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Project Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Linux & Unix Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> System Programming Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Network Programming Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Hardware Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Language Lab
                  </ListItem>
                </List>
              </VStack>

              <VStack align="start" spacing={4}>
                <Heading as="h4" size="lg" color="teal.500">
                  Scope for Computer Engineers
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <span>&#8627;</span> Software developer/programmer in
                    software companies.
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Hardware Engineer in computer
                    manufacturing companies.
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Maintenance/service engineer in units
                    using computers.
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Network engineer in units using
                    computers.
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Entrepreneurship opportunities.
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

export default CseDepartment;
