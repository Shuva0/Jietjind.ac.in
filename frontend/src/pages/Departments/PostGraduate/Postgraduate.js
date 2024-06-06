import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Image,
} from "@chakra-ui/react";
import "./Postgraduate.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import StatsSec from "../../../components/StatsSec/StatsSec";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const PostGraduate = () => {
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
          <Box pb={8} textAlign="center">
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
                    <div className="heading-css-1-pg">
                      <h1>Post Graduate</h1>
                    </div>
                    <div class="heading-css-2-pg">
                      <h1>M-TECH (2 Years)</h1>
                    </div>
                    <ColoredDivider color="red.700" thickness={1.5} />
                    <StatsSec />
                    <Box textAlign="center">
                      <Image
                        src="/assets/images/imagesUpdated/postgraduate.png"
                        alt="campus-img"
                        maxW={{ base: "90%", md: "50%" }}
                        mx="auto"
                        borderRadius="2rem"
                        my={4}
                      />
                    </Box>
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      Passed Bachelor's Degree in Engineering & Technology or
                      equivalent in the relevant field. Obtained at least 50%
                      marks (42.75% in case of candidates belonging to reserved
                      category) in the qualifying Examination.
                    </chakra.h2>
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

export default PostGraduate;
