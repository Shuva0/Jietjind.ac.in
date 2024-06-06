import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Link,
  Text,
  Flex,
  IconButton,
  createIcon,
} from "@chakra-ui/react";
import NewsSideSlider from "../NewsSideSlider/NewsSideSlider";

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

const NewsScroller = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [scrolling, setScrolling] = useState(true);

  const news = useMemo(
    () => [
      "Campus Chronicles: React App Revolutionizes Student Experience!",
      "Exciting Enhancements Roll Out on College Website",
      "Local Tech Giant Snaps Up Campus Startup in Record Deal",
      "Meteorological Report: Forecast Predicts Clear Skies for Campus",
      "Economic Outlook: Campus Thriving Amid Global Trends",
      "Campus Chronicles: React App Revolutionizes Student Experience!",
      "Exciting Enhancements Roll Out on College Website",
      "Local Tech Giant Snaps Up Campus Startup in Record Deal",
      "Meteorological Report: Forecast Predicts Clear Skies for Campus",
      "Economic Outlook: Campus Thriving Amid Global Trends",
    ],
    []
  );

  useEffect(() => {
    let intervalId;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        setNewsIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % news.length;
          return newIndex < news.length / 2 ? newIndex : news.length - 1;
        });
      }, 5000);
    };

    const stopScrolling = () => clearInterval(intervalId);

    if (scrolling) {
      startScrolling();
    }

    return () => stopScrolling();
  }, [news, scrolling]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
    >
      <Box flex={{ base: "none", md: 1 }} p={2}>
        <Box
          position="relative"
          height={{ base: "200px", md: "300px" }}
          rounded="2xl"
          boxShadow="2xl"
          overflow="hidden"
        >
          <IconButton
            aria-label="Play Button"
            variant="ghost"
            _hover={{ bg: "transparent" }}
            icon={<PlayIcon w={12} h={12} />}
            size="lg"
            color="white"
            position="absolute"
            left="50%"
            top="50%"
            transform="translateX(-50%) translateY(-50%)"
          />
          <NewsSideSlider />
        </Box>
      </Box>
      <Box p={2} flex={{ base: 1, md: 1 }}>
        <Box
          overflow="hidden"
          height={{ base: "300px", md: "300px" }}
          width={{ base: "25rem", lg: "100%" }}
          borderRadius="md"
          boxShadow="lg"
          transition="box-shadow 0.3s ease-in-out"
        >
          <Text
            backgroundColor="teal.500"
            color="white"
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            paddingY="2"
          >
            Latest News
          </Text>
          <Box flex={1}>
            <Box
              overflow="hidden"
              height="100%"
              borderRadius="md"
              boxShadow="lg"
              transition="box-shadow 0.3s ease-in-out"
            >
              <Box
                display="flex"
                flexDirection="column"
                style={{
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateY(-${newsIndex * 50}px)`,
                }}
              >
                {news.map((headline, index) => (
                  <Link key={index} href="/news" textDecoration="none">
                    <Box
                      height="50px"
                      lineHeight="50px"
                      borderBottom="1px solid #ccc"
                      paddingX="4"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ background: "#f0f0f0" }}
                    >
                      {headline}
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default NewsScroller;
