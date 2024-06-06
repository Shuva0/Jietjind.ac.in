import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Divider,
  Flex,
} from "@chakra-ui/react";
import "./Sports.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import StatsSec from "../../../components/StatsSec/StatsSec";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";
import GalleryMess from "../../../components/GalleryMess/GalleryMess";
import SportsTable from "../../../components/SportsTable/SportsTable";

const ColoredDivider = ({ color, thickness }) => {
  return <Divider borderColor={color} borderWidth={thickness} />;
};

const Sports = () => {
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
    { head: "Student Centre", link: "/campus/scentre" },
    { head: "Amaya Mess", link: "/campus/mess" },
    { head: "Sports At JIET", link: "/campus/sports" },
    { head: "Recreational Room", link: "/campus/rroom" },
    { head: "Industrial Exposure", link: "/campus/iexposure" },
  ];

  const data = [
    {
      id: 1,
      title: "Sports",
      image: "/assets/images/images/sp10.jpg",
    },
    {
      id: 2,
      title: "Sports",
      image: "/assets/images/images/sp7.jpg",
    },
    {
      id: 3,
      title: "Sports",
      image: "/assets/images/images/sp3.jpg",
    },
    {
      id: 4,
      title: "Sports",
      image: "/assets/images/images/sp4.jpg",
    },
    {
      id: 5,
      title: "Sports",
      image: "/assets/images/images/sp5.jpg",
    },
    {
      id: 6,
      title: "Sports",
      image: "/assets/images/images/sp6.jpg",
    },
    {
      id: 7,
      title: "Sports",
      image: "/assets/images/images/sp2.jpg",
    },
    {
      id: 8,
      title: "Sports",
      image: "/assets/images/images/sp8.jpg",
    },
    // {
    //   id: 9,
    //   title: "Sports",
    //   image: "/assets/images/images/sp9.webp",
    // },
    {
      id: 10,
      title: "Sports",
      image: "/assets/images/images/sp1.jpg",
    },
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
                  height={"100%"}
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
                      <h1>Sports At JIET </h1>
                    </div>
                    <chakra.h2
                      color="gray.600"
                      fontSize="20px"
                      //   maxW="600px"
                      maxW="90%"
                      lineHeight={1.2}
                      mx="auto"
                      textAlign="left"
                    >
                      JIET institute indoor and outdoor sports competitions are
                      regular features of the institute The institute has
                      identified some games as official games of the institute
                      and has all the facilities for the same. Among these are
                      Basketball, Volleyball, Badminton, Table Tennis, chess,
                      Carom and khokho. Institute organises sports meet for its
                      students every year. Although the Inter branch
                      competitions are spread over the year. The winners are
                      presented award and certificate during the annual prize
                      distribution day. Besides morning walk, Yoga and Gymnasium
                      the hostlers play Carum, Tabletenis, Chess, Badminton and
                      other games for their physical make-up.
                    </chakra.h2>
                  </Stack>
                  <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                    paddingTop={"3%"}
                  >
                    <GridItem
                      colSpan={{ base: 4, md: 2 }}
                      bg="red.200"
                      rounded={6}
                    >
                      <Flex>
                        <img
                          src="/assets/images/images/temp1.svg"
                          alt="error"
                          width={"15%"}
                          style={{ paddingLeft: "2%", paddingRight: "2%" }}
                        />
                        <h1
                          style={{
                            textAlign: "center",
                            fontSize: "x-large",
                            color: "#1a3c80",
                            fontWeight: "550",
                          }}
                        >
                          Develop Fitness Habits
                        </h1>
                      </Flex>
                      <chakra.h2 textAlign={"start"} paddingLeft={"5%"}>
                        Students develop better fitness habits and coordination
                        by engaging in sports and exercises. Proper stretching
                        exercises and yoga from an early age help them in taking
                        care of their bodies while avoiding health problems. A
                        yoga session supervised by an instructor is one of the
                        most essential components of the Induction Program at
                        Jiet College.
                      </chakra.h2>
                    </GridItem>
                    <GridItem
                      colSpan={{ base: 4, md: 2 }}
                      bg="red.200"
                      rounded={6}
                    >
                      <Flex>
                        <img
                          src="/assets/images/images/2906496.svg"
                          alt="error"
                          width={"15%"}
                          style={{ paddingLeft: "2%", paddingRight: "2%" }}
                        />
                        <h1
                          style={{
                            textAlign: "start",
                            fontSize: "x-large",
                            color: "#1a3c80",
                            fontWeight: "550",
                          }}
                        >
                          Provides Mental And Emotional Benefits
                        </h1>
                      </Flex>
                      <chakra.h2 textAlign={"start"} paddingLeft={"5%"}>
                        Not only do sports provide great physical benefits but
                        also help students in boosting and maintaining mental
                        and emotional well-being. When you exercise on a daily
                        basis, your body releases chemicals called endorphins
                        which reduce stress and trigger a positive feeling in
                        the body. It has been proved that students who are
                        physically active and engage in sports are happier and
                        lead a less stressful life.
                      </chakra.h2>
                    </GridItem>
                    <GridItem
                      colSpan={{ base: 4, md: 2 }}
                      bg="red.200"
                      rounded={6}
                    >
                      <Flex>
                        <img
                          src="/assets/images/images/3079012.svg"
                          alt="error"
                          width={"15%"}
                          style={{ paddingLeft: "2%", paddingRight: "2%" }}
                        />
                        <h1
                          style={{
                            textAlign: "center",
                            fontSize: "x-large",
                            color: "#1a3c80",
                            fontWeight: "550",
                          }}
                        >
                          Build Specific Skills
                        </h1>
                      </Flex>
                      <chakra.h2 textAlign={"start"} paddingLeft={"5%"}>
                        Through sports, students are able to build a wide range
                        of abilities and skills such as leadership, confidence,
                        teamwork, patience, self-reliance, trust, and many more
                        which facilitate the overall development of an
                        individual. You become proactive when you need to solve
                        problems while playing on the court. Students also learn
                        to manage time between their lectures, sports, and
                        personal life.
                      </chakra.h2>
                    </GridItem>
                    <GridItem
                      colSpan={{ base: 4, md: 2 }}
                      bg="red.200"
                      rounded={6}
                    >
                      <Flex>
                        <img
                          src="/assets/images/images/753016.svg"
                          alt="error"
                          width={"15%"}
                          style={{ paddingLeft: "2%", paddingRight: "2%" }}
                        />
                        <h1
                          style={{
                            textAlign: "center",
                            fontSize: "x-large",
                            color: "#1a3c80",
                            fontWeight: "550",
                          }}
                        >
                          Maintains a Positive Spirit
                        </h1>
                      </Flex>
                      <chakra.h2 textAlign={"start"} paddingLeft={"5%"}>
                        One of the important advantages of College sports is
                        developing a positive spirit to achieve success while
                        playing for your College. This passion and positive
                        spirit help students achieve their career goals easily.
                        Through sports, they not only bring laurels to their
                        College but get an opportunity to earn a decent income
                        as well.
                      </chakra.h2>
                    </GridItem>
                  </Grid>
                  <div className="heading-css-1">
                    <h1 style={{ paddingTop: "2%" }}>LIST OF SPORTS </h1>
                  </div>
                  <SportsTable />
                  <div className="galleryContainer">
                    {data.map((item) => (
                      <div key={item.id} className="galleryItem">
                        <img src={item.image} alt="image error" />
                      </div>
                    ))}
                  </div>
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

export default Sports;
