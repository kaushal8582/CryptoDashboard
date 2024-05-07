import React from "react";
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


const Sidebar = () => {
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
            <HStack
              key={nav.text}
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
          ))}
        </Box>
      </Box>

      <Box mt={"6"} mx={"3"} mb={6}>
        <HStack
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
          <Icon as={BiSupport} />
          <Text fontSize={"14px"} fontWeight={"medium"}>
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidebar;
