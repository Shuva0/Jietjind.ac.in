import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Image, // Import Image component from Chakra UI
} from "@chakra-ui/react";
import "./MissionAndVision.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const MissionAndVision = () => {
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
                // maxW="100%"
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
                    <ColoredDivider color="red.700" thickness={1.5} />
                    <br />
                    <div className="heading-css-txt-mv image-to-get-1">
                      <h1>Vision</h1>
                    </div>
                    <br />
                    {/* Image component below Vision */}
                    {/* <Image
                      src="/assets/images/gallery/mv1.jpg"
                      alt="Vision Image"
                      w="100%"
                      h="25rem"
                      borderRadius="md"
                      boxShadow="md"
                      mb={4}
                    /> */}
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      ❝ To establish our selves as edifice of education where
                      knowledge illuminates the inner soul of every individual &
                      nurtures talents in heralds of wisdom and innovation. To
                      also prepare students with an integrated and technology
                      oriented education for better career opportunity. We seek
                      to establish ourselves as educators that expands the
                      realms of intelligence and abilities. ❞
                    </chakra.h2>

                    <br />
                    <div className="heading-css-txt-mv image-to-get-2">
                      <h1>Mission</h1>
                    </div>
                    <br />
                    {/* Image component below Mission */}
                    {/* <Image
                      src="/assets/images/gallery/mv2.jpg"
                      alt="Mission Image"
                      w="100%"
                      h="25rem"
                      borderRadius="md"
                      boxShadow="md"
                      mb={4}
                    /> */}
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      ⭐ Is to concur technical education in most advanced and
                      practical purpose and use rebust academic programs and
                      curriculum which brings the best in house placements.
                      Provide future oriented education to every individual by
                      constantly honing technical skills.
                      <br />⭐ Develop infrastructure to deliver learning of
                      global standards, we aspire to provide cutting edge
                      training that creates achievers out of every learner.
                    </chakra.h2>

                    <br />
                    <div className="heading-css-txt-mv image-to-get-3">
                      <h1>Goals</h1>
                    </div>
                    <br />
                    {/* Image component below Goals */}
                    {/* <Image
                      src="/assets/images/gallery/mv3.jpg"
                      alt="Goals Image"
                      w="100%"
                      h="25rem"
                      borderRadius="md"
                      boxShadow="md"
                      mb={4}
                    /> */}
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      ❝ JIET has added yet another milestone to achieve by
                      setting all its focus in just creating IMPACT in Students
                      life. We innovate, transform, indeed take outcomes which
                      transcends the educational journey of a student, Jietian.
                      Impact defines the driving force towards excellent
                      educational environment with edge of corporate experience
                      and well defined industrial exposure. ❞
                    </chakra.h2>

                    <br />
                    <div className="heading-css-txt-mv image-to-get-4">
                      <h1>Quality Policy</h1>
                    </div>
                    <br />
                    {/* Image component below Quality Policy */}
                    {/* <Image
                      src="/assets/images/gallery/mv4.jpg"
                      alt="Quality Policy Image"
                      w="100%"
                      h="25rem"
                      borderRadius="md"
                      boxShadow="md"
                      mb={4}
                    /> */}
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      ❝ We have set our goal to be Happiest Institute 100%
                      Conducive Learning & Productive Environment Committed to
                      create trained and highly professional technical
                      graduates, those are also posses positive attitude in
                      building a better nation, rather better world. ❞
                    </chakra.h2>

                    <br />
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

export default MissionAndVision;
