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

const EditEmail = () => {
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
          Email Action
        </Heading>
        <Box bg="#fff">
          {loading ? (
            <Loader h={"30vh"} />
          ) : (
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
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" placeholder="Enter Email" />
                </FormControl>
          
                <FormControl mb={8}>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Input id="subject" type="text" placeholder="Enter Subject" />
                </FormControl>

                <FormControl mb={8}>
                  <FormLabel htmlFor="content">Content</FormLabel>
                  <Textarea id="content" placeholder="Enter Content" />
                </FormControl>
              </Box>

              <Button bg="brand.200" width={"100%"} mt={1}>
                Save and Assign
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EditEmail;
