import React, { useState } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
  TextProps,
  AspectRatio,
} from "@chakra-ui/react";
import "./TextVideo.css";

const TextVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="main-text-vid">
      <div className="vid-block">
        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Box
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            alignContent="center"
            paddingTop="4%"
            fallback={<Skeleton />}
          >
            <AspectRatio>
              <video
                style={{ borderRadius: "25px" }}
                title="naruto"
                src="/assets/images/jietimage/video.mp4"
                allowFullScreen
                muted
                controls={!isPlaying}
                onClick={handlePlay}
              />
            </AspectRatio>
          </Box>
        </Box>
      </div>
      <Stack direction="column" spacing={6} justifyContent="center" p={2}>
        <chakra.h1
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          Building Innovators and Leaders for a Changing World
        </chakra.h1>
        <Box color="gray.700">
          <Content>
            JIET since its inception in 1998, has been known to bring innovation
            in the field of education. In the current education environment,
            JIET has gone out of its way to bring the best practices in the
            field of education. As a progressive promoter, JIET group has been
            at the forefront of innovating its course content and pedagogy. With
            its 'Good to Great' philosophy, JIET programs have helped students'
            career start from where others want to be.
          </Content>
          <Content>
            'Good to Great' philosophy is the cornerstone of our thinking from
            academics to extra curricular activities and every other aspect
            important in the growth of each and every student. JIET have been at
            the forefront of industry institute engagement. Apart from regular
            lectures, we are the only one, hosting Campus Industrial and
            Placement Park.
          </Content>
        </Box>
      </Stack>
    </div>
  );
};

const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
      p={2}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default TextVideo;
