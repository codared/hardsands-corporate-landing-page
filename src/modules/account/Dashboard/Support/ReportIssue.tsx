import {
  Box,
  Flex,
  Text,
  Heading,
  FormLabel,
  Select,
  FormControl,
  Button,
} from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import SupportNav from "./components/SupportNav";

const ReportIssue = () => {
  return (
    <Box>
      <Heading>Support</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Lorem ipsium is simply dummy text of the printing and type setting
      </Text>
      <Box mt={6} bg="#fff" p={5}>
        <SupportNav />
        <Box as="form" px={10} py={5} mt={5} border="1px solid #d9d9d9">
          <Heading fontSize={"1.25rem"} textAlign={"center"} mb={6}>
            Report An Issue
          </Heading>
          <CustomInput mb={6} name="Name" label="Name" />
          <CustomInput mb={6} name="email" label="Email" />
          <FormControl mb={6}>
            <FormLabel>Choose Issue</FormLabel>
            <Select borderRadius={"none"} placeholder="Choose Issue">
              <option>About my existing order</option>
              <option>I need help with cards or my account</option>
            </Select>
          </FormControl>
          <CustomInput mb={6} name="Description" label="Description" />
          <Button color="#fff" bg="brand.300" w="full" borderRadius={"none"}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportIssue;
