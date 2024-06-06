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

const EceDepartment = () => {
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
              Department Of Electrical Engineering
            </Heading>
            <Box textAlign="center">
              <Image
                src="/assets/images/imagesUpdated/ece.png"
                alt="branch-img"
                maxW="75%"
                mx="auto"
                borderRadius="2rem"
                my={4}
              />
            </Box>
            <Text fontSize={{ base: "lg", md: "s" }} mb={6}>
              The department was established in 1998 with an intake of 60 seats.
              It is the ever demanding and growing branch with excellent
              placement record. At present we have 120 seats in B.Tech. and 24
              seats in M.Tech. in Electrical Engineering which was started in
              2014.
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
                    <span>&#8605;</span> Teaching beyond curriculum to enhance
                    practical knowledge.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Workshops, Seminars, Paper
                    presentations are arranged to enhance teaching learning
                    skills as well as knowledge upgradation.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Industrial visits and continuing
                    education program.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Use of Modern teaching aids like LCD
                    Projectors /OHPs,Power Analyzer and Laptops.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> 24 hrs Internet connectivity.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Wi-Fi system in the department.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Fully furnished Air-conditioned
                    computer lab.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Training to students for industrial
                    projects by PRIYA .
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> MAT lab with latest version.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Experts from industries &College to
                    deliver special.
                  </ListItem>
                  <ListItem>
                    <span>&#8605;</span> Special coaching facility for IES/ GATE
                    exams in the institute.
                  </ListItem>
                </List>
              </VStack>

              <VStack align="start" spacing={4} mb={8}>
                <Heading as="h4" size="lg" color="teal.500">
                  Scope for Higher Education
                </Heading>
                <Text fontSize="lg">
                  <span>&#8611;</span> Electrical Engineers can find
                  opportunities in any of the categories: <br />
                  <span>&#8611;</span> Power generation, power electronics,
                  computers, control systems, telecomm. and Bio-Medical,
                  distribution, power & electrical sub stations such as PWD,
                  MES, NTPC, NHPC, Reliance power, etc <br />
                  <span>&#8611;</span> Design, installation and maintenance
                  Engineer for telecommunications networks & wireless
                  transmission systems such as Telecom Industries.
                  <br />
                  <span>&#8611;</span> Industrial automation, robotics and
                  process control engineer,quality control Engg. in any
                  manufacturing industry.
                  <br />
                  <span>&#8611;</span> Software Engineer in an IT industry Like
                  TCS, WIPRO, HCL, CMC etc. <br />
                  <span>&#8611;</span> Design & Manufacturing Engineer for
                  appliance manufacturers, telecomm., computer industries etc.{" "}
                  <br />
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
                    <span>&#8618;</span> Electrical Technology Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Electrical Machines & Drives Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Power System Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Signal & System Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Power Electronics Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Electrical Measurement & Instrument Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Simulation Lab
                  </ListItem>
                  <ListItem>
                    <span>&#8618;</span> Project & Electrical Workshop Lab
                  </ListItem>
                </List>
              </VStack>

              <VStack align="start" spacing={4}>
                <Heading as="h4" size="lg" color="teal.500">
                  Scope for Electrical Engineers
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <span>&#8627;</span> After graduation as Electrical Engineer
                    one can look for M.Tech in any of the following areas:
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Power system
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Advanced Electrical Engineering
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Sensor Systems & Signal Processing
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Industrial automation and Robotics
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Instrumentation & Control Engineering
                  </ListItem>
                  <ListItem>
                    <span>&#8627;</span> Power conversion and systems
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

export default EceDepartment;
