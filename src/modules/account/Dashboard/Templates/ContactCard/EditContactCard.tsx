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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { getCorpCardsAction } from "../../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import { DashboardReducerState } from "../../types";
import ActionsInput from "../components/ActionInput";
import HardsandsSelect from "components/HardsandsSelect";

const EditContactCard = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<any>();

  const handleSelectedFile = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

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
                <FormLabel>Upload Image</FormLabel>
                <Input
                  id="image"
                  type="file"
                  hidden
                  ref={uploadRef}
                  onChange={handleSelectedFile}
                  accept=".jpg,.jpeg,.png,.svg"
                />
                <Box
                  height={"72px"}
                  border={"1px solid #000"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  px={4}
                >
                  <Button
                    color="#0038FF"
                    fontWeight={300}
                    bg="#d9d9d971"
                    borderRadius={"1rem"}
                    sx={{
                      "&:hover": {
                        color: "#0038FF",
                      },
                    }}
                    onClick={() => uploadRef.current?.click()}
                  >
                    {selectedFile ? "Replace" : "Choose"} File
                  </Button>
                  <Text>
                    {selectedFile ? selectedFile?.name : "no file selected"}
                  </Text>
                </Box>
              </FormControl>

              <Box
                display={"grid"}
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                columnGap={16}
              >
                <ActionsInput
                  id="title"
                  label="Title"
                  type="text"
                  placeholder="Enter Title"
                  mb={8}
                />
                <ActionsInput
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Enter Name"
                  mb={8}
                />
                <ActionsInput
                  id="company"
                  label="Company"
                  type="text"
                  placeholder="Enter Company"
                  mb={8}
                />
                <ActionsInput
                  label="Position"
                  id="position"
                  type="text"
                  placeholder="Enter Position"
                  mb={8}
                />
                <ActionsInput
                  label="Personal Phone"
                  id="personal-phone"
                  type="text"
                  placeholder="Enter Personal Phone"
                  mb={8}
                />
                <ActionsInput
                  label="Alternative Phone"
                  id="alt-phone"
                  type="text"
                  placeholder="Enter Alternative Phone"
                  mb={8}
                />
                <ActionsInput
                  label="Personal And Work Email"
                  id="work-email"
                  type="text"
                  placeholder="Enter Work Email"
                  mb={8}
                />
                <ActionsInput
                  label="Webiste URL"
                  id="website-url"
                  type="text"
                  placeholder="Enter Website URL"
                  mb={8}
                />
                <ActionsInput
                  label="Payment Link"
                  id="payment-link"
                  type="text"
                  placeholder="Enter Payment Link"
                  mb={8}
                />
                <ActionsInput
                  label="Home Address"
                  id="home-address"
                  type="text"
                  placeholder="Enter Home Address"
                  mb={8}
                />
                <HardsandsSelect
                  label="Home Country"
                  options={["Ghana", "Nigeria"]}
                  mb={8}
                />
                <HardsandsSelect
                  label="Home State"
                  options={["Lagos", "Abuja"]}
                  mb={8}
                />
              </Box>
            </Box>

            <Button bg="brand.200" width={"100%"} mt={10}>
              Save and Assign
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditContactCard;
