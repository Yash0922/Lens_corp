
import React, { useState } from "react";
import { Box, Text, Button, Heading, Image,AspectRatio,FormControl,Input
    } from "@chakra-ui/react";
import { css, keyframes } from '@emotion/react';
import { ArrowForwardIcon,CheckIcon} from "@chakra-ui/icons";

import  GroupIcon  from '../assets/groupIcon.svg';
import  SecurityIcon  from '../assets/securityIcon.svg';
import  WeightIcon  from '../assets/WeightIIcon.svg';
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
function Home(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const cardsData = [
    {
      id: 1,
      title: 'Exclusive Rights',
      description: 'Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.',
      imageUrl: 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75',
      bgColor: '#01c99b',
      hoverBgGradient: 'linear-gradient(rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%, transparent)',
      hoverOutline: 'rgb(1,201,155) solid 1px',
      blurRadius: '170px',
      offsetX: -50,
      offsetY: -50,
      imageAnimation: imageAnimation1,
    },
    {
      id: 2,
      title: 'Research Driven',
      description: 'We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.',
      imageUrl: 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75',
      bgColor: '#00b2fc',
      hoverBgGradient: 'linear-gradient(rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%, transparent)',
      hoverOutline: 'rgb(63,189,241) solid 1px',
      blurRadius: '199px',
      offsetX: 150,
      offsetY: -55,
      imageAnimation: imageAnimation2,
  
    },
    {
      id: 3,
      title: 'Plug-and-Play',
      description: 'We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.',
      imageUrl: 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75',
      bgColor: '#ff6160',
      hoverBgGradient: 'linear-gradient(rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%, transparent)',
      hoverOutline: 'rgb(255,96,95) solid 1px',
      blurRadius: '170px',
      offsetX: 20,
      offsetY: 375,
      imageAnimation: imageAnimation3,
    },
    {
      id: 4,
      title: 'Lifetime Support',
      description: 'Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.',
      imageUrl: 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75',
      bgColor: '#fbc976',
      hoverBgGradient: 'linear-gradient(rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%, transparent)',
      hoverOutline: 'rgb(255,159,49) solid 1px',
      blurRadius: '170px',
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
  ]
  const gradientAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: -200%;
  }
`;
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
      <Box className="fourthContainer" display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"} bg={"#fcfbf7"}>
     <Box className="TrueAIBox" bg={"#272e5c"} w={"100%"} h={"550px"} zIndex={"10"} clipPath={"polygon(0 22.5%,100% 0,100% 100%,0 100%)"} display={"flex"} justifyContent={"space-between"} position={"relative"} alignItems={"center"} m={"6rem 0"}>
            <Box className="trueBox_one" w={"33%"} zIndex={"20"} mt={"4rem"}>
              <Image w={"333px"} h={"329px"} ml={"5rem"} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
              alt="trueAI" />
            </Box>
            <Box className="trueBox_two" display={"flex"} w={"33%"} mt={"4rem"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Box className="MeetTrue" display={"flex"} fontFamily={"Poppins,sans-serif"} mb={"20px"} gap={"15px"} textTransform={"capitalize"} justifyContent={"center"} fontWeight={"600"} fontSize={"64px"} alignItems={"center"} color={"#fff"}>
              Meet
              <Box position={"relative"}>
                <Box display={"flex"}   css={css`
      color: transparent;
      background-clip: text;
      background-size: 200%;
      animation: ${gradientAnimation} 2s linear infinite;
      background-image: linear-gradient(
        to right,
        #9747ff 0%,  /* --tw-gradient-from */
        #2f80ed 50%, /* --tw-gradient-via */
        #ee216b 100%  /* --tw-gradient-to */
      );
      transition: all 0.5s ease;
    `}>
                Tru-AI
                </Box>
                <Image color={"transparent"} position={"absolute"} w={"200px"}  overflow={"clip"} h={"24px"} bottom={"-10px"} src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"/>
              </Box>
              </Box>
              <Box color={"#fff"} fontSize={"26px"} fontWeight={"500"}lineHeight={"normal"} mb={"15px"}>
              Design. Create. Deploy.
              </Box>
              <Box display={"flex"}alignItems={"center"} justifyContent={"center"} gap={"10px"}>
                <Box className="hypen" w={"2.5rem"} borderRadius={"10px"} borderBottom={"2px solid #bdbdbd"}></Box>
                <Box fontSize={"20px"} display={"inline"} mb={"15px"} fontWeight={"600"}
                 css={css`
                 color: transparent;
                 background-clip: text;
                 background-size: 200%;
                 animation: ${gradientAnimation} 2s linear infinite;
                 background-image: linear-gradient(
                   to right,
                   #9747ff 0%,  /* --tw-gradient-from */
                   #2f80ed 50%, /* --tw-gradient-via */
                   #ee216b 100%  /* --tw-gradient-to */
                 );
                 transition: all 0.5s ease;
               `}>the Future of AI | Power to EDIT</Box>
              </Box>
              <Box color={"#fff"} textAlign={"center"} fontSize={"14px"} textTransform={"capitalize"} mb={"15px"}>
              Based On your website & traffic trends, Tru-AI optimises your website
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
            <Box className="trueBox_three" w={"33%"} display={"flex"} justifyContent={"flex-end"}>
            
  <video
    style={{ objectFit: "contain", borderRadius:"1000px 0 0 1000px"  }}
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
      <Box fontFamily={"Poppins,sans-serif"} className="FifthContainer" display={"grid"} placeItems={"center"} pb={"4rem"} bg={"#fcfbf7"} overflow={"hidden"}>
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
          <Box w={"75px"} h={"4px"} borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }></Box>
        </Box>

        <Text w={"80%"} fontFamily={"Poppins,sans-serif"} textAlign={"center"} fontSize={"58px"} fontStyle={"normal"} fontWeight={"400"} m={"58px 0px 10px"} lineHeight={"normal"}>AI-driven solutions backed by science</Text>
        <Text w={"50%"} fontFamily={"Poppins,sans-serif"} textAlign={"center"} fontSize={"20px"} fontStyle={"normal"} fontWeight={"400"} mb={'2rem'} lineHeight={"normal"} color={"#8a8a8a"}>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</Text>
        <Box display={"flex"}
          alignItems={"center"}
          justifyContent={'space-between'}
          gap={'40px'}>
          {/* 1st */}
          <Box>

            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>State-of-the-art solutions</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>Fast & Efficient</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>No extra computation fee</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
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

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>Lifetime support & upgrades</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>Plug-and-Play</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>24x7 Progress Monitoring</Text>
            </Box>
            <Box

              display={"flex"}
              alignItems={"center"}
              fontWeight={400}

              gap={'8px'}
              fontSize={"18px"}
              padding={2}
              letterSpacing={'.622px'}>
              <CheckIcon boxSize={3.5} />
              <Text>Incremental Updates</Text>
            </Box>
          </Box>
        </Box>
        {/*  borderColor={'red'} borderWidth={'2px'} */}


        <Box display={'flex'} justifyContent={'center'} gap={4} flexWrap={'wrap'} margin={'5rem 0'}>
          {cardsData.map((card) => (
            <Box key={card.id}
              css={{
                '&:hover': {
                  '& img': {
                    animationName: 'none',
                  },
                },
              }}>
              <Box
                w={`${card.blurRadius.split('px')[0]}px`}
                h={`${card.blurRadius.split('px')[0] / 2}px`}
                borderRadius={'100px'}
                filter={`blur(${card.blurRadius})`}
                background={card.bgColor}
                mt={card.offsetY}
                ml={card.offsetX}
                position={'absolute'}
              />
              <Box
                w={'335px'}
                h={'435px'}
                bg={'#fff'}
                padding={'1.6rem'}
                borderRadius={'24px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                position={'relative'}
                css={{
                  '&:hover': {
                    background: card.hoverBgGradient,
                    outline: card.hoverOutline,
                  },
                }}
              >
                <Text display={'flex'} fontSize={'1.7rem'} fontWeight={'600'} padding={'0 1.5rem 1.5rem'}>
                  {card.title}
                </Text>
                <Image
                  src={card.imageUrl}
                  css={{
                    animationName: card.imageAnimation,
                    animationDuration: '5s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: '1s',

                  }}
                  alignSelf={'center'}
                />
                <Text color={'#828282'}>
                  {card.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="SixthContainer" display={"grid"} placeItems={"center"} pb={"7rem"} bg={"#fcfbf7"}>
          <Box className="visionHead" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"5px"}>
              <Heading as={"h3"} color={"#000"} textAlign={"center"} fontSize={"20px"} m={0} textTransform={"uppercase"} letterSpacing={"1.9px"} fontWeight={"600"}>
              OUR VISION
              </Heading>
              <Box w={"75px"} h={"4px"} borderRadius={"1000px"}
            bg={
              "linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)"
            }></Box>
          </Box>
          <Text className="paragraphAI" fontFamily={"Poppins,sans-serif"} w={"65%"} m={"1rem 0"} textAlign={"center"} fontSize={"58px"} fontWeight={"500"} fontStyle={"normal"}>AI for Social Good</Text>
          <Text className="paragrph2" fontFamily={"Poppins,sans-serif"} color={"#8a8a8a"} textAlign={"center"} fontSize={"20px"} mb={"4rem"} width={"58%"} lineHeight={"29.58px"}>
          Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.
          </Text>
          <Box className="lienGride" display={"grid"}  gridTemplateColumns={".5fr"} justifyContent={"center"}>
              <Box className="box-6">
                <Box className="Box-m-6" display={"grid"} gridTemplateColumns={"1fr max-content 1fr"} gridColumnGap={"1.5rem"} columnGap={"1.5rem"} w={"100%"} fontFamily={"'Poppins'"} 
                  
                >
                  <Box _hover={{
                    transform: "scale(1.05)",
                    transition: "0.4s",
                  }}>
                    <Heading  as={"h3"} fontSize={"28px"} fontFamily={"'Poppins'"} fontWeight={"600"}>Diversity & Fairness</Heading>
                    <Text as={"span"} display={"inline-block"} fontFamily={"'Poppins'"} fontSize={"16px"} m={"1rem 0"} color={"#8a8a8a"}transition={".3"}>When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.</Text>
                  </Box>
                  <Box className="icon-1">
                    <Text as={"span"} display={"inline-block"} bg={"#fcfbf7"} borderRadius={"29.297px"} border={"4px solid #717171"} p={"4px"}>
                      <Image src={GroupIcon}/>
                    </Text>
                    <Text  as={"span"} display={"block"} w={"0"} height={"85%"} borderLeft={"2px dashed #717171"} transform={"translate(27.5px,-3px)"}></Text>
                  </Box>
                </Box>
                <Box className="Box-m-6" display={"grid"} gridTemplateColumns={"1fr max-content 1fr"} gridColumnGap={"1.5rem"} columnGap={"1.5rem"} w={"100%"} fontFamily={"'Poppins'"}>
                  <Box></Box>
                  <Box className="icon-1">
                    <Text as={"span"} display={"inline-block"} bg={"#fcfbf7"} borderRadius={"29.297px"} border={"4px solid #717171"} p={"4px"}>
                      <Image src={SecurityIcon}/>
                    </Text>
                    <Text  as={"span"} display={"block"} w={"0"} height={"85%"} borderLeft={"2px dashed #717171"} transform={"translate(27.5px,-3px)"}></Text>
                  </Box>
                  <Box _hover={{
                    transform: "scale(1.05)",
                    transition: "0.4s",
                  }}>
                 
                    <Heading as={"h3"} fontSize={"28px"} fontFamily={"'Poppins'"} fontWeight={"600"} >Regulatory Compliance</Heading>
                    <Text as={"span"} display={"inline-block"} fontFamily={"'Poppins'"} fontSize={"16px"} m={"1rem 0"} color={"#8a8a8a"}transition={".3"}>Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.</Text>
                  </Box>
                 
                  
                </Box>
                <Box className="Box-m-6" display={"grid"} gridTemplateColumns={"1fr max-content 1fr"} gridColumnGap={"1.5rem"} columnGap={"1.5rem"} w={"100%"} fontFamily={"'Poppins'"}>
                  <Box _hover={{
                    transform: "scale(1.05)",
                    transition: "0.4s",
                  }}>
                    <Heading as={"h3"} fontSize={"28px"} fontFamily={"'Poppins'"} fontWeight={"600"} >Code of Ethics</Heading>
                    <Text as={"span"} display={"inline-block"} fontFamily={"'Poppins'"} fontSize={"16px"} m={"1rem 0"} color={"#8a8a8a"}transition={".3"}>LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.</Text>
                  </Box>
                  <Box className="icon-1">
                    <Text as={"span"} display={"inline-block"} bg={"#fcfbf7"} borderRadius={"29.297px"} border={"4px solid #717171"} p={"4px"}>
                      <Image src={WeightIcon}/>
                    </Text>
                    <Text  as={"span"} display={"block"} w={"0"} height={"85%"} borderLeft={"2px dashed #717171"} transform={"translate(27.5px,-3px)"}></Text>
                  </Box>
                </Box>
              </Box>
          </Box>
      </Box>
      <Box className="EigthContainer" textAlign={"center"} p={"0 2rem 5rem"} overflow={"hidden"} bg={"#fcfbf7"}>
        <Heading as={"h1"} textAlign={"center"} fontFamily={"Raleway,sans-serif"} fontSize={"32px"} fontWeight={"500"} m={"0 0 4rem"}>We Work With Amazing Clients</Heading>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} overflow={"hidden"} gap={"2rem"}
         css={css`
         animation: ${slideAnimation} 12s linear infinite;
       `}
        >
                    <Box><Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75"/></Box>
                    <Box><Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75"/></Box>
                    <Box><Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=256&q=75"/></Box>
                    <Box><Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75"/></Box>
                    
        </Box>
      </Box>
      <Box className="NingthContainer" fontFamily={"'Poppins'"} bg={"#272e5c"} display={"flex"} flexDirection={"column"} w={"100%"} justifyContent={"center"} p={"4rem 0"}>
                    <Box className="BY_number_" color={"#fff"} textAlign={"center"} fontSize={"32px"} mb={"2.5rem"}>
                    By the numbers
                    </Box>
                    <Box className="BY_number_components" display={"flex"} w={"70%"} mx={"auto"} justifyContent={"space-around"} alignItems={"center"}>
                      <Box display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"baseline"} gap={"2px"}>
                              <Text as={"span"} color={"#fff"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>15</Text>
                              <Text as={"span"} color={"#0091ff"} fontFamily={"Roboto"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>+</Text>
                        </Box>
                        <Box color={"#fff"} textAlign={"center"} fontSize={"18px"} lineHeight={"140%"} w={"70%"}>
                        Solutions for Global crises
                        </Box>
                      </Box>
                      <Box className="Hoz_line"w={"2px"} h={"116px"} bg={"linear-gradient(90deg,#fff,hsla(0,0%,100%,0))"}></Box>
                      <Box display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"baseline"} gap={"2px"}>
                              <Text as={"span"} color={"#fff"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>10</Text>
                              <Text as={"span"} color={"#0091ff"} fontFamily={"Roboto"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>+</Text>
                        </Box>
                        <Box color={"#fff"} textAlign={"center"} fontSize={"18px"} lineHeight={"140%"} w={"70%"}>
                        University Collaborations
                        </Box>
                      </Box>
                      <Box className="Hoz_line"w={"2px"} h={"116px"} bg={"linear-gradient(90deg,#fff,hsla(0,0%,100%,0))"}></Box>
                      <Box display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"baseline"} gap={"2px"}>
                              <Text as={"span"} color={"#fff"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>25</Text>
                              <Text as={"span"} color={"#0091ff"} fontFamily={"Roboto"} textAlign={"center"} fontSize={"40px"} fontWeight={"500"} lineHeight={"100%"}>+</Text>
                        </Box>
                        <Box color={"#fff"} textAlign={"center"} fontSize={"18px"} lineHeight={"140%"} w={"70%"}>
                        Employees Worldwide
                        </Box>
                      </Box>
                    </Box>
      </Box>
      <Box className="EleventhContainer" display={"flex"}  bg={"#fcfbf7"} fontFamily={"'Poppins'"}>
                      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} w={"50%"} p={"5rem 5rem 5rem 7rem"} bg={"#fcfbf7"} justifyContent={"center"} >
                          <Heading fontFamily={"Raleway,sans-serif"} w={"70%"} as={"h2"} fontSize={"56px"} mb={"1rem"} lineHeight={"66.102px"} fontWeight={500}>Get in touch with us</Heading>
                          <Text fontSize={"17.488px"} fontFamily={"'Poppins'"} letterSpacing={".525px"} mb={"2rem"}>Send your enquiry now!</Text>
                          <FormControl display={"flex"} bg={"#ededed"} w={"80%"} alignItems={"center"} justifyContent={"space-between"} p={"4.034px 4.034px 4.034px 20.172px"} borderRadius={"26.897px"}>
                          <Input type='email'  placeholder='Enter email address' name="email" outline={"none"} bg={"transparent"} borderRadius={"4px 0 0 4px"} border={"1px solid transparent"} fontSize={"14px"} w={"80%"} p={"8px"} />
                            <Box p={"8px 16px"} as="button" fontSize={"16px"} borderRadius={"26.897px"} cursor={
                              "pointer"
                            } width={"200px"} border={"none"} color={"#fff"} bg={"#272e5c"}>
                            Request Demo
                            </Box>
                          </FormControl>
                      </Box>
                      <Box display={"flex"} border={"2px solid #fcfbf7"} borderRight={0} borderLeft={0} alignItems={"flex-end"} justifyContent={"center"} w={"49%"} p={"4rem 0"}>
                              <Image maxW={"100%"} src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75" alt="map"/>
                      </Box>
      </Box>
    </Box>
    
  );
}

export default Home;
