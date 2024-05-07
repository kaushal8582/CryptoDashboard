import { Box, Button,  HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BiSupport } from "react-icons/bi";
import {FaUserTie} from "react-icons/fa"
import { MdOutlineMenu } from "react-icons/md";



const TopNav = ({title,onOpen}) => {
  return (
   <Box px={"4"} bg={"White"} >
     <HStack maxW={"70rem"} h={16} justify={"space-between"}  mx={"auto"}>
      <Icon display={{
        base:"flex",
        lg:"none"
      }} as={MdOutlineMenu} onClick={onOpen} />
        <Heading fontWeight={"medium"} fontSize={"28px"} >{title}</Heading>

        <Menu>
          <MenuButton as={Button} rightIcon={BiSupport}>
            <Icon as={FaUserTie} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>


    </HStack>
   </Box>
  )
}

export default TopNav