import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Heading,
  Image,
  AspectRatio,
  FormControl,
  Input,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

import { css, keyframes } from "@emotion/react";
import {
  ArrowForwardIcon,
  CheckIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

import GroupIcon from "../assets/groupIcon.svg";
import SecurityIcon from "../assets/securityIcon.svg";
import WeightIcon from "../assets/WeightIIcon.svg";
import ServiceBox from "../components/ServiceBox";

const imageAnimation1 = keyframes`0% {opacity: 0;} 25% {opacity: 1;} 50% {opacity: 0;} 75% {opacity: 0;} 100% {opacity: 0;}`;
const imageAnimation2 = keyframes`0% { opacity: 0; } 25% { opacity: 0; } 50% { opacity: 0; } 75% { opacity: 1; } 100% { opacity: 0; }`;
const imageAnimation3 = keyframes`0% { opacity: 0; } 25% { opacity: 0; } 50% { opacity: 1; } 75% { opacity: 0; } 100% { opacity: 0; }`;
const imageAnimation4 = keyframes`0% { opacity: 0; } 25% { opacity: 0; } 50% { opacity: 0; } 75% { opacity: 0; } 100% { opacity: 1; }`;

const slideAnimation = keyframes`
  0%, 20%, 90%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  54% {
    transform: translateX(-100%);
    opacity: 0;
  }
  56% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const dropdownData = [
  {
    id: 1,
    question: "Do I need to sign a contract?",
    answer:
      "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
  },
  {
    id: 2,
    question: "How do we ensure quality of deliverables?",
    answer:
      "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
  },
  {
    id: 3,
    question: "How do I begin collaboration?",
    answer:
      "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs..",
  },
  {
    id: 4,
    question: "What sevices do we offer?",
    answer:
      "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.",
  },
  {
    id: 5,
    question: "How do you ensure user privacy?",
    answer:
      "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.",
  },
  {
    id: 6,
    question: "How can I pay for the services?",
    answer:
      "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.",
  },
];
function Home(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [hoveredBoxId, setHoveredBoxId] = useState(null);

  const handleMouseEnter = (boxId) => {
    setHoveredBoxId(boxId);
  };

  const handleMouseLeave = () => {
    setHoveredBoxId(null);
  };

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");


  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };
  const cardsData = [
    {
      id: 1,
      title: "Exclusive Rights",
      description:
        "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
      imageUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75",
      bgColor: "#01c99b",
      hoverBgGradient:
        "linear-gradient(rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%, transparent)",
      hoverOutline: "rgb(1,201,155) solid 1px",
      blurRadius: "170px",
      offsetX: -50,
      offsetY: -50,
      imageAnimation: imageAnimation1,
    },
    {
      id: 2,
      title: "Research Driven",
      description:
        "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
      imageUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75",
      bgColor: "#00b2fc",
      hoverBgGradient:
        "linear-gradient(rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%, transparent)",
      hoverOutline: "rgb(63,189,241) solid 1px",
      blurRadius: "199px",
      offsetX: 150,
      offsetY: -55,
      imageAnimation: imageAnimation2,
    },
    {
      id: 3,
      title: "Plug-and-Play",
      description:
        "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
      imageUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75",
      bgColor: "#ff6160",
      hoverBgGradient:
        "linear-gradient(rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%, transparent)",
      hoverOutline: "rgb(255,96,95) solid 1px",
      blurRadius: "170px",
      offsetX: 20,
      offsetY: 375,
      imageAnimation: imageAnimation3,
    },
    {
      id: 4,
      title: "Lifetime Support",
      description:
        "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
      imageUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75",
      bgColor: "#fbc976",
      hoverBgGradient:
        "linear-gradient(rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%, transparent)",
      hoverOutline: "rgb(255,159,49) solid 1px",
      blurRadius: "170px",
      offsetX: 60,
      offsetY: -70,
      imageAnimation: imageAnimation4,
    },
  ];
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
  ];
  const boxData = [
    {
      id: 1,
      title: "New!",
      subtitle: "Generative AI",
      description:
        "In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....",
      bgColor: "#fbc976",
      offsetX: "80%",
      offsetY: "65%",
      blurRadius: "100px",
      subBoxBgColor: "rgb(255,246,205)",
      isFirst: true,
    },
    {
      id: 2,
      title: "April 25,2024",
      subtitle: "The Evolution of AI in Games",
      description:
        "The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...",
      bgColor: "#00b2fc",
      offsetX: "90%",
      offsetY: "-10%",
      width: "150px",
      height: "100px",
      blurRadius: "100px",
      subBoxBgColor: "rgb(226,242,255)",
    },
    {
      id: 3,
      title: "April 18,2024",
      subtitle:
        "Unmasking the Misconceptions of Artificial Intelligence in the Workplace",
      description:
        "The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....",
      bgColor: "#ff6160",
      offsetX: "0px",
      offsetY: "20%",
      isLast: true,
      blurRadius: "100px",
      subBoxBgColor: "rgb(255,236,235)",
    },
  ];
  const gradientAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: -200%;
  }
`;
  return (
    <Box bg={colorMode === "light" ? "" : "black"} w={"100%"} className="custom-scrollbar">
      <Box
        className="firstContainer"
        w={"100%"}
        h={"80vh"}
        
        overflow={"hidden"}
        display={"grid"}
        placeContent={"center"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
      >
        {colorMode === "light" && (
          <Image
            position={"absolute"}
            top={"0"}
            left={"0"}
            w={"100%"}
            h={"80vh"}
            objectFit={"cover"}
            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=256&q=75"
          />
        )}
        {colorMode !== "light" && (
          <video
            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              objectFit: "cover",
              width: "100%",
              height: "70vh",
              position: "absolute",
              top: 70,
              left: 0,
            }}
          />
        )}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          width={"50%"}
          mr={"8rem"}
          zIndex={"20"}
        >
          <Heading
            mt={"5px"}
            mb={"15px"}
            fontSize={"3.7rem"}
            as="h1"
            fontWeight={600}
            fontFamily={"Raleway,sans-serif"}
          >
            We are at the forefront of AI
          </Heading>
          <Text
            textAlign={"start"}
            mb={"20px"}
            fontSize={"1.2rem"}
            mt={4}
            fontWeight={300}
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
      </Box>

      <Box
        className="secondContainer"
        py={isSmallScreen ? "2rem" : undefined}
        p={"5rem 0"}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
      >
        <Box
          className="sec-one"
          display={"flex"}
          flexDirection={isSmallScreen ? "row-reverse" : "column"}
          w={isSmallScreen ? "90%" : "80%"}
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
          bg={colorMode === "light" ? "#e2f2ff" : "#1b1c1e"}
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
              borderColor={colorMode === "light" ? "#000" : "#fff"}
              color={colorMode === "light" ? "#000" : "#fff"}
              _hover={{
                bg: colorMode === "light" ? "#000":"#fff",
                borderColor: "#000",
                color:colorMode === "light" ?  "#fff":"#000",
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
      <Box
        fontFamily={"Poppins,sans-serif"}
        className="ThirdContainer"
        display={"grid"}
        placeItems={"center"}
        pb={"4rem"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
        overflow={"hidden"}
      >
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
          <Box
            w={"75px"}
            h={"4px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>
        <Text
          w={"80%"}
          fontFamily={"Poppins,sans-serif"}
          textAlign={"center"}
          fontSize={"58px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          m={"58px 0px 80px"}
          lineHeight={"normal"}
        >
          We provide Artificial Intelligence Services
        </Text>
        <Box
          display={"grid"}
          gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(2, 1fr)"}
          gridGap={"20px"}
        >
          {serviceData.map((data, index) => (
            <ServiceBox key={index} data={data} />
          ))}
        </Box>
      </Box>
      <Box
        className="fourthContainer"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
      >
        <Box
          className="TrueAIBox"
          bg={colorMode === "light" ? "#272e5c" : "#242424"}
          w={"100%"}
          h={"550px"}
          zIndex={"10"}
          clipPath={"polygon(0 22.5%,100% 0,100% 100%,0 100%)"}
          display={"flex"}
          justifyContent={"space-between"}
          position={"relative"}
          alignItems={"center"}
          m={"6rem 0"}
        >
          <Box className="trueBox_one" w={"33%"} zIndex={"20"} mt={"4rem"}>
            <Image
              w={"333px"}
              h={"329px"}
              ml={"5rem"}
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
              alt="trueAI"
            />
          </Box>
          <Box
            className="trueBox_two"
            display={"flex"}
            w={"33%"}
            mt={"4rem"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              className="MeetTrue"
              display={"flex"}
              fontFamily={"Poppins,sans-serif"}
              mb={"20px"}
              gap={"15px"}
              textTransform={"capitalize"}
              justifyContent={"center"}
              fontWeight={"600"}
              fontSize={"64px"}
              alignItems={"center"}
              color={"#fff"}
            >
              Meet
              <Box position={"relative"}>
                <Box
                  display={"flex"}
                  css={css`
                    color: transparent;
                    background-clip: text;
                    background-size: 200%;
                    animation: ${gradientAnimation} 2s linear infinite;
                    background-image: linear-gradient(
                      to right,
                      #9747ff 0%,
                      /* --tw-gradient-from */ #2f80ed 50%,
                      /* --tw-gradient-via */ #ee216b 100%
                        /* --tw-gradient-to */
                    );
                    transition: all 0.5s ease;
                  `}
                >
                  Tru-AI
                </Box>
                <Image
                  color={"transparent"}
                  position={"absolute"}
                  w={"200px"}
                  overflow={"clip"}
                  h={"24px"}
                  bottom={"-10px"}
                  src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"
                />
              </Box>
            </Box>
            <Box
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}
              lineHeight={"normal"}
              mb={"15px"}
            >
              Design. Create. Deploy.
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"10px"}
            >
              <Box
                className="hypen"
                w={"2.5rem"}
                borderRadius={"10px"}
                borderBottom={"2px solid #bdbdbd"}
              ></Box>
              <Box
                fontSize={"20px"}
                display={"inline"}
                mb={"15px"}
                fontWeight={"600"}
                css={css`
                  color: transparent;
                  background-clip: text;
                  background-size: 200%;
                  animation: ${gradientAnimation} 2s linear infinite;
                  background-image: linear-gradient(
                    to right,
                    #9747ff 0%,
                    /* --tw-gradient-from */ #2f80ed 50%,
                    /* --tw-gradient-via */ #ee216b 100% /* --tw-gradient-to */
                  );
                  transition: all 0.5s ease;
                `}
              >
                the Future of AI | Power to EDIT
              </Box>
            </Box>
            <Box
              color={"#fff"}
              textAlign={"center"}
              fontSize={"14px"}
              textTransform={"capitalize"}
              mb={"15px"}
            >
              Based On your website & traffic trends, Tru-AI optimises your
              website
            </Box>
            <Box
              as="button"
              lineHeight="1.2"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              gap="15px"
              mt="1rem"
              p="10px 20px"
              m="10px 0"
              borderRadius="10px"
              fontSize="18px"
              fontWeight="semibold"
              bg="transparent"
              borderColor="#fff"
              color="#fff"
              _hover={{
                bg: "#fff",
                borderColor: "#fff",
                color: "#000",
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
          <Box
            className="trueBox_three"
            w={"33%"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <video
              style={{
                objectFit: "contain",
                borderRadius: "1000px 0 0 1000px",
              }}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source
                src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
        </Box>
      </Box>
      <Box
        fontFamily={"Poppins,sans-serif"}
        className="FifthContainer"
        display={"grid"}
        placeItems={"center"}
        pb={"4rem"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
        overflow={"hidden"}
      >
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
            mt="6rem"
          >
            WHY CHOOSE LENS
          </Heading>
          <Box
            w={"75px"}
            h={"4px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>

        <Text
          w={"80%"}
          fontFamily={"Poppins,sans-serif"}
          textAlign={"center"}
          fontSize={"58px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          m={"58px 0px 10px"}
          lineHeight={"normal"}
        >
          AI-driven solutions backed by science
        </Text>
        <Text
          w={"50%"}
          fontFamily={"Poppins,sans-serif"}
          textAlign={"center"}
          fontSize={"20px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          mb={"2rem"}
          lineHeight={"normal"}
          color={"#8a8a8a"}
        >
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"40px"}
        >
          {/* 1st */}
          <Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>State-of-the-art solutions</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>Fast & Efficient</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>No extra computation fee</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>No licensing fee</Text>
            </Box>
          </Box>
          {/* 2nd */}
          <Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>Lifetime support & upgrades</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>Plug-and-Play</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>24x7 Progress Monitoring</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontWeight={400}
              gap={"8px"}
              fontSize={"18px"}
              padding={2}
              letterSpacing={".622px"}
            >
              <CheckIcon boxSize={3.5} />
              <Text>Incremental Updates</Text>
            </Box>
          </Box>
        </Box>
        {/*  borderColor={'red'} borderWidth={'2px'} */}

        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={4}
          flexWrap={"wrap" }
          margin={"5rem 0"}
        >
          {cardsData.map((card) => (
            <Box
              key={card.id}
              css={{
                "&:hover": {
                  "& img": {
                    animationName: "none",
                  },
                },
              }}
            >
              <Box
                w={`${card.blurRadius.split("px")[0]}px`}
                h={`${card.blurRadius.split("px")[0] / 2}px`}
                borderRadius={"100px"}
                filter={`blur(${card.blurRadius})`}
                background={card.bgColor}
                mt={card.offsetY}
                ml={card.offsetX}
                position={"absolute"}
              />
              <Box
                w={isLargerThan800 ? "335px" : "100%"}
                h={"435px"}
                bg={colorMode === "light" ? "#fff" : "#1b1c1e"}
                padding={"1.6rem"}
                borderRadius={"24px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                position={"relative"}
                css={{
                  "&:hover": {
                    background: card.hoverBgGradient,
                    outline: card.hoverOutline,
                  },
                }}
              >
                <Text
                  display={"flex"}
                  fontSize={"1.7rem"}
                  fontWeight={"600"}
                  padding={"0 1.5rem 1.5rem"}
                >
                  {card.title}
                </Text>
                <Image
                  src={card.imageUrl}
                  css={{
                    animationName: card.imageAnimation,
                    animationDuration: "5s",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: "1s",
                  }}
                  alignSelf={"center"}
                />
                <Text color={"#828282"}>{card.description}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="SixthContainer"
        display={"grid"}
        placeItems={"center"}
        pb={"7rem"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
      >
        <Box
          className="visionHead"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Heading
            as={"h3"}
            textAlign={"center"}
            fontSize={"20px"}
            m={0}
            textTransform={"uppercase"}
            letterSpacing={"1.9px"}
            fontWeight={"600"}
          >
            OUR VISION
          </Heading>
          <Box
            w={"75px"}
            h={"4px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>
        <Text
          className="paragraphAI"
          fontFamily={"Poppins,sans-serif"}
          w={"65%"}
          m={"1rem 0"}
          textAlign={"center"}
          fontSize={"58px"}
          fontWeight={"500"}
          fontStyle={"normal"}
        >
          AI for Social Good
        </Text>
        <Text
          className="paragrph2"
          fontFamily={"Poppins,sans-serif"}
          color={"#8a8a8a"}
          textAlign={"center"}
          fontSize={"20px"}
          mb={"4rem"}
          width={"58%"}
          lineHeight={"29.58px"}
        >
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </Text>
        <Box
          className="lienGride"
          display={"grid"}
          gridTemplateColumns={".5fr"}
          justifyContent={"center"}
        >
          <Box className="box-6">
            <Box
              className="Box-m-6"
              display={"grid"}
              gridTemplateColumns={"1fr max-content 1fr"}
              gridColumnGap={"1.5rem"}
              columnGap={"1.5rem"}
              w={"100%"}
              fontFamily={"'Poppins'"}
            >
              <Box
                _hover={{
                  transform: "scale(1.05)",
                  transition: "0.4s",
                }}
              >
                <Heading
                  as={"h3"}
                  fontSize={"28px"}
                  fontFamily={"'Poppins'"}
                  fontWeight={"600"}
                >
                  Diversity & Fairness
                </Heading>
                <Text
                  as={"span"}
                  display={"inline-block"}
                  fontFamily={"'Poppins'"}
                  fontSize={"16px"}
                  m={"1rem 0"}
                  color={"#8a8a8a"}
                  transition={".3"}
                >
                  When training our AI models, we consider ethical and social
                  implications of algorithm-based decision making. Our solutions
                  use high-quality and fairly-represented data sets to eliminate
                  human cognitive biases.
                </Text>
              </Box>
              <Box className="icon-1">
                <Text
                  as={"span"}
                  display={"inline-block"}
                  bg={"#fcfbf7"}
                  borderRadius={"29.297px"}
                  border={"4px solid #717171"}
                  p={"4px"}
                >
                  <Image src={GroupIcon} />
                </Text>
                <Text
                  as={"span"}
                  display={"block"}
                  w={"0"}
                  height={"85%"}
                  borderLeft={"2px dashed #717171"}
                  transform={"translate(27.5px,-3px)"}
                ></Text>
              </Box>
            </Box>
            <Box
              className="Box-m-6"
              display={"grid"}
              gridTemplateColumns={"1fr max-content 1fr"}
              gridColumnGap={"1.5rem"}
              columnGap={"1.5rem"}
              w={"100%"}
              fontFamily={"'Poppins'"}
            >
              <Box></Box>
              <Box className="icon-1">
                <Text
                  as={"span"}
                  display={"inline-block"}
                  bg={"#fcfbf7"}
                  borderRadius={"29.297px"}
                  border={"4px solid #717171"}
                  p={"4px"}
                >
                  <Image src={SecurityIcon} />
                </Text>
                <Text
                  as={"span"}
                  display={"block"}
                  w={"0"}
                  height={"85%"}
                  borderLeft={"2px dashed #717171"}
                  transform={"translate(27.5px,-3px)"}
                ></Text>
              </Box>
              <Box
                _hover={{
                  transform: "scale(1.05)",
                  transition: "0.4s",
                }}
              >
                <Heading
                  as={"h3"}
                  fontSize={"28px"}
                  fontFamily={"'Poppins'"}
                  fontWeight={"600"}
                >
                  Regulatory Compliance
                </Heading>
                <Text
                  as={"span"}
                  display={"inline-block"}
                  fontFamily={"'Poppins'"}
                  fontSize={"16px"}
                  m={"1rem 0"}
                  color={"#8a8a8a"}
                  transition={".3"}
                >
                  Working with clients globally, LENS acknowledges applicable
                  data privacy regulations, such as the GDPR, HIPAA and others,
                  in all our solutions handling sensitive data. We also ensure
                  our algorithms allow for the required level of decision-making
                  transparency and explainability.
                </Text>
              </Box>
            </Box>
            <Box
              className="Box-m-6"
              display={"grid"}
              gridTemplateColumns={"1fr max-content 1fr"}
              gridColumnGap={"1.5rem"}
              columnGap={"1.5rem"}
              w={"100%"}
              fontFamily={"'Poppins'"}
            >
              <Box
                _hover={{
                  transform: "scale(1.05)",
                  transition: "0.4s",
                }}
              >
                <Heading
                  as={"h3"}
                  fontSize={"28px"}
                  fontFamily={"'Poppins'"}
                  fontWeight={"600"}
                >
                  Code of Ethics
                </Heading>
                <Text
                  as={"span"}
                  display={"inline-block"}
                  fontFamily={"'Poppins'"}
                  fontSize={"16px"}
                  m={"1rem 0"}
                  color={"#8a8a8a"}
                  transition={".3"}
                >
                  LENS believes in a just, non-violent world of equality and
                  fairness. We prize democratic values, civil liberties and open
                  and informed debate. When used to further these values,
                  algorithm-based decision-making models can continue to make
                  the world a safer, better place for everyone.
                </Text>
              </Box>
              <Box className="icon-1">
                <Text
                  as={"span"}
                  display={"inline-block"}
                  bg={"#fcfbf7"}
                  borderRadius={"29.297px"}
                  border={"4px solid #717171"}
                  p={"4px"}
                >
                  <Image src={WeightIcon} />
                </Text>
                <Text
                  as={"span"}
                  display={"block"}
                  w={"0"}
                  height={"85%"}
                  borderLeft={"2px dashed #717171"}
                  transform={"translate(27.5px,-3px)"}
                ></Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="SeventhContainer"
        fontFamily={"Poppins,sans-serif"}
        display={"grid"}
        placeItems={"center"}
        pb={"4rem"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
        overflow={"hidden"}
      >
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
            Our Blogs
          </Heading>
          <Box
            w={"75px"}
            h={"4px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>

        <Text
          w={"80%"}
          fontFamily={"Poppins,sans-serif"}
          textAlign={"center"}
          fontSize={"58px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          m={"18px 0px 10px"}
          lineHeight={"normal"}
        >
          Inhouse Mindscape
        </Text>

        <Box
          width={isLargerThan800 ? "60%" : "100%"}
          display={"grid"}
          gridTemplateColumns={isLargerThan800 ? "1fr 1fr" : "1fr"}
          gridGap={"20px"}
        >
          {boxData.map((box) => (
            <Box
            key={box.id}
          display={'flex'}
          position={'relative'}
          gridColumn={box.isLast ? 'span 2' : 'auto'}
          gridRow={box.isLast ? '2' : 'auto'}
          transition={'transform 0.6s ease'}
      transform={hoveredBoxId === box.id ? 'translateY(-10px)' : 'none'}
          onMouseEnter={() => handleMouseEnter(box.id)}
          onMouseLeave={handleMouseLeave}
            >
              <Box
                 w={`150px`}
                 h={`100px`}
                 filter={`blur(${box.blurRadius})`}
                 borderRadius={'100px'}
                 background={colorMode === 'light' ? box.bgColor : "rgb(36, 36, 36)"}
                 position={'absolute'}
                 ml={box.offsetX}
                 mt={box.offsetY}
              />

              <Box
               borderRadius={'20px'}
               border={'1px solid transparent'}
               bg={colorMode === 'light' ? '#fff' : "#1b1c1e"}
               padding={'3px 10px'}
               overflow={'hidden'}
              >
                <Box
                   display={'flex'}
                   flexDirection={'column'}
                   padding={'26px 16px'}
                   alignItems={'flex-start'}
                   justifyContent={'space-between'}
                   gap={'10px'}
                   height={'90%'}
                >
                  <Box >
                    <Text
                     transition={'transform 0.4s'}
                    display={hoveredBoxId=== box.id?"none":"block"}
                      fontFamily={" Poppins, sans-serif"}
                      fontSize={"20px"}
                      fontWeight={"400"}
                      lineHeight={" 140.7%"}
                      color={box.isFirst ? "red" : "rgb(101, 101, 101)"}
                    >
                      {box.title}
                    </Text>
                    <Text
                      fontFamily={"Raleway, sans-serif"}
                      fontSize={"28px"}
                      fontWeight={"400"}
                      lineHeight={"36.8px"}
                      letterSpacing={"1.1px"}
                      padding={"1.5rem 0"}
                    >
                      {box.subtitle}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexShrink={"0"}
                    borderRadius={"16px"}
                    padding={"26px 16px"}
                    bg={
                      colorMode === "light"
                        ? box.subBoxBgColor
                        : "rgb(36, 36, 36)"
                    }
                  >
                    <Text
                      fontSize={"16.5px"}
                      color={"#828282"}
                      lineHeight={"140.7%"}
                      fontFamily={" Poppins, sans-serif"}
                    >
                      {box.description}
                    </Text>
                  </Box>
                 
                    <Box>
                      <Button
                        color="#ff5d5b"
                        bg="transparent"
                        fontWeight="400"
                        fontFamily="Poppins, sans-serif"
                        border="none"
                        
                        display={hoveredBoxId=== box.id?"flex":"none"}
                        alignItems="center"
                        gap="0.25rem"
                        transition={'transform 0.6s ease'}
                        padding="0"
                        mt={hoveredBoxId=== box.id?9:0}
                        position={"relative"}
                      >
                        Read more
                        <ArrowRightIcon boxSize={2} color="red" />
                      </Button>
                    </Box>
               
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          as="button"
          lineHeight="1.2"
          display={"flex"}
          justifyContent={"center"}
          transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          gap="15px"
          mt="2rem"
          mb="5rem"
          p="13px 15px"
          borderRadius="10px"
          fontSize="18px"
          fontWeight="400"
          bg="transparent"
          borderColor={colorMode === 'light' ?"#000":"white"}
          color={colorMode === 'light' ?"#000":"white"}
          _hover={{
            bg:  colorMode === 'light' ?  "#000":"white",
            borderColor: "#000",
            color: colorMode === 'light' ?  "#fff":"#000",
            p: "13px 18px",
          }}
          _active={{
            bg: "#fff",
            transform: "scale(0.98)",
            borderColor: "#000",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Explore More
          {isHovered && <ArrowForwardIcon boxSize={5} />}
        </Box>
      </Box>
      <Box
        className="EigthContainer"
        textAlign={"center"}
        p={"0 2rem 5rem"}
        overflow={"hidden"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
      >
        <Heading
          as={"h1"}
          textAlign={"center"}
          fontFamily={"Raleway,sans-serif"}
          fontSize={"32px"}
          fontWeight={"500"}
          m={"0 0 4rem"}
        >
          We Work With Amazing Clients
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          overflow={"hidden"}
          gap={"2rem"}
          css={css`
            animation: ${slideAnimation} 12s linear infinite;
          `}
        >
          <Box>
            <Image
              src={
                colorMode === "light"
                  ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75"
                  : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlobal_white.7630bd08.png&w=256&q=75"
              }
            />
          </Box>
          <Box>
            <Image
              src={
                colorMode === "light"
                  ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=640&q=75"
                  : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=256&q=75"
              }
            />
          </Box>
          <Box>
            <Image
              src={
                colorMode === "light"
                  ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75"
                  : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCore_white.8ba066be.png&w=256&q=75"
              }
            />
          </Box>
          <Box>
            <Image
              src={
                colorMode === "light"
                  ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75"
                  : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrove.f0ee63ad.png&w=256&q=75"
              }
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="NingthContainer"
        fontFamily={"'Poppins'"}
        bg={colorMode === "light" ? "#272e5c" : "#242424"}
        display={"flex"}
        flexDirection={"column"}
        w={"100%"}
        justifyContent={"center"}
        p={"4rem 0"}
      >
        <Box
          className="BY_number_"
          color={"#fff"}
          textAlign={"center"}
          fontSize={"32px"}
          mb={"2.5rem"}
        >
          By the numbers
        </Box>
        <Box
          className="BY_number_components"
          display={"flex"}
          w={"70%"}
          mx={"auto"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"baseline"}
              gap={"2px"}
            >
              <Text
                as={"span"}
                color={"#fff"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                15
              </Text>
              <Text
                as={"span"}
                color={"#0091ff"}
                fontFamily={"Roboto"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                +
              </Text>
            </Box>
            <Box
              color={"#fff"}
              textAlign={"center"}
              fontSize={"18px"}
              lineHeight={"140%"}
              w={"70%"}
            >
              Solutions for Global crises
            </Box>
          </Box>
          <Box
            className="Hoz_line"
            w={"2px"}
            h={"116px"}
            bg={"linear-gradient(90deg,#fff,hsla(0,0%,100%,0))"}
          ></Box>
          <Box
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"baseline"}
              gap={"2px"}
            >
              <Text
                as={"span"}
                color={"#fff"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                10
              </Text>
              <Text
                as={"span"}
                color={"#0091ff"}
                fontFamily={"Roboto"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                +
              </Text>
            </Box>
            <Box
              color={"#fff"}
              textAlign={"center"}
              fontSize={"18px"}
              lineHeight={"140%"}
              w={"70%"}
            >
              University Collaborations
            </Box>
          </Box>
          <Box
            className="Hoz_line"
            w={"2px"}
            h={"116px"}
            bg={"linear-gradient(90deg,#fff,hsla(0,0%,100%,0))"}
          ></Box>
          <Box
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"baseline"}
              gap={"2px"}
            >
              <Text
                as={"span"}
                color={"#fff"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                25
              </Text>
              <Text
                as={"span"}
                color={"#0091ff"}
                fontFamily={"Roboto"}
                textAlign={"center"}
                fontSize={"40px"}
                fontWeight={"500"}
                lineHeight={"100%"}
              >
                +
              </Text>
            </Box>
            <Box
              color={"#fff"}
              textAlign={"center"}
              fontSize={"18px"}
              lineHeight={"140%"}
              w={"70%"}
            >
              Employees Worldwide
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="TenthContainer"
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
        display={"grid"}
        placeItems={"center"}
        p={"4rem 0"}
        fontFamily={"Poppins,sans-serif"}
      >
        <Box
          className="visionHead"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Heading
            as={"h3"}
            textAlign={"center"}
            fontSize={"20px"}
            m={0}
            textTransform={"uppercase"}
            letterSpacing={"1.9px"}
            fontWeight={"600"}
          >
            GET TO KNOW US
          </Heading>
          <Box
            w={"75px"}
            h={"4px"}
            borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }
          ></Box>
        </Box>
        <Text
          fontSize={"58px"}
          fontWeight={"500"}
          width={"65%"}
          margin={"1rem 0"}
          textAlign={"center"}
        >
          Frequently Asked Questions
        </Text>
        <Box>
          <Box
            className="dropdowbox"
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
            justifyContent={"center"}
            gap={"2rem"}
            alignItems={isSmallScreen ? "center" : undefined}
          >
            <Box
              className="box-sized"
              w={isSmallScreen ? "100%" : "38rem"}
              mb={isSmallScreen ? "2rem" : undefined}
            >
              {dropdownData.slice(0, 3).map((data) => (
                <Box key={data.id} onClick={() => toggleDropdown(data.id)}>
                  <Heading
                    as="h2"
                    fontFamily="Raleway,sans-serif"
                    fontSize="1.5em"
                    marginBlockStart="0.83em"
                    display="block"
                    marginBlockEnd="0.83em"
                    marginInlineStart="0px"
                    marginInlineEnd="0px"
                    fontWeight="bold"
                  >
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      border={
                        colorMode === "light"
                          ? "1px solid rgba(0,0,0,.6)"
                          : "1px solid #fff"
                      }
                      pr="1rem"
                      borderRadius="10px"
                      mt="1rem"
                      w="100%"
                      outlineOffset="2px"
                      outline="2px solid transparent"
                    >
                      <Box
                        textAlign="left"
                        flex="1"
                        fontSize="17px"
                        p=".75rem 1rem"
                        fontWeight="300"
                      >
                        {data.question}
                      </Box>
                      <ChevronDownIcon />
                    </Box>
                  </Heading>
                  <Box
                    overflow="hidden"
                    display={openDropdownId === data.id ? "block" : "none"}
                    opacity={openDropdownId === data.id ? "1" : "0"}
                    height={openDropdownId === data.id ? "auto" : "0px"}
                  >
                    <Box
                      pb="4px"
                      fontSize="15px"
                      color={colorMode === "light" ? "rgba(0,0,0,.6)" : ""}
                      transition="all 0.5s"
                    >
                      {data.answer}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              className="box-sized"
              w={isSmallScreen ? "100%" : "38rem"}
              mb={isSmallScreen ? "2rem" : undefined}
            >
              {dropdownData.slice(3).map((data) => (
                <Box key={data.id} onClick={() => toggleDropdown(data.id)}>
                  <Heading
                    as="h2"
                    fontFamily="Raleway,sans-serif"
                    fontSize="1.5em"
                    marginBlockStart="0.83em"
                    display="block"
                    marginBlockEnd="0.83em"
                    marginInlineStart="0px"
                    marginInlineEnd="0px"
                    fontWeight="bold"
                  >
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      border={
                        colorMode === "light"
                          ? "1px solid rgba(0,0,0,.6)"
                          : "1px solid #fff"
                      }
                      pr="1rem"
                      borderRadius="10px"
                      mt="1rem"
                      w="100%"
                      outlineOffset="2px"
                      outline="2px solid transparent"
                    >
                      <Box
                        textAlign="left"
                        flex="1"
                        fontSize="17px"
                        p=".75rem 1rem"
                        fontWeight="300"
                      >
                        {data.question}
                      </Box>
                      <ChevronDownIcon />
                    </Box>
                  </Heading>
                  <Box
                    overflow="hidden"
                    display={openDropdownId === data.id ? "block" : "none"}
                    opacity={openDropdownId === data.id ? "1" : "0"}
                    height={openDropdownId === data.id ? "auto" : "0px"}
                  >
                    <Box
                      pb="4px"
                      fontSize="15px"
                      color={colorMode === "light" ? "rgba(0,0,0,.6)" : ""}
                      transition="all 0.5s"
                    >
                      {data.answer}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="EleventhContainer"
        display={"flex"}
        bg={colorMode === "light" ? "#fcfbf7" : "black"}
        fontFamily={"'Poppins'"}
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          w={isSmallScreen ? "100%" : "50%"}
          p={isSmallScreen ? "2rem" : "5rem 5rem 5rem 7rem"}
          bg={colorMode === "light" ? "#fcfbf7" : "#242424"}
          justifyContent={"center"}
        >
          <Heading
            fontFamily={"Raleway,sans-serif"}
            w={"70%"}
            as={"h2"}
            fontSize={"56px"}
            mb={"1rem"}
            lineHeight={"66.102px"}
            fontWeight={500}
          >
            Get in touch with us
          </Heading>
          <Text
            fontSize={"17.488px"}
            fontFamily={"'Poppins'"}
            letterSpacing={".525px"}
            mb={"2rem"}
          >
            Send your enquiry now!
          </Text>
          <FormControl
            display={"flex"}
            bg={colorMode === "light" ? "#ededed" : "#0b0b0b"}
            w={"80%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"4.034px 4.034px 4.034px 20.172px"}
            borderRadius={"26.897px"}
          >
            <Input
              type="email"
              placeholder="Enter email address"
              name="email"
              outline={"none"}
              bg={"transparent"}
              borderRadius={"4px 0 0 4px"}
              border={"1px solid transparent"}
              fontSize={"14px"}
              w={"80%"}
              p={"8px"}
            />
            <Box
              p={"8px 16px"}
              as="button"
              fontSize={"16px"}
              borderRadius={"26.897px"}
              cursor={"pointer"}
              width={"200px"}
              border={"none"}
              color={"#fff"}
              bg={"#272e5c"}
            >
              Request Demo
            </Box>
          </FormControl>
        </Box>
        <Box
          display={"flex"}
          borderRight={0}
          borderLeft={0}
          alignItems={"flex-end"}
          justifyContent={"center"}
          w={isSmallScreen ? "100%" : "49%"}
          p={isSmallScreen ? "2rem 0" : "4rem 0"}
        >
          <Image
            maxW={"100%"}
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
            alt="map"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
