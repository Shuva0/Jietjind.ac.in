import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import "./Mess.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import StatsSec from "../../../components/StatsSec/StatsSec";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";
import GalleryMess from "../../../components/GalleryMess/GalleryMess";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const Mess = () => {
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
    // { head: "Student Centre", link: "/campus/scentre" },
    { head: "Amaya Mess", link: "/campus/mess" },
    { head: "Sports At JIET", link: "/campus/sports" },
    // { head: "Recreational Room", link: "/campus/rroom" },
    // { head: "Industrial Exposure", link: "/campus/iexposure" },
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
                    {/* <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Explore TemplatesKart
            </chakra.h1> */}
                    <div className="heading-css-1">
                      <h1>Amaya Mess</h1>
                    </div>
                    {/* <div class="heading-css-2">
                      <h1>MENU</h1>
                    </div> */}
                    {/* <ColoredDivider color="red.700" thickness={1.5} /> */}
                    <GalleryMess />
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

export default Mess;
