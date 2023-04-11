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
import { useEffect } from "react";
import { getCorpCardsAction } from "../../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import { DashboardReducerState } from "../../types";

const EditEvent = () => {
  const dispatch = useTypedDispatch();
  const { loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  useEffect(() => {
    dispatch(getCorpCardsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {loading ? (
            <Loader h={"30vh"} />
          ) : (
            <Box as="form" mt={8} p={14}>
              <Box display="flex" gap={[5, 10, 20]} mb={6}>
                <FormControl>
                  <FormLabel htmlFor="event-name">Event</FormLabel>
                  <Input
                    id="event-name"
                    type="text"
                    placeholder="Enter Event"
                    border={"1px solid #000"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="event-address">Address</FormLabel>
                  <Input
                    id="event-address"
                    type="text"
                    placeholder="Enter Address"
                  />
                </FormControl>
              </Box>

              <Box display="flex" gap={[5, 10, 20]} mb={6}>
                <FormControl>
                  <FormLabel htmlFor="event-date">Date</FormLabel>
                  <Input
                    id="event-date"
                    type="date"
                    placeholder="Enter Date"
                    border={"1px solid #000"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="event-time">Time</FormLabel>
                  <Input id="event-time" type="text" placeholder="Enter Time" />
                </FormControl>
              </Box>
              <FormControl mb={6}>
                <FormLabel htmlFor="event-description">Description</FormLabel>
                <Textarea
                  id="event-description"
                  placeholder="Enter Description"
                />
              </FormControl>

              <FormControl mb={10}>
                <FormLabel htmlFor="event-image">Upload Image</FormLabel>
                <Input id="event-image" type="file" />
              </FormControl>
              <Button bg="brand.200" width={"100%"}>
                Save and Assign
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EditEvent;
