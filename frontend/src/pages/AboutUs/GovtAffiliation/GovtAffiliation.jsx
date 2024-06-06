import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Flex,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import "./GovtAffiliation.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const GovtAffiliation = () => {
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
      <Box minHeight="100vh" p={5}>
        <ScrollToTopOnMount />
        <TopHeader text1={institutionText} text2={aicteText} />
        <Box p={4} flex="2">
          <ColoredDivider color="red.700" thickness={1.5} />
          <br />
          <div className="heading-css-txt">
            <h1>Government Affiliation</h1>
          </div>
          <br />
        </Box>
        <div className="main-box">
          <Flex direction={{ base: "column", md: "row" }}>
            <Box p={2} flex={{ base: "1", md: "1" }}>
              <Stack spacing={4} direction="row" justifyContent="space-evenly">
                <Image
                  src="/assets/images/upload/kuk.png"
                  alt="Affiliated by KUK"
                  borderRadius="full"
                  boxSize={{ base: "10rem", md: "12rem" }}
                />
                <Image
                  alt="Affiliated by AICTE"
                  src="/assets/images/upload/aicte.png"
                  borderRadius="full"
                  boxSize={{ base: "10rem", md: "12rem" }}
                />
              </Stack>
            </Box>
            <Box p={2} flex={{ base: "1", md: "1" }}>
              <Stack spacing={4}>
                <Text
                  textAlign="justify"
                  color="gray.700"
                  fontSize={{ base: "15px", md: "20px" }}
                >
                  The JIET College Act has conferred specific powers and
                  functions on various bodies of the college. These bodies play
                  a crucial and effective role in framing college policies,
                  maintaining educational standards, and ensuring financial
                  probity and judicious use of resources. They also provide
                  policy directions, monitor implementation, and take corrective
                  measures when necessary.
                </Text>
                <Text
                  textAlign="justify"
                  color="gray.700"
                  fontSize={{ base: "15px", md: "20px" }}
                >
                  The JIET College Act has empowered various bodies to play
                  vital roles in framing policies, maintaining educational
                  standards, character development, and ensuring financial
                  probity. These bodies provide policy directions, monitor their
                  implementation, and take corrective measures when necessary.
                </Text>
              </Stack>
            </Box>
          </Flex>
        </div>
        <br />
        <br />
        <Heading as="h1" size="2xl" color="green.600" textAlign="center" mt={4}>
          Welcome to Green Campus of JIET
        </Heading>
        <br />
        <Box textAlign="center">
          <Image
            src="/assets/images/imagesUpdated/campus2.jpg"
            alt=""
            maxW="60%"
            mx="auto"
            borderRadius="2rem"
            my={4}
            mb={16}
          />
        </Box>
      </Box>
    </>
  );
};

export default GovtAffiliation;
