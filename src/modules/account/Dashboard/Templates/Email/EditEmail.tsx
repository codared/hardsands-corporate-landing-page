import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Textarea,
} from "@chakra-ui/react";
import ActionsInput from "../components/ActionInput";

const EditEmail = () => {
  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Email Action
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
                label="Email"
                id="email"
                type="email"
                placeholder="Enter Email"
                mb={8}
              />

              <ActionsInput
                label="Subject"
                id="subject"
                type="text"
                placeholder="Enter Subject"
                mb={8}
              />

              <FormControl mb={8}>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Textarea
                  id="content"
                  placeholder="Enter Content"
                  border="1px solid #000 !important"
                  borderRadius={0}
                  _placeholder={{ color: "#000" }}
                />
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

export default EditEmail;
