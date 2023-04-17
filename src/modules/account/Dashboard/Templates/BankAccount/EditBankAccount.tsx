import {
  Box,
  Text,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

const EditBankAccount = () => {
  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Bank Account Action
        </Heading>
        <Box bg="#fff">
        
            <Box
              as="form"
              mt={8}
              p={14}
              minH={"75vh"}
              pos="relative"
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
            >
              <Box>
                <FormControl mb={8} w={["100%", "40%"]}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" type="text" placeholder="Enter Name" />
                </FormControl>
                <FormControl mb={8}>
                  <FormLabel htmlFor="account-number">Account Number</FormLabel>
                  <Input
                    id="account-number"
                    type="text"
                    placeholder="Enter Account Number"
                  />
                </FormControl>
                <FormControl mb={8}>
                  <FormLabel htmlFor="bank-name">Bank Name</FormLabel>
                  <Input type="text" id="bank-name" placeholder="Enter Bank Name" />
                </FormControl>
              </Box>

              <Button bg="brand.200" width={"100%"} mt={1}>
                Save and Assign
              </Button>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditBankAccount;
