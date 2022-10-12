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
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

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
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          alt={""}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
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
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {bankAccountName}
            </Heading>
            {/* <Text color={"black.500"}>{bankName}</Text> */}
          </Stack>

          <Stack direction={"column"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{bankName}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Bank Name
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <HStack>
                <Text fontWeight={600}>{bankAccountNumber}</Text>
                <Button
                  bg={"transparent"}
                  onClick={() =>
                    navigator.clipboard
                      .writeText(bankAccountNumber)
                      .then(() => {
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
              <Text fontSize={"sm"} color={"gray.500"}>
                Bank Account
              </Text>
            </Stack>
          </Stack>

          {/* <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button> */}
        </Box>
      </Box>
    </Center>
  );
}
