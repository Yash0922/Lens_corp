import React, { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const ServiceBox = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box
        className={`blur ${data.blurClassName}`}
        h={"200px"}
        position={"absolute"}
        bg={data.blurColor}
        top={data.blurTop}
        left={data.blurLeft}
        right={data.blurRight}
        bottom={data.blurBottom}
        filter={"blur(170px)"}
        borderRadius={"172px"}
        w={"250px"}
      ></Box>
      <Box
        className="HeaderBox1"
        transition={".3s"}
        borderRadius={"10px"}
        _hover={{
          bg: "transparent",
          outline: `${data.hoverOutlineColor} solid 1px`,
        }}
        bg={"#fff"}
        position={"relative"}
        overflow={"hidden"}
        w={"470px"}
        h={"360px"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box>
          <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"}>
            <Box>
              <Text
                as={"span"}
                ml={"40px"}
                color={"#707070"}
                fontSize={"88px"}
                fontFamily={"Poppins,sans-serif"}
                fontWeight={"600"}
                transition={".3s"}
                opacity={".2"}
                lineHeight={"123.2px"}
                fontStyle={"normal"}
              >
                0
              </Text>
              <Text
                as={"span"}
                color={isHovered ? data.hoverColor : "#707070"}
                fontSize={"88px"}
                fontFamily={"Poppins,sans-serif"}
                fontWeight={"600"}
                transition={".3s"}
                opacity={isHovered ? null : ".2"}
                lineHeight={"123.2px"}
                fontStyle={"normal"}
              >
                {data.id}
              </Text>
            </Box>
            <Box
              border={"none"}
              color={data.textColor}
              fontFamily={"Poppins,sans-serif"}
              fontStyle={"normal"}
              transition={".3s"}
              ml={isHovered ? null : "-20px"}
              mt={"35px"}
              fontWeight={"600"}
              fontSize={"32px"}
            >
              {data.title}
            </Box>
          </Box>
          <Heading
            as={"h5"}
            fontFamily={"Poppins,sans-serif"}
            w={"80%"}
            color={"#8a8a8a"}
            lineHeight={"32.4px"}
            fontWeight={"500"}
            fontStyle={"normal"}
            fontSize={"18px"}
            m={"25px auto 0"}
          >
            {data.description}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceBox;