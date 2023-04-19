import {
  Box,
  Text,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
} from "@chakra-ui/react";
import ActionsInput from "../components/ActionInput";
import HardsandsSelect from "components/HardsandsSelect";

const EditCall = () => {
  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Call Action
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
              <HardsandsSelect
                id="phone-number"
                label="Phone Code"
                placeholder="Enter Phone Code"
                options={["+233", "+234"]}
                w={["full", "full", "40%"]}
                mb={8}
              />
              <ActionsInput
                label="Phone Number"
                id="phone-number"
                type="text"
                placeholder="Enter Phone Number"
              />
              <Text mt={3} mb={8} color="#616161">
                Please select phone code before number E.g +1
              </Text>
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

export default EditCall;
