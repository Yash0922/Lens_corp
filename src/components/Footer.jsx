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
  useColorMode
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer(props) {

  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        className="footerTop"
        bg={colorMode === "light" ?"#fcfbf7":""}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"4rem 0"}
        fontFamily={"'Poppins'"}
      >
        <Box
          w={"85%"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <Image
              mt={"5px"}
              color={"transparent"}
              mb={"10px"}
              src={colorMode === "light" ?"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75":"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=256&q=75"}
            />
            <Text as={"span"} mb={"3rem"} >
              Tomorrow's Vision, Today!
            </Text>
            <Box
              className="LogoArray"
              display={"flex"}
              gap={"15px"}
              mt={"15px"}
            >
              <Box
                as={FaFacebook}
                size="30px"
                display="inline-block"
                _hover={{
                  color: "#0091ff",
                }}
              />
               <Box
                as={FaInstagram}
                size="30px"
                display="inline-block"
                _hover={{
                  color: "#0091ff",
                }}
              />
               <Box
                as={FaLinkedin}
                size="30px"
                display="inline-block"
                _hover={{
                  color: "#0091ff",
                }}
              />
               <Box
                as={FaDiscord}
                size="30px"
                display="inline-block"
                _hover={{
                  color: "#0091ff",
                }}
              />
               <Box
                as={FaXTwitter}
                size="30px"
                display="inline-block"
                _hover={{
                  color: "#0091ff",
                }}
              />
            </Box>
          </Box>
          <Box display={"flex"} fontFamily={"'Poppins'"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
                <Text as={"span"} fontSize={"16px"} fontWeight={"600"} letterSpacing={"2.88px"}mb={"2rem"}  >SITEMAP</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"} _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> MakeMyWeb.</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"} _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> Services</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"} 
                _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> Products</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"} 
                _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> Blogs</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"} _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}>Life at LENS</Text>
          </Box>
          <Box display={"flex"} fontFamily={"'Poppins'"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
                <Text as={"span"} fontSize={"16px"} fontWeight={"600"} letterSpacing={"2.88px"}mb={"2rem"} >CONNECT</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"}
                _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> +1-517-9300-792</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"}
                _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> +91-9990-736-796</Text>
                <Text as={"span"} fontSize={"15px"} fontWeight={"400"} lineHeight={"24px"} m={".25rem 0"}
                _hover={{
                  background: "linear-gradient(54deg,#0091ff,#9cfeff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} cursor={"pointer"}> solutions@lenscorp.ai</Text>
           
          </Box>
        </Box>
      </Box>
      <Box className="footerBottom" bg={colorMode === "light" ?"#272e5c":"#242424"} color={"#fff"} fontSize={"15px"} fontFamily={"'Poppins'"} w={"100%"} justifyContent={"center"} alignItems={"center"} display={"flex"} letterSpacing={"1.35px"}>
                    <Box w={"85%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"40px 0"}>
                        <Text as={"span"} color={"rgb(153, 153, 153)"} fontSize={"15px"} letterSpacing={"1.35px"}>
                        2023 <Text as={"span"} color={"white"}>LENS, Inc. </Text>
                        All rights reserved.
                        </Text>
                        <Box display={"flex"} justifyContent={"center"} alignSelf={"center"} gap={"20px"}>
                                <Text as={"span"} color={"#fff"}>Code of conduct</Text>
                                <Text as={"span"} color={"#fff"}>Sustainability Goals</Text>
                        </Box>
                    </Box>
      </Box>    
    </Box>
  );
}

export default Footer;
