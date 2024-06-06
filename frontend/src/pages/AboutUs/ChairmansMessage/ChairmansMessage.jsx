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
import "./ChairmansMessage.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const ChairmansMessage = () => {
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
      <Box
        className="main-box"
        // bgImage="../../../../public/assets/images/imagesUpdated/vision.png"
        // bgSize="cover"
        // bgPosition="center"
        // position="relative"
      >
        <Box
          className="child-1"
          py={8}
          textAlign="center"
          // bg="rgba(0, 0, 0, 0.6)"
        >
          <Box pb={8} textAlign="center">
            <Box>
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
                    {/* <div className="heading-css-1">
                      <h1>JIND EDUCATION TRUST</h1>
                    </div>
                    <div class="heading-css-2">
                      <h1>
                        JIND INSTITUTE OF ENGINEERING & TECHNOLOGY
                        <span>JIND POLYTECHNIC COLLEGE</span>
                        <span>JIET CONVENT SCHOOL</span>
                      </h1>
                    </div> */}
                    <ColoredDivider color="red.700" thickness={1.5} />
                    <br />
                    <Box display="flex" alignItems="center" ml={12}>
                      <Box mr={4}>
                        <Image
                          src="/assets/images/images/chairmanpic.jpg"
                          alt="Sh. Anil Kr Bansal"
                          borderRadius="full"
                          boxSize="130px"
                        />
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Sh. Anil Kr Bansal</Text>
                        <Text fontStyle="italic">
                          CHAIRMAN, JIET Group of Institutions
                        </Text>
                      </Box>
                    </Box>
                    <chakra.h2
                      color="gray.800"
                      fontSize="25px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                      fontWeight="600"
                      fontStyle="italic"
                    >
                      "The vision of 1998 has been soaring excellence and JIET
                      dedication since then"
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
                      In 1998, perseverance and high goals of founder Shri Anil
                      Kumar Bansal establishes JIND Education Trust Under his
                      dynamic leadership, in a span of over 2 decades, JIET
                      Group of Institutions has become one of the nation's most
                      trusted educational group. These institutions have
                      broadened the horizons of youth and enriched them with
                      their culture of excellence, social service and
                      inclusiveness. It was in the early 1990s that I was deeply
                      concerned about the regional imbalance in the facilities
                      available for Technical Education. No doubt there were
                      quite a few Engineering Colleges in our state and our
                      students were deprived of the fruits of Technical
                      Education. Jind Education Trust laid the foundation of
                      Jind Institute of Engineering & Technology (JIET) in 1998,
                      Jind Polytechnic College in 2007 (JPC) and JIET Convent
                      School in 2018.
                    </chakra.h2>
                    <br />
                    <Box textAlign="center">
                      <Image
                        src="/assets/images/imagesUpdated/campus4.jpg"
                        alt=""
                        maxW="75%"
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
                      Our Promise is to provide our students the best institute
                      which not only makes them financially independent, but
                      also a dignified and honourable Indian citizen. To provide
                      suitable placement to students college has established a
                      Training & Placement cell, so that, we can fulfil our aim
                      of 100% placement in the corporate world. In this regard,
                      Institute has also signed some MOU's with reputed
                      Corporate Houses. “I am endowing this institution to help
                      young men and-women to prepare themselves for a life of
                      usefulness in this competitive world and to help them to
                      build a foundation of a strong character and responsible
                      citizen & quot; I wish our students the best in their
                      endeavours in every walk of their life.
                    </chakra.h2>
                    <br />
                    <br />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="child-2">
          <Siders sideData={sideData} />
        </Box>
      </Box>
    </>
  );
};

export default ChairmansMessage;
