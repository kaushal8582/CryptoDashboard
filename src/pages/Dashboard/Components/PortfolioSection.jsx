import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const PortfolioSection = () => {
  return (
    <HStack mt={"20px"} bg={"white"} borderRadius={"xl"} p={"24px"} 
    flexDirection={{
      base:"column",
      xl:"row"
    }}
    align={{
      base:"flex-start",
      xl:"center"
    }} 
    spacing={{
      base:4,
      xl:0
    }} justify={"space-between"}>


     <HStack 
     spacing={{
      base:0,
      xl:36
     }}

     flexDirection={{
      base:"column",
      xl:"row"
    }}
    align={{
      base:"flex-start",
      xl:"center"
    }}>
     <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyles="h2" fontWeight={"bold"}>$ 112,312.24</Text>
      </Stack>

      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">wallet Balance</Text>
        </HStack>
        <HStack spacing={"8"}>
          <HStack>
            <Text textStyles="h2" fontWeight={"bold"}>112,312.24</Text> <Tag colorScheme="gray" >BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyles="h2" fontWeight={"bold"}>112,312.24</Text> <Tag colorScheme="gray" >INR</Tag>
          </HStack>
        </HStack>
      </Stack>
     </HStack>

    <HStack>
      <Button leftIcon={<Icon  />} >Deposite</Button>
      <Button>Withdrawal</Button>
    </HStack>

    </HStack>
  );
};

export default PortfolioSection;
