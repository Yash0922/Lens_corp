import React, { useState } from "react";
import { Box, Text, Button, Heading, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { color, transform } from "framer-motion";
import ServiceBox from "../components/ServiceBox";
function Home(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
 
  const serviceData = [
    {
      id: 1,
      title: "Biometrics",
      description:
        "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
      textColor: "rgb(1, 201, 155)",
      hoverColor: "rgb(1, 201, 155)",
      hoverOutlineColor: "rgb(1, 201, 155)",
      blurColor: "#01c99b",
      blurTop: "-40px",
      blurLeft: "-40px",
      blurClassName: "greenBlur",
    },
    {
      id: 2,
      title: "Image Analysis",
      description:
        "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
      textColor: "rgb(63, 189, 241)",
      hoverColor: "rgb(63, 189, 241)",
      hoverOutlineColor: "rgb(63, 189, 241)",
      blurColor: "#00b2fc",
      blurTop: "-50px",
      blurRight: "-90px",
      blurClassName: "blueBlur",
    },
    {
      id: 3,
      title: "Cross-Media Translation",
      description:
        "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
      textColor: "rgb(255, 96, 95)",
      hoverColor: "rgb(255, 96, 95)",
      hoverOutlineColor: "rgb(255, 96, 95)",
      blurColor: "#ff6160",
      blurBottom: "-100px",
      blurClassName: "redBlur",
    },
    {
      id: 4,
      title: "3D Modelling and Design.",
      description:
        "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
      textColor: "rgb(255, 159, 49)",
      hoverColor: "rgb(255, 159, 49)",
      hoverOutlineColor: "rgb(255, 159, 49)",
      blurColor: "#fbc976",
      blurRight: "-70px",
      blurClassName: "yelloBlur",
    },
  ]

  return (
    <Box>
      <Box
        className="firstContainer"
        bgImage="url('https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="80vh"
        p={"10%"}
        pl={"15%"}
        d="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading
          m={"0 0 10px"}
          fontSize={"3.7rem"}
          as="h1"
          fontWeight={600}
          color="black"
          fontFamily={"Raleway,sans-serif"}
        >
          We are at the <br /> forefront of AI
        </Heading>
        <Text
          textAlign={"start"}
          mb={"20px"}
          fontSize={"1.2rem"}
          mt={4}
          fontWeight={300}
          color="black"
          fontFamily={"Poppins,sans-serif"}
        >
          From Conserving Wildlife to Automatically <br />
          Generating Caricatures{" "}
          <Text as={"span"} fontWeight={"bold"}>
            {" "}
            - We Do It All
          </Text>
        </Text>
        <Box
          as="button"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          p="0.6rem 2rem"
          m="10px 0"
          borderRadius="10px"
          fontSize="1.2rem"
          fontWeight="semibold"
          bg="#181111"
          borderColor="#ccd0d5"
          color="#fff"
          _hover={{
            bg: "#fff",
            borderColor: "#000",
            color: "#000",
            p: "0.6rem 2.25rem",
          }}
          _active={{
            bg: "#fff",
            transform: "scale(0.98)",
            borderColor: "#000",
          }}
        >
          Learn More
        </Box>
      </Box>

      <Box
        className="secondContainer"
        p={"5rem 0"}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="sec-one"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          mb={"5rem"}
        >
          <Heading
            as={"h1"}
            fontSize={"64px"}
            textAlign={"center"}
            fontWeight={"600"}
            fontFamily={"Raleway,sans-serif"}
          >
            About Us
          </Heading>
          <Box
            w={"165px"}
            h={"8px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>
        <Box
          className="sec-two"
          bg={"#e2f2ff"}
          display={"flex"}
          flexDirection={"row-reverse"}
          w={"80%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"2rem 3rem"}
          borderRadius={"16.433px"}
          transition="all 0.3s "
          _hover={{
            transform: "scale(1.05)",
          }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <Box
            className="Image_team"
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"10px"}
            alignItems={"center"}
            transition="all 0.3s "
            p={isHovered2 ? null : "10px"}
            bg={"#fff"}
          >
            <Image
              w={400}
              h={400}
              objectFit={"cover"}
              borderRadius={"10px"}
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              alt="about"
            />
          </Box>
          <Box
            className="about_team"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Heading
              fontSize={"2.8rem"}
              fontWeight={"600"}
              m={"0 0 2rem"}
              fontFamily={"Poppins,sans-serif"}
              as={"h3"}
            >
              Welcome To LENS
            </Heading>
            <Text
              fontFamily={"Poppins,sans-serif"}
              fontSize={"1rem"}
              fontWeight={"300"}
              mt={".2rem"}
              opacity={".8"}
              p={".2rem"}
              w={"75%"}
              lineHeight={"1.6"}
            >
              We put our hearts, souls and sweat into designing and <br />{" "}
              developing custom AI - powered solutions for your business so you
              don't have to.
            </Text>
            <Box
              as="button"
              lineHeight="1.2"
              display={"flex"}
              justifyContent={"center"}
              transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              gap="15px"
              mt="1rem"
              mb="5rem"
              p="10px 20px"
              m="10px 0"
              borderRadius="10px"
              fontSize="18px"
              fontWeight="semibold"
              bg="transparent"
              borderColor="#000"
              color="#000"
              _hover={{
                bg: "#000",
                borderColor: "#000",
                color: "#fff",
                p: "10px 20px",
              }}
              _active={{
                bg: "#fff",
                transform: "scale(0.98)",
                borderColor: "#000",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Learn More
              {isHovered && <ArrowForwardIcon boxSize={6} />}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box fontFamily={"Poppins,sans-serif"} className="ThirdContainer" display={"grid"} placeItems={"center"} pb={"4rem"} bg={"#fcfbf7"} overflow={"hidden"}>
        <Box
          className="third-one"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"5px"}
          justifyContent={"center"}
        >
          <Heading
            as={"h2"}
            fontFamily={"Raleway,sans-serif"}
            textTransform={"uppercase"}
            letterSpacing={"1.9px"}
            lineHeight={"normal"}
            fontWeight={"600"}
            fontStyle={"normal"}
            textAlign={"center"}
            fontSize={"20px"}
            m={0}
          >
            Services
          </Heading>
          <Box w={"75px"} h={"4px"}   borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }></Box>
        </Box>
        <Text w={"80%"} fontFamily={"Poppins,sans-serif"} textAlign={"center"} fontSize={"58px"} fontStyle={"normal"} fontWeight={"400"} m={"58px 0px 80px"} lineHeight={"normal"}>We provide Artificial Intelligence Services</Text>
        <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} gridGap={"20px"}>
          {serviceData.map((data, index) => (
            <ServiceBox key={index} data={data} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
