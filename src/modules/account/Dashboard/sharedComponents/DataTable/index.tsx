import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Box,
  Flex,
  Text,
  HStack,
  FlexProps,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

type DataTable = {
  [key: string]: string | number | ReactElement;
};

interface Props extends FlexProps {
  tableTitle: string;
  headers: string[];
  data: DataTable[];
}

const DataTable = ({ tableTitle, headers, data, ...rest }: Props) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"start"}
      my={[10]}
      bg={"white"}
      p={[6]}
      {...rest}
    >
      <HStack pb={[8]}>
        <Text fontSize={24} fontWeight={"bolder"}>
          {tableTitle}
        </Text>
      </HStack>
      <TableContainer>
        <Table size="lg" variant="simple">
          <TableCaption>
            <Flex w={"full"}>
              <Text>Page 1 of 1</Text>
            </Flex>
          </TableCaption>
          <Thead bg={"blackAlpha.50"}>
            <Tr>
              {headers.map((header, index) => (
                <Th
                  textTransform={"capitalize"}
                  fontFamily={"Campton"}
                  key={index}
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row: any, index: number) => (
              <Tr key={index}>
                {Object.keys(row).map((actualRow: any, i: number) => (
                  <Td key={i}>{row[actualRow]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default DataTable;
