import { Card, HStack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMail } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import InfoCard from '../../Components/InfoCard'


const Support = () => {
  return (
   
      <DashboardLayout title={"Support"}    >
       <HStack spacing={"80px"} display={"flex"}flexDir={"column"}>
       <SupportCard leftComponent={<ContactCard/>} title={"Contact Us"} text={" Have a Question or just want to know more? Feel free to reach out to us."} icon={IoMail}/>
        <SupportCard leftComponent={<InfoCard imgUrl={"/Shapes.svg"} 
            text={"Learn more about our real estate, mortgage, and  corporate account services"}
            tagText={"Contacts"}
            inverted={true}
          />} title={"Live Chat"} text={"Dont have time to waste the answer ? chat with us now"} icon={FaMessage}/>
       </HStack>
      </DashboardLayout>
   
  )
}

export default Support