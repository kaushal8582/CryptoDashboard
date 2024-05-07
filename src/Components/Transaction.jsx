import React, { Fragment } from "react";
import { CustomCard } from "../chakra/CustomCard";
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaBtc } from "react-icons/fa";

const Transaction = () => {
  const transaction = [
    {
      id: "1",
      icon: RiMoneyRupeeCircleFill,
      text: "INR Deposit",
      amount: "+ 234,243,34",
      timestamp: "2020-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: RiMoneyRupeeCircleFill,
      text: "INR Deposit",
      amount: "+ 234,243,34",
      timestamp: "2020-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h={"full"}>
      <Text mb={'6'} fontSize={"sm"}  color={"black.80"} >Recent Transaction</Text>
      <Stack spacing={4} >
        {transaction.map((trans ,i) => {
          return (
            <Fragment key={trans.id}>
              {i !==0 && <Divider  />}
                  <Flex gap={5}>
              <Grid
                placeItems={"center"}
                bg={"black.5"}
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={trans.icon}></Icon>
              </Grid>

              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{trans.text}</Text>
                  <text fontSize={"sm"} color="black.40">
                    {trans.timestamp}
                  </text>
                </Stack>
                <Text textStyle={"h6"} >{trans.amount}</Text>
              </Flex>
            </Flex>
            </Fragment>
          );
        })}
      </Stack>

        <Button w={"full"} colorScheme="gray" mt={1}>View All</Button>

    </CustomCard>
  );
};


export default Transaction;
