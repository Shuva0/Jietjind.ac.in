import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import "./UnderGraduate.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import StatsSec from "../../../components/StatsSec/StatsSec";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const UnderGraduate = () => {
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

  const sideData = [
    { head: "Post Graduate", link: "/programs/postgraduate" },
    { head: "Under Graduate", link: "/programs/undergraduate" },
    { head: "Diploma", link: "/programs/diploma" },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <TopHeader text1={institutionText} text2={aicteText} />
      <div className="main-box1">
        <div className="child-11">
          <Box textAlign="center">
            <div>
              <Stack pos="relative" height="200px" w="100%"></Stack>
              <Box
                // maxW="8xl"
                maxW="100%"
                p={4}
                isolation="isolate"
                zIndex={3}
                mt="-10rem"
                marginInline="auto"
              >
                <Box
                  boxShadow={useColorModeValue(
                    "0 4px 6px rgba(160, 174, 192, 0.6)",
                    "0 4px 6px rgba(9, 17, 28, 0.9)"
                  )}
                  bg={useColorModeValue("white", "gray.800")}
                  p={{ base: 4, sm: 8 }}
                  overflow="hidden"
                  rounded="2xl"
                  mx="auto"
                >
                  <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    spacing={5}
                    maxW="100%"
                  >
                    {/* <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Explore TemplatesKart
            </chakra.h1> */}
                    <div className="heading-css-1-ug">
                      <h1>Under Graduate</h1>
                    </div>
                    <div class="heading-css-2-ug">
                      <h1>B-TECH (4 Years)</h1>
                    </div>
                    <ColoredDivider color="red.700" thickness={1.5} />
                    <Grid
                      h={{ base: "500px", md: "220px" }}
                      templateRows="repeat(2, 1fr)"
                      templateColumns="repeat(4, 1fr)"
                      gap={4}
                    >
                      <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#1a3c80"}
                          fontSize={"large"}
                        >
                          Computer Science & Engineering
                        </chakra.h2>
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#000000"}
                          fontSize={"large"}
                        >
                          Specialization in :
                        </chakra.h2>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Software Development Program
                        </chakra.h4>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Cloud Technology & Information Science
                        </chakra.h4>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Data Science
                        </chakra.h4>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#1a3c80"}
                          fontSize={"large"}
                        >
                          Electrical Engineering
                        </chakra.h2>
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#000000"}
                          fontSize={"large"}
                        >
                          Specialization in :
                        </chakra.h2>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Internet of Things
                        </chakra.h4>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#1a3c80"}
                          fontSize={"large"}
                        >
                          Mechanical Engineering
                        </chakra.h2>
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#000000"}
                          fontSize={"large"}
                        >
                          Specialization in :
                        </chakra.h2>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Automobile Engineering
                        </chakra.h4>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#1a3c80"}
                          fontSize={"large"}
                        >
                          Civil Engineering
                        </chakra.h2>
                        <chakra.h2
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          fontWeight={"700"}
                          color={"#000000"}
                          fontSize={"large"}
                        >
                          Specialization in :
                        </chakra.h2>
                        <chakra.h4
                          textAlign={"start"}
                          paddingLeft={"4%"}
                          color={"#000000"}
                        >
                          <span
                            style={{
                              fontSize: "x-large",
                              color: "green",
                              fontWeight: "600",
                            }}
                          >
                            &#8680;
                          </span>{" "}
                          Archicture
                        </chakra.h4>
                      </GridItem>
                    </Grid>
                    <br />
                    <Box textAlign="center">
                      <Image
                        src="/assets/images/imagesUpdated/undergraduate.png"
                        alt="campus-img"
                        maxW={{ base: "90%", md: "50%" }}
                        mx="auto"
                        borderRadius="2rem"
                        mb={4}
                      />
                    </Box>
                    <br />
                    <div>
                      <chakra.h1
                        style={{
                          color: "#1a3c80",
                          textAlign: "center",
                          fontSize: "x-large",
                          fontWeight: "600",
                        }}
                        marginTop={{ base: "40%", md: "1%" }}
                      >
                        Eligibility Criteria
                      </chakra.h1>
                      <br />
                      <chakra.h2
                        color="gray.600"
                        fontSize="20px"
                        //   maxW="600px"
                        maxW="90%"
                        lineHeight={1.2}
                        mx="auto"
                        textAlign="left"
                      >
                        The Candidate should have passed 10+2 examination with
                        Physics, Mathematics and Chemistry as compulsory
                        subjects along with one of the English/ Biotechnology/
                        Biology/ Technical Vocational subject. Obtained at least
                        50% marks (42.75% in case of candidates belonging to
                        reserved category) in the above subjects taken together.
                      </chakra.h2>
                      <br />
                      <br />
                      <h1
                        style={{
                          color: "#000000",
                          textAlign: "center",
                          fontSize: "x-large",
                          fontWeight: "700",
                        }}
                      >
                        OR
                      </h1>
                      <br />
                      <chakra.h2
                        color="gray.600"
                        fontSize="20px"
                        //   maxW="600px"
                        maxW="90%"
                        lineHeight={1.2}
                        mx="auto"
                        textAlign="left"
                      >
                        Passed Diploma examination with at least 50% marks (40%
                        in case of candidates belonging to reserved category),
                        subject to vacancies in the First Year, in case the
                        vacancies at lateral entry are exhausted.
                      </chakra.h2>
                      <br />
                      <div class="heading-css-2-ug">
                        <h1>B-TECH (Lateral Entry 2nd Year)</h1>
                      </div>
                      <br />
                      <ColoredDivider color="red.700" thickness={1.5} />
                      <br />
                      <Grid
                        h={{ base: "500px", md: "220px" }}
                        templateRows="repeat(2, 0.3fr)"
                        templateColumns="repeat(4, 1fr)"
                        gap={4}
                        className="int-grid"
                      >
                        <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                          <h1>Computer Science & Engineering</h1>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                          <h1>Electrical Engineering</h1>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                          <h1>Mechanical Engineering</h1>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, md: 2 }} bg="red.200">
                          <h1>Civil Engineering</h1>
                        </GridItem>
                      </Grid>
                      <h1
                        style={{
                          color: "#1a3c80",
                          textAlign: "center",
                          fontSize: "x-large",
                          fontWeight: "600",
                        }}
                      >
                        Eligibility Criteria
                      </h1>
                      <chakra.h4
                        textAlign={"start"}
                        paddingLeft={"4%"}
                        color={"#000000"}
                      >
                        <span
                          style={{
                            fontSize: "x-large",
                            color: "green",
                            fontWeight: "600",
                          }}
                        >
                          &#8680;
                        </span>{" "}
                        Passed Diploma examination with at least 50% marks
                        (42.75% in case of candidates belonging to reserved
                        category) in appropriate branch of Engineering and
                        Technology.
                      </chakra.h4>
                      <br />
                      <chakra.h4
                        textAlign={"start"}
                        paddingLeft={"4%"}
                        color={"#000000"}
                      >
                        <span
                          style={{
                            fontSize: "x-large",
                            color: "green",
                            fontWeight: "600",
                          }}
                        >
                          &#8680;
                        </span>{" "}
                        Passed B.Sc. Degree from a recognised college as defined
                        by UGC, with at least 45% marks (40% in case of
                        candidates belonging to reserved category) and passed
                        10+2 examination with Mathematics as a subject.
                      </chakra.h4>
                      <br />
                      <chakra.h4
                        textAlign={"start"}
                        paddingLeft={"4%"}
                        color={"#000000"}
                      >
                        <span
                          style={{
                            fontSize: "x-large",
                            color: "green",
                            fontWeight: "600",
                          }}
                        >
                          &#8680;
                        </span>{" "}
                        Provided that the students belonging to B.Sc. Stream,
                        shall clear the subjects Engineering Graphics/
                        Engineering Drawing and Engineering Mechanics of the
                        First Year Engineering Programme along with the Second
                        year subjects.
                      </chakra.h4>
                      <br />
                      <chakra.h4
                        textAlign={"start"}
                        paddingLeft={"4%"}
                        color={"#000000"}
                      >
                        <span
                          style={{
                            fontSize: "x-large",
                            color: "green",
                            fontWeight: "600",
                          }}
                        >
                          &#8680;
                        </span>{" "}
                        Provided that the students belonging to B.Sc. Stream
                        shall be considered only after filling the supernumerary
                        seats in this category with students belonging to the
                        Diploma stream.
                      </chakra.h4>
                      <br />
                    </div>
                    <br />

                    <br />

                    <br />
                    {/* <Stack
                      direction={{ base: "column", md: "row" }}
                      spacing={3}
                      mx="auto"
                    >
                      <chakra.button
                        h={10}
                        px={6}
                        color="white"
                        fontSize="md"
                        variant="solid"
                        rounded="md"
                        lineHeight={1}
                        bg="blue.400"
                        _hover={{ bg: "blue.600" }}
                      >
                        View Components
                      </chakra.button>
                      <Button
                        leftIcon={<FaGithub />}
                        as={Link}
                        href="#"
                        rounded="md"
                        colorScheme="gray"
                        variant="solid"
                      >
                        Github Discussions
                      </Button>
                      <Button
                        leftIcon={<BsDiscord />}
                        as={Link}
                        href="#"
                        rounded="md"
                        color="white"
                        variant="solid"
                        colorScheme="purple"
                        _hover={{ bg: "purple.600" }}
                      >
                        Discord community
                      </Button>
                    </Stack> */}
                    <br />
                    <br />
                  </Stack>
                </Box>
              </Box>
            </div>
          </Box>
        </div>
        <div className="child-21">
          <Siders sideData={sideData} />
        </div>
      </div>
    </>
  );
};

export default UnderGraduate;
