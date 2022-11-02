import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Button,
  useToast,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import OurSiteMarketing from "./OurSiteMarketing";

export default function BankDetailDisplay({
  bankName,
  bankAccountName,
  bankAccountNumber,
}: {
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
}) {
  const toast = useToast();
  return (
    <Center>
      <Box
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        // boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        {/* <Image
          h={"120px"}
          w={"full"}
          alt={""}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        /> */}
        <Flex justify={"center"} mt={10}>
          <Avatar
            size={"xl"}
            bg={"white"}
            src={
              //   "https://source.unsplash.com/random/200x200?query=person"
              "https://cdn.iconscout.com/icon/free/png-256/bank-1417507-1201209.png"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={"bolder"} fontFamily={"body"}>
              {bankName}
            </Heading>
            {/* <Text color={"black.500"}>{bankName}</Text> */}
          </Stack>

          <Stack
            bgColor={"brand.10"}
            direction={"column"}
            justify={"flex-start"}
            spacing={6}
            rounded={"2xl"}
            p={8}
            mb={10}
          >
            <Stack spacing={0} align={"flex-start"}>
              <Text fontSize={"sm"} color={"gray.500"}>
                Account Name
              </Text>
              <Text fontWeight={600}>{bankAccountName}</Text>
            </Stack>
            <HStack
              spacing={0}
              justifyContent={"space-between"}
              align={"flex-start"}
            >
              <VStack align={"flex-start"}>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Account Number
                </Text>
                <Text fontWeight={600}>{bankAccountNumber}</Text>
              </VStack>
              <Button
                bg={"transparent"}
                onClick={() =>
                  navigator.clipboard.writeText(bankAccountNumber).then(() => {
                    toast({
                      status: "success",
                      duration: 500,
                      title: "Copied",
                    });
                  })
                }
              >
                <FaCopy />
              </Button>
            </HStack>
          </Stack>

          <OurSiteMarketing />
        </Box>
      </Box>
    </Center>
  );
}
