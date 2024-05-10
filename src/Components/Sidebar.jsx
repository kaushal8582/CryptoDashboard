import React from "react";
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {

  const location = useLocation();
  const isActiveLink = (link)=>{
    return location.pathname===link
  }

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: MdOutlinePayments,
      text: "Transaction",
      link: "/transcation",
    },
  ];

  return (
    <Stack
    bg={"white"}
      boxShadow={{
        base:"none",
        lg:"lg"
      }}
      flexDirection={"column"}
      justify={"space-between"}
      w={{
        base:"full",
        lg:"16rem"
      }}
      h={"100vh"}
      

     
    >
      <Box >
        <Heading fontSize={"20px"} pt={"56px"} as={"h1"} textAlign={"center"}>
          Developer_kaushal
        </Heading>

        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text} >
            <HStack
              bg={isActiveLink(nav.link) ? "#f3f3f7":"transparent"}
              py={"3"}
              px={"4"}
              color="#797e82"
              borderRadius={"10px"}
              _hover={{
                cursor:"pointer",
                bg: "#f3f3f7",
                color: "#000000",
                fontWeight: "bold",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontSize={"14px"} fontWeight={"medium"}>
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt={"6"} mx={"3"} mb={6}>
        <Link to={"/support"}>
        <HStack
          py={"3"}
          px={"4"}
          bg={isActiveLink("/support") ? "#f3f3f7":"transparent"}
          color="#797e82"
          borderRadius={"10px"}
          _hover={{
            cursor:"pointer",
            bg: "#f3f3f7",
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize={"14px"} fontWeight={"medium"}>
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidebar;
