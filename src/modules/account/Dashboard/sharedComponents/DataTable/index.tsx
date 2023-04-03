import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Flex,
  Text,
  HStack,
  FlexProps,
  Checkbox,
} from "@chakra-ui/react";
import Loader from "modules/account/components/Loader";
import React, { ReactElement } from "react";
import SelectStateStat from "./components/SelectStateStat";
import { buildMemberDownloadableData } from "./functions";
import { useSelectable } from "./hooks";

type DataTable = {
  [key: string]: boolean | string | number | ReactElement;
};

interface Props extends FlexProps {
  checkable?: boolean;
  loading?: boolean;
  tableTitle: string;
  headers: string[];
  data: DataTable[];
  onCheck?: (row: any) => void;
  downloadableData?: any;
  excludeProps?: string[];
}

const DataTable = ({
  checkable,
  tableTitle,
  headers,
  data,
  onCheck,
  loading,
  excludeProps,
  downloadableData,
  ...rest
}: Props) => {
  const {
    dataState,
    rowSelected,
    allChecked,
    isIndeterminate,
    handleCheckBox,
    handleUnSelecteAll,
    handleAllCheckBox,
  } = useSelectable(data, onCheck);

  // filter out the data that is selected from downloadable data to be used for download
  const filteredDownloadableData =
    downloadableData.length > 0
      ? downloadableData?.data.filter((item: any) =>
          rowSelected.find((row) => item.id === row.id)
        )
      : [];

  return (
    <Flex
      direction={"column"}
      justifyContent={"start"}
      my={[10]}
      bg={"white"}
      p={[6]}
      position={"relative"}
      {...rest}
    >
      <HStack py={8} minH={"104px"}>
        <Text fontSize={24} fontWeight="600">
          {tableTitle}
        </Text>
        {rowSelected.length > 0 && (
          <SelectStateStat
            tableName={tableTitle}
            totalSelected={rowSelected.length}
            unSelectAll={handleUnSelecteAll}
            data={downloadableData?.buildMethod(filteredDownloadableData)}
          />
        )}
      </HStack>
      <TableContainer>
        {loading ? (
          <Loader h={"30vh"} />
        ) : dataState && dataState.length > 0 ? (
          <Table size="lg" variant="simple">
            <TableCaption>
              <Flex w={"full"}>
                <Text>Page 1 of 1</Text>
              </Flex>
            </TableCaption>
            <Thead bg={"blackAlpha.50"}>
              <Tr>
                {checkable && (
                  <Th textTransform={"capitalize"} fontFamily={"Campton"}>
                    <Checkbox
                      isChecked={allChecked}
                      isIndeterminate={isIndeterminate}
                      onChange={(e: any) => handleAllCheckBox(e)}
                      colorScheme={"orange"}
                    />
                  </Th>
                )}
                {headers.map((header, index) => {
                  if (excludeProps?.includes(header)) return null;
                  return (
                    <Th
                      textTransform={"capitalize"}
                      fontFamily={"Campton"}
                      key={index}
                    >
                      {header}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {dataState.map((row: any, index: number) => {
                return (
                  <Tr
                    key={index}
                    bg={row.isSelected ? "brand.10" : "none"}
                    rounded={"md"}
                  >
                    {checkable && (
                      <Td>
                        <Checkbox
                          onChange={(e: any) => handleCheckBox(e, row)}
                          value={index}
                          isChecked={row.isSelected}
                          colorScheme={"orange"}
                        />
                      </Td>
                    )}
                    {Object.keys(row).map((actualRow: any, i: number) => {
                      if (excludeProps?.includes(actualRow)) return null;
                      return <Td key={i}>{row[actualRow]}</Td>;
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        ) : (
          <Box textAlign={"center"} p={[10]}>
            <Text>No data found</Text>
          </Box>
        )}
      </TableContainer>

      {rowSelected.length > 0 && (
        <SelectStateStat
          tableName={tableTitle}
          totalSelected={rowSelected.length}
          unSelectAll={handleUnSelecteAll}
          data={buildMemberDownloadableData(filteredDownloadableData)}
        />
      )}
    </Flex>
  );
};

export default DataTable;
