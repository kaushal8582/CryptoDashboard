import React from 'react'
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import SideDrawer from './SideDrawer';

const DashboardLayout = ({title , children}) => {

    const {isOpen,onClose,onOpen} = useDisclosure()



  return (

    <Flex>

        <Box
        display={{
          base:"none",
          lg:"flex"
        }}
        >

        <Sidebar   />
        </Box>

        <SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
          <TopNav title ={title} onOpen={onOpen}/>
          <Container maxW={"70rem"} overflowX={"hidden"} overflowY={"auto"} h={"calc(100vh - 100px)"} mt={6}  >{children}</Container>
        </Box>
      </Flex>
    
  )
}

export default DashboardLayout