import React,{useState} from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  background,
  useColorMode
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useScroll,useViewportScroll  } from 'framer-motion';
import { Link } from 'react-router-dom';

import { HamburgerIcon, CloseIcon, MoonIcon,SunIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Company', 'Blogs'];

const NavLink = ({ children, isActive = true, onClick, toggleColorMode }) => {


    const bgColor = useColorModeValue('#FFFFFF');
    const gradientStyle = {
      background: 'linear-gradient(54deg, rgba(0,145,255,1) 0%, rgba(156,254,255,1) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bolder',
      fontSize: '16px',
      fontFamily: 'Poppins, sans-serif', 

    };
    console.log("active4", isActive)
    return (
      <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: bgColor }}
      to={`/${children}`}
      style={isActive ? gradientStyle : null}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  toggleColorMode: PropTypes.func.isRequired, // Add toggleColorMode to propTypes
};
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeLink, setActiveLink] = React.useState("Home");
    const { colorMode, toggleColorMode } = useColorMode();
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const { scrollY } = useViewportScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollY.current > scrollY.prev) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
    };

    const handleScrollListener = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollListener);

    return () => window.removeEventListener('scroll', handleScrollListener);
  }, [scrollY]);
    const handleLinkClick = (link) => {
        console.log("active2",link)
      setActiveLink(link);
    };

     console.log("active",activeLink)
  return (
  
    <Box bg={colorMode === 'light'?useColorModeValue('#FFFFFF'):"black"} px={4} zIndex={"99"} position={"fixed"}  top={"0"} left={"0"}w={"100%"}
     transition="transform 0.3s ease-in-out"
     transform={isNavbarVisible ? "translateY(0)" : "translateY(-100%)"}
    >
      <Flex h={20} alignItems={'center'} justifyContent={'space-around'} gap={'45%'} >
        <Box alignItems={'center'}>
        {colorMode === 'light' && (
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            alt="Logo"
            width={80}
            height={70}
          />
        )}
          {colorMode !== 'light' && (
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75"
            alt="Logo"
            width={80}
            height={70}
          />
        )}
        </Box>
        <HStack spacing={"30px"} alignItems={'center'}>
          <HStack as={'nav'} spacing={"30px"} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
                
              <NavLink
                key={link}
                isActive={activeLink === link}
                onClick={() => handleLinkClick(link)}
                toggleColorMode={toggleColorMode}
              >
                {link}
              </NavLink>
              
            ))}
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === 'light'?<MoonIcon  boxSize={5} />:<SunIcon color={"yellow"} boxSize={5}/>}
              variant="ghost"
              size="md"
              onClick={toggleColorMode}
            />
          </Flex>
        </HStack>
      </Flex>
      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  isActive={activeLink === link}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </Box>
  
  );
};

export default Navbar;