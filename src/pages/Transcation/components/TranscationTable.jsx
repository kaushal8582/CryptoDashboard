import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TranscationTable = () => {
  const tableData = [
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "pending",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "pending",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "processing",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "pending",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "canclled",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "pending",
    },
    {
      id: "HD843NkR",
      data: "2023-05-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+42,123",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#3c3838",
    processing: "#f5a50b",
    completed: "#27ae63",
    canclled: "#eb5757",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>

        <Tbody color={"p.black"}>
          {tableData.map((data) => {
            return (
              <Tr key={data.id}>
                <Td>{data.id}</Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {data.data}
                    </Text>
                    <Text fontSize={"xs"} color={"black.60"}>
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  {" "}
                  <Stack spacing={0}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {data.type.name}
                    </Text>
                    <Text fontSize={"xs"} color={"black.60"}>
                      {data.type.tag}
                    </Text>
                  </Stack>
                </Td>

                <Td fontSize={"sm"} fontWeight={"medium"}>
                  {data.amount}
                </Td>
                <Td fontSize={"sm"} fontWeight={"medium"}>
                 
                  <Tag bg={statusColor[data.status]} color={"white"} borderRadius={"full"} >{data.status}</Tag>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TranscationTable;
