import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import "./Overview.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const Overview = () => {
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
    { head: "Overview", link: "/aboutus/overview" },
    { head: "Mission & Vision", link: "/aboutus/mission" },
    { head: "Leadership", link: "/aboutus/leadership" },
    { head: "Chairman Message", link: "/aboutus/cmessage" },
    { head: "Govt. Affiliation", link: "/aboutus/affiliations" },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <TopHeader text1={institutionText} text2={aicteText} />
      <div className="main-box">
        <div className="child-1">
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
                    {/* <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Explore TemplatesKart
            </chakra.h1> */}
                    <div className="heading-css-1">
                      <h1>JIND EDUCATION TRUST</h1>
                    </div>
                    <div class="heading-css-2">
                      <h1>
                        JIND INSTITUTE OF ENGINEERING & TECHNOLOGY
                        <span>JIND POLYTECHNIC COLLEGE</span>
                        <span>JIET CONVENT SCHOOL</span>
                      </h1>
                    </div>
                    <br />
                    <ColoredDivider color="red.700" thickness={1.5} />
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
                      JIET since its inception in 1998, has been known to bring
                      innovation in the feld of education. In the current
                      education environment, JIET has gone out of its way to
                      bring the best practices in the feld of education. As a
                      progressive promoter, JIET group has been at the forefront
                      of innovating its course content and pedagogy. With its
                      'Good to Great' philosophy, JIET programs have helped
                      students' career start from where others want to be.
                    </chakra.h2>
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
                      'Good to Great' philosophy is the cornerstone of our
                      thinking from academics to extra curricular activities and
                      every other aspect important in the growth of each and
                      every student. JIET have been at the forefront of industry
                      institute engagement. Apart from regular lectures, we are
                      the only one, hosting Campus Industrial and Placement
                      Park, where companies are running their offices from
                      within the campus and hiring our students in cutting edge
                      work. It is not just a degree but complete learning
                      experience with strong mentoring network of top executives
                      from the country.
                    </chakra.h2>
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
                      Jind Institute of Engineering and Technology (JIET),
                      functions under the patronage of Jind Education Trust. It
                      is a self Financing institute established in 1998. The
                      institute is committed to the development of professional
                      engineers and managers to face the challenges of the
                      rapidly changing world. The institute is approved by
                      Ministry of HRD, AICTE New Delhi and Govt. of Haryana and
                      affiliated to Kurukshetra College, Kurukshetra. Apart from
                      providing high quality education trust also takes interest
                      in social service and socioeconomic development of the
                      region. The campus of JIET is delightfully planned and
                      adorned with impressive buildings, lawns and shaded
                      avenues.
                    </chakra.h2>
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
        <div className="child-2">
          <Siders sideData={sideData} />
        </div>
      </div>
    </>
  );
};

export default Overview;
