import { Box, Text, Heading, Button } from "@chakra-ui/react";
import ActionsInput from "../components/ActionInput";

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
              <ActionsInput
                id="name"
                label="Name"
                placeholder="Enter Name"
                mb={8}
              />

              <ActionsInput
                id="account-number"
                label="Account Number"
                placeholder="Enter Account Number"
                mb={8}
              />

              <ActionsInput
                id="bank-name"
                label="Bank Name"
                placeholder="Enter Bank Name"
                mb={8}
              />
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
