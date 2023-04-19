import {
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getCorpCardsAction } from "../../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { DashboardReducerState } from "../../types";
import ActionsInput from "../components/ActionInput";
import ActionsTextarea from "../components/ActionTextarea";
import HardsandsSelect from "components/HardsandsSelect";

const EditSMS = () => {
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
          SMS Action
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
                id="phone-code"
                placeholder="Enter Event"
                label="Phone Code"
                mb={8}
                w={["100%", "40%"]}
                options={["+233", "+234"]}
              />
              <ActionsInput
                id="phone-number"
                type="text"
                placeholder="Enter Phone Number"
                label="Phone Number"
              />
              <Text mt={4} mb={8} color="#616161">
                Please select phone code before number E.g +1
              </Text>
              <ActionsTextarea
                label="Text"
                id="text"
                placeholder="Enter Text"
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

export default EditSMS;
