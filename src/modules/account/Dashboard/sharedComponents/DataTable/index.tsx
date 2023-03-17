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
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

type DataTable = {
  [key: string]: string | number | ReactElement;
};

interface Props {
  headers: string[];
  data: DataTable[];
}

const DataTable = ({ headers, data }: Props) => {
  return (
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
                <Td key={index}>{row[actualRow]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
