import React from 'react'
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={4} borderRadius={"1rem"}>
    <HStack  spacing={6} display={"flex"} justifyContent={"start"} flexDir={"column"}>
      <Text fontWeight={"medium"} fontSize={"sm"}>
        You will receive response within 24 hours of time of submit
      </Text>
      <HStack justifySelf={"start"} >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="email" placeholder="Enter Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input type="email" placeholder="Enter Your SurName" />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter Your Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter Your Message" />
      </FormControl>
      <Checkbox defaultChecked>
        {" "}
        I agree with
        <Box as="span" color={"p.purple"}>
          Terms & Condition
        </Box>
      </Checkbox>

      <Stack>
        <Button fontSize={"sm"} >Send a Message</Button>
        <Button fontSize={"sm"} colorScheme="gray">Book a Meeting</Button>
      </Stack>
    </HStack>
  </Card>
  )
}

export default ContactCard