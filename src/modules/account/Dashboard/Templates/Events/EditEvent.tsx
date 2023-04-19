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
import { ChangeEvent, useState } from "react";

const EditEvent = () => {
  const [country, setCountry] = useState("");
  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Event Action
        </Heading>
        <Box bg="#fff">
          <Box as="form" mt={8} p={14}>
            <Box
              display="grid"
              gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              columnGap={[5, 10, 20]}
              rowGap={[3, 6, 12]}
              mb={6}
            >
              <ActionsInput
                id="event-name"
                type="text"
                label="Event"
                placeholder="Enter Event"
              />
              <ActionsInput
                id="event-time"
                label="Time"
                type="text"
                placeholder="Enter Time"
              />
              <ActionsInput
                id="event-date"
                type="date"
                label="Date"
                placeholder="Enter Date"
              />
              <HardsandsSelect
                label="Country"
                options={["+233", "+234"]}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCountry(e.target.value)
                }
                placeholder="Select Country"
              />
              <HardsandsSelect
                id="state"
                label="State"
                placeholder="Select State"
                options={["9am", "10pm"]}
              />
              <ActionsInput
                id="event-time"
                label="Time"
                type="text"
                placeholder="Enter Time"
              />
            </Box>

            <FormControl mb={6}>
              <FormLabel htmlFor="event-description">Description</FormLabel>
              <Textarea
                id="event-description"
                placeholder="Enter Description"
                border="1px solid #000 !important"
                borderRadius={0}
              />
            </FormControl>

            <FormControl mb={10}>
              <FormLabel htmlFor="event-image">Upload Image</FormLabel>
              <ActionsInput id="event-image" type="file" />
            </FormControl>
            <Button bg="brand.200" width={"100%"}>
              Save and Assign
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditEvent;
