import { HStack, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import exportFromJSON from "export-from-json";
import { slugify } from "utils/string";

const SelectStateStat = ({
  tableName,
  unSelectAll,
  totalSelected,
  data,
}: {
  tableName: string;
  unSelectAll: () => void;
  totalSelected: number;
  data: any;
}) => {
  const fileName = slugify(tableName);
  const exportCSVType = exportFromJSON.types.csv;
  const exportExcelType = exportFromJSON.types.xls;

  const exportFromJSONConfigCSV = {
    data,
    fileName,
    exportType: exportCSVType,
  };

  const exportFromJSONConfigExcel = {
    data,
    fileName,
    exportType: exportExcelType,
  };

  const onDownloadAsCSV = () => {
    exportFromJSON(exportFromJSONConfigCSV);
  };

  const onDownloadAsExcel = () => {
    exportFromJSON(exportFromJSONConfigExcel);
  };

  return (
    <HStack
      bg={"white"}
      w={"80%"}
      alignSelf={"flex-end"}
      flexDirection={"row"}
      justifyContent={["flex-start", "flex-end"]}
    >
      <Flex mr={40}>
        <Text fontWeight="600">{totalSelected} item(s) selected</Text>
        <Button
          variant={"link"}
          borderRadius={0}
          fontWeight="600"
          ml={8}
          textColor={"red.400"}
          _hover={{
            bg: "none",
            color: "red.500",
          }}
          onClick={unSelectAll}
        >
          Deselect all
        </Button>
      </Flex>
      <Button
        color={"white"}
        bg={"brand.300"}
        borderRadius={0}
        _hover={{
          bg: "brand.400",
        }}
        onClick={onDownloadAsCSV}
      >
        Download as CSV
      </Button>
      <Button
        color={"white"}
        bg={"brand.300"}
        borderRadius={0}
        _hover={{
          bg: "brand.400",
        }}
        onClick={onDownloadAsExcel}
      >
        Download as Excel
      </Button>
    </HStack>
  );
};

export default SelectStateStat;
