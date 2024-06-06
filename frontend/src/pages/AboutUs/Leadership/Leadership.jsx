import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import "./Leadership.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => (
  <Divider borderColor={color} borderWidth={thickness} />
);

const Leadership = () => {
  const [institutionText, setInstitutionText] = useState("");
  const [aicteText, setAICTEText] = useState("");
  const [ind, setInd] = useState(0);
  const [toStart, setStart] = useState(false);

  useEffect(() => {
    const institution = "JIET GROUP OF INSTITUTION";
    const insLength = institution.length;

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
    if (toStart) {
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
      <TopHeader className="TopHeader" text1={institutionText} text2={aicteText} />
      <div className="main-box" >
        <div className="child-1">
          <Box pb={8} textAlign="center">
            <div>
              <Stack pos="relative" height="20px" w="100%" />
              <Box
                boxShadow={useColorModeValue(
                  "0 4px 10px rgba(160, 174, 192, 0.6)",
                  "0 4px 10px rgba(9, 17, 28, 0.9)"
                )}
                bg={useColorModeValue("white", "gray.800")}
                p={{ base: 4, sm: 8 }}
                overflow="hidden"
                rounded="2xl"
                mx="auto"
              >
                {/* <ColoredDivider color="red.500" thickness={1} />
                <br /> */}
                <Box display="flex" justifyContent="center" mb={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image
                      src="/assets/images/images/first_img.jpg"
                      alt="Your Image Alt Text"
                      maxW="95%"
                      height="auto"
                      borderRadius="10%"
                      mt={12}
                    />
                    <Box textAlign="center" mt={2}>
                      <Box color="red" fontWeight="bold" fontSize="x-large">
                        <p style={{ margin: 0 }}>Dr. S.K. Singh</p>
                      </Box>
                      <Box fontSize="larger">
                        <p style={{ margin: 0}} >Principal, JIET</p>
                      </Box>
                    </Box>
                  </Box>
                  <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    spacing={5}
                    maxW="80%"
                    ml={4}
                  >
                    <chakra.h2
                      color="gray.600"
                      fontSize="18px"
                      maxW="90%"
                      lineHeight={1.6}
                      mx="auto"
                      textAlign="left"
                      textColor="black"
                      fontWeight="400"
                      mt={30}
                    >
                      ❝ Decent education is a passport to a good, comfortable,
                      and secured life. It enables youngsters to become
                      contributing members of society through knowledge, skills,
                      and character development. To achieve this, the management
                      has provided all infrastructure facilities required for
                      quality education. The institution has spacious
                      classrooms, fully equipped laboratories, workshops,
                      computer centres, and drawing halls. The institute has a
                      placement cell that interacts with leading industries,
                      arranges campus interviews, and offers ample job
                      opportunities for the students of all disciplines. Besides
                      bestowing engineering knowledge, great emphasis is laid on
                      character building and discipline among the students. Jind
                      Institute of Engineering & Technology is working
                      efficiently to achieve proficiency in technical education.
                      ❞
                    </chakra.h2>
                  </Stack>
                </Box>
                <br />
                <br />
                <Box display="flex" justifyContent="center" mb={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image
                      src="/assets/images/images/second_img.jpg"
                      alt="Your Image Alt Text"
                      maxW="95%"
                      height="auto"
                      borderRadius="10%"
                      mt={0}
                    />
                    <Box textAlign="center" mt={2}>
                      <Box color="red" fontWeight="bold" fontSize="x-large">
                        <p style={{ margin: 0 }}>Abhishek Bansal</p>
                      </Box>
                      <Box fontSize="larger">
                        <p style={{ margin: 0 }}>
                          Managing Director, JIET Group Of Institutions
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    spacing={5}
                    maxW="80%"
                    ml={4}
                  >
                    <chakra.h2
                      color="gray.600"
                      fontSize="18px"
                      maxW="90%"
                      lineHeight={1.6}
                      mx="auto"
                      textAlign="left"
                      textColor="black"
                      fontWeight="400"
                      mt={30}
                    >
                      ❝ This is my hearty welcome to you in joining India's
                      fastest-growing Institution and trusting the vision we
                      have been striving for two decades. We are dedicated to
                      achieving students' placement and academic growth with no
                      compromise on the overall development of students.
                      Accomplishing socially and morally dedicated students,
                      transforming young minds of India and abroad into much
                      more stable citizens. Our vision is to transform young
                      buds into glorious flowers by inculcating the seeds of
                      academic and technical proficiency. We disseminate
                      advanced studying techniques and foster industrial
                      training with so much perseverance that the careers of
                      students are always progressing. ❞
                    </chakra.h2>
                  </Stack>
                </Box>
                <br />
                <br />
                <Box display="flex" justifyContent="center" mb={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image
                      src="/assets/images/images/third_img.png"
                      alt="Your Image Alt Text"
                      maxW="95%"
                      height="auto"
                      borderRadius="10%"
                      mt={20}
                    />
                    <Box textAlign="center" mt={2}>
                      <Box color="red" fontWeight="bold" fontSize="x-large">
                        <p style={{ margin: 0 }}>Ashish Kumar</p>
                      </Box>
                      <Box fontSize="larger">
                        <p style={{ margin: 0 }}>
                          Principal, JIND Polytechnic College
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    spacing={5}
                    maxW="80%"
                    ml={4}
                  >
                    <chakra.h2
                      color="gray.600"
                      fontSize="18px"
                      maxW="90%"
                      lineHeight={1.6}
                      mx="auto"
                      textAlign="left"
                      textColor="black"
                      fontWeight="400"
                      mt={30}
                    >
                      ❝ The institute encourages students fo organize different
                      adivities independently or with the support and guidance
                      of faculty such as - management conventions, business plan
                      competitions, talks by leading professionals, cultural
                      events, sports acivifies for their holistic development
                      that adds the much needed value by inculcating in them
                      skills - organization, team building, decision making and
                      technical innovations. The institute hos dose
                      collaboration with the corporate world for mutual benefits
                      such as summer placements fostudents, introduction of need
                      based new courses and inputsin the curricula, guest
                      speakers, technical workshops and management development
                      programmes to meet manpower development needs of the
                      corporate sector as also intellectual inputs by way of
                      consulting for solving their live problems by young minds
                      and experienced faculty. It has been especially nurturing
                      relationships with the corporate world fo extend best of
                      placement opportunities toifs graduates. ❞
                    </chakra.h2>
                  </Stack>
                </Box>
                <br />
                <br />
                <Box display="flex" justifyContent="center" mb={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image
                      src="/assets/images/images/fourth_img.jpg"
                      alt="Your Image Alt Text"
                      maxW="95%"
                      height="auto"
                      borderRadius="10%"
                      mt={10}
                    />
                    <Box textAlign="center" mt={2}>
                      <Box color="red" fontWeight="bold" fontSize="x-large">
                        <p style={{ margin: 0 }}>Somnath Das</p>
                      </Box>
                      <Box fontSize="larger">
                        <p style={{ margin: 0 }}>
                          Director Development, JIET Group Of Institutions
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    spacing={5}
                    maxW="80%"
                    ml={4}
                  >
                    <chakra.h2
                      color="gray.600"
                      fontSize="18px"
                      maxW="90%"
                      lineHeight={1.6}
                      mx="auto"
                      textAlign="left"
                      textColor="black"
                      fontWeight="400"
                      mt={30}
                    >
                      ❝ The institute fosters close collaborations with
                      corporate partners to offer students valuable
                      opportunities for internships, introduce relevant courses
                      tailored to industry needs, host industry experts for
                      guest lectures, conduct specialized workshops, and
                      facilitate management training programs. These
                      collaborations not only benefit students by providing
                      real-world exposure but also contribute to addressing the
                      evolving needs of the corporate sector. ❞
                      <br />
                      The institute places great emphasis on cultivating strong
                      ties with corporate entities to ensure that its graduates
                      are well-equipped for successful career placements. ❞
                    </chakra.h2>
                  </Stack>
                </Box>
                <br />
                <br />
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

export default Leadership;
