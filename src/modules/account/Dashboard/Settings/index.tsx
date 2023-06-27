import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import Loader from "modules/account/components/Loader";
import { HARDSANDS_CORPERATE } from "modules/authentication/constants";
import { getCookie } from "modules/shared/cookie";
import React from "react";
import useSettings from "./hook";

const Settings = () => {
  const { corpName: companyName, profileImage } = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  ) || { corpName: "" };

  const {
    imagePreview,
    imageUploadLoading,
    handleImageChange,
    handleCompanyNameSubmit,
    handleCompanyChange,
    companyValues,
    nameLoading,
    passwordLoading,
    handlePasswordSubmit,
    handlePasswordChange,
    fileInputRef,
  } = useSettings({ companyName, profileImage });

  return (
    <Box>
      <Box>
        <Heading>Settings</Heading>
        <Text color="gray.500" fontSize="14px">
          Modify company details
        </Text>
      </Box>

      <Flex mt="8" flexDirection={["column", "column", "row"]} gap="8">
        <Flex
          direction={"column"}
          justifyContent={"start"}
          bg={"white"}
          p={[6]}
          position={"relative"}
          w={"100%"}
        >
          <Heading fontSize={20}>General</Heading>
          <Text color="gray.500" fontSize={14}>
            Update your personal information
          </Text>

          <Box mt={6} minW={["100%"]}>
            <Flex gap={4} alignItems={"center"}>
              <Flex
                boxSize={150}
                border={"1px solid"}
                minW={150}
                maxW={150}
                borderColor={"gray.200"}
              >
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={imagePreview}
                  alt={"profile preview image"}
                />
              </Flex>
              {imageUploadLoading ? (
                <Loader h="" />
              ) : (
                <Button
                  color="white"
                  bg={"brand.300"}
                  _hover={{ textColor: "black", bg: "brand.200" }}
                  borderRadius={"none"}
                  minW={150}
                  py={[6]}
                  my={[6]}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Text>Browse File</Text>
                </Button>
              )}
              <Input
                name={"file"}
                onChange={handleImageChange}
                ref={fileInputRef}
                type="file"
                display={"none"}
              />
            </Flex>
            <Box mt={10}>
              <CustomInput
                label="Company Name"
                name={"name"}
                value={companyValues}
                onChange={handleCompanyChange}
              />
              <Button
                color="black"
                bg={"brand.200"}
                _hover={{ textColor: "black", bg: "brand.100" }}
                borderRadius={"none"}
                py={[6]}
                my={[6]}
                onClick={handleCompanyNameSubmit}
                loadingText="Saving..."
                isLoading={nameLoading}
              >
                <Text>Save Changes</Text>
              </Button>
            </Box>
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          my={[2, 2, 0]}
          bg={"white"}
          p={[6]}
          position={"relative"}
          w={"100%"}
        >
          <Heading fontSize={20}>Password</Heading>
          <Text color="gray.500" fontSize={14}>
            Please enter your new password
          </Text>

          <Box mt={6} maxW={["100%", "100%", "50%"]}>
            <Box>
              {/* <CustomInput
                label="Current Password"
                name={"current"}
                onChange={handlePasswordChange}
              /> */}
              <CustomInput
                label="New Password"
                name={"password"}
                onChange={handlePasswordChange}
              />
              <CustomInput
                label="Confirm Password"
                name={"confirmPassword"}
                onChange={handlePasswordChange}
              />
              <Button
                color="black"
                bg={"brand.200"}
                _hover={{ textColor: "black", bg: "brand.100" }}
                borderRadius={"none"}
                py={[6]}
                my={[6]}
                onClick={handlePasswordSubmit}
                loadingText="Updating..."
                isLoading={passwordLoading}
              >
                <Text>Update Password</Text>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Settings;
