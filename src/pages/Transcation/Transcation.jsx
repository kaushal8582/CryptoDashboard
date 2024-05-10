import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import TranscationTable from "./components/TranscationTable";
import { BiSolidSearch } from "react-icons/bi";

const Transcation = () => {

  const tabs =[
    {
      name:"All",
      count:349
    },
    {
      name:"Deposite",
      count:114
    },
    {
      name:"Withdrawal",
      count:66
    },
    {
      name:"Trade",
      count:50
    },
  ]



  return (
    <DashboardLayout title={"Transcation"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<MdOutlineFileDownload />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt={4} display={"flex"} justifyContent={"space-between"} >
            <HStack>
            {
              tabs.map((tab)=>(
                <Tab key={tab.name} display={"flex"} gap={2} >{tab.name} <Tag colorScheme="gray">{tab.count}</Tag></Tab>
              ))
            }
            </HStack>
            <InputGroup maxW={"200px"} pb={2} pr={6}>
              <InputLeftElement>
                <Icon as={BiSolidSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search ...." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
             <TranscationTable/>
            </TabPanel>
            <TabPanel>
            <TranscationTable/>
            </TabPanel>
            <TabPanel>
            <TranscationTable/>
            </TabPanel>
            <TabPanel>
            <TranscationTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transcation;
