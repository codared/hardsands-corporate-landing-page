import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

interface HowWeCompareProps extends BoxProps {}

function HowWeCompare({ ...rest }: HowWeCompareProps) {
  return (
    <Box {...rest} px={[4, 8, 48]}>
      <Flex direction={"column"} textAlign={"center"}>
        <Heading mb={4} color={"brand.300"}>
          How we compare
        </Heading>
        <Text>Check out the features comparison to see for yourself.</Text>
      </Flex>

      <TableContainer my={[16]}>
        <Table variant={"unstyled"} size="sm" maxW={"100%"}>
          <Thead>
            <Tr fontSize={[10, 14]}>
              <Th></Th>
              <Th
                textAlign={"center"}
                whiteSpace={["pre-wrap", "pre-wrap", "nowrap"]}
                w={120}
                maxW={120}
                py={[8]}
              >
                Paper Cards
              </Th>
              <Th
                textAlign={"center"}
                whiteSpace={["pre-wrap", "pre-wrap", "nowrap"]}
                w={120}
                maxW={120}
                bg={"brand.100"}
                py={[8]}
              >
                Hardsands Cards
              </Th>
              <Th
                textAlign={"center"}
                whiteSpace={["pre-wrap", "pre-wrap", "nowrap"]}
                w={120}
                maxW={120}
                py={[8]}
              >
                Other Cards
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              "High-level security",
              "Payment links and more",
              "Card sharing via QR code, e.t.c",
              "Social media links",
              "Super intuitive user interface",
              "Basic card analytics",
            ].map((item: string, index: number) => (
              <Tr whiteSpace={["pre-wrap"]} fontSize={[10, 14]} key={index}>
                <Td w={140} fontWeight={"600"}>
                  {item}
                </Td>
                <Td py={[4, 8]}>
                  <AiOutlineCloseCircle
                    style={{ margin: "0 auto" }}
                    size={20}
                  />
                </Td>
                <Td py={[4, 8]} bg={"brand.100"}>
                  <AiOutlineCheckCircle
                    style={{ margin: "0 auto" }}
                    color="orange"
                    size={20}
                  />
                </Td>
                <Td py={[4, 8]}>
                  <AiOutlineCloseCircle
                    style={{ margin: "0 auto" }}
                    size={20}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default HowWeCompare;
