import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import ContactCard from "./ContactCard";

const SupportCard = ({leftComponent ,icon,title,text}) => {
  return (
    <Flex gap={9}  flexDir={{
      base:"column",
      xl:"row"
    }}>
      <Stack maxW={"380px"} >
        <Icon as={icon} boxSize={6} color={"p.purple"} />
        <Text fontWeight={"meduum"} as="h1" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
         {text}
        </Text>
      </Stack>
     <Box maxW={"550px"} w={"full"} >
     {leftComponent}
     </Box>
    </Flex>
  );
};

export default SupportCard;
