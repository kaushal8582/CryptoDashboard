import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";

const PriceSection = () => {
  const timestapmps = ["7:14 PM", "3:23 AM", "1:14 PM", "6:23 AM", "9:14 PM"];

  return (
    <CustomCard>
      <HStack justify={"space-between"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">wallet Balance</Text>
          </HStack>
          <HStack spacing={"8"}>
            <HStack>
              <Text textStyles="h2" fontWeight={"bold"}>
                112,312.24
              </Text>{" "}
              <Text fontSize={"12px"} textColor={"green"} fontWeight={"bold"}>
                22%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon />}>Buy</Button>
          <Button>Sell</Button>
        </HStack>
      </HStack>

      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify={"end"}  >
        <TabList bg={"black.5"} p={"3px"}>

        {
          ["1H","1D","1W","1M"].map((tab)=>{
           return <Tab key={tab} fontSize={"sm"} p={"6px"} borderRadius={"4"} >{tab}</Tab>
          })
        }

          
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="../public/Graph.svg" mt={"2rem"} />
          </TabPanel>
          <TabPanel>
            {/* <p>two!</p> */}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack justify={"space-between"}>
        {timestapmps.map((timestam) => {
          return (
            <Text
              key={timestam}
              fontSize={"sm"}
              color={"black"}
              fontWeight={"semibold"}
            >
              {timestam}
            </Text>
          );
        })}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
