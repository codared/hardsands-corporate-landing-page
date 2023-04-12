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

const EditContactCard = () => {
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
      <Heading>Templates</Heading>
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Contact Card Action
        </Heading>
        <Box bg="#fff">
          {loading ? (
            <Loader h={"30vh"} />
          ) : (
            <Box
              as="form"
              mt={8}
              p={[6, 14]}
              minH={"75vh"}
              pos="relative"
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
            >
              <Box>
                <FormControl mb={8}>
                  <FormLabel htmlFor="image">Upload Image</FormLabel>
                  <Input id="image" type="file" />
                </FormControl>
                <Box
                  display={"grid"}
                  gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  columnGap={16}
                >
                  <FormControl mb={8}>
                    <FormLabel htmlFor="image">Title</FormLabel>
                    <Input id="title" type="text" placeholder="Enter Title" />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" type="text" placeholder="Enter Name" />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter Company"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="position">Position</FormLabel>
                    <Input
                      id="position"
                      type="text"
                      placeholder="Enter Position"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="personal-phone">
                      Personal Phone
                    </FormLabel>
                    <Input id="personal-phone" type="tel" placeholder="Enter" />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="alternative-phone">
                      Alternative Phone
                    </FormLabel>
                    <Input
                      id="image"
                      type="tel"
                      placeholder="Enter Alternative Phone"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="work-email">
                      Personal and Work Email
                    </FormLabel>
                    <Input
                      id="work-email"
                      type="text"
                      placeholder="Enter Work Email"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="website-url">Website URL</FormLabel>
                    <Input
                      id="website-url"
                      type="text"
                      placeholder="Enter Website url"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="payment-link">Payment Link</FormLabel>
                    <Input
                      id="payment-link"
                      type="text"
                      placeholder="Enter Payment Link"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="home-address">Home Address</FormLabel>
                    <Input
                      id="home-address"
                      type="text"
                      placeholder="Enter Home Address"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="home-country">Home Country</FormLabel>
                    <Input
                      id="home-country"
                      type="text"
                      placeholder="Enter Home Country"
                    />
                  </FormControl>
                  <FormControl mb={8}>
                    <FormLabel htmlFor="home-state">Home State</FormLabel>
                    <Input
                      id="home-state"
                      type="text"
                      placeholder="Enter Home State"
                    />
                  </FormControl>
                </Box>
              </Box>

              <Button bg="brand.200" width={"100%"} mt={10}>
                Save and Assign
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EditContactCard;
