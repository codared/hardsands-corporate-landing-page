import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import Loader from "modules/account/components/Loader";
import { updateLocalStorage } from "modules/account/functions";
import { HARDSANDS_CORPERATE } from "modules/authentication/constants";
import { getCookie } from "modules/shared/cookie";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTypedDispatch } from "redux/store";
import {
  changeCompanyLogoAction,
  changeCompanyNameAction,
  changePasswordAction,
} from "./actions";

const Settings = () => {
  const { corpName: companyName, profileImage } = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  ) || { corpName: "" };

  const { t } = useTranslation();
  const [companyValues, setCompanyValues] = React.useState(companyName || "");
  const [imagePreview, setImagePreview] = React.useState(
    profileImage || "https://via.placeholder.com/150"
  );
//   const [image, setImage] = React.useState<File | null>(null);
  const [nameLoading, setNameLoading] = React.useState(false);
  const [passwordLoading, setPasswordLoading] = React.useState(false);
  const [imageUploadLoading, setImageUploadLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const toast = useToast();

  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyValues(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image" && file.size < 1000000 * 5) {
      setImagePreview(URL.createObjectURL(file));
      handleImageSubmit(file);
    } else {
      setImagePreview("https://via.placeholder.com/150");
      setErrorMessage("Please select an image file less than 5mb");
    }
  };

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();
    setPasswordLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    // validate password fields are not empty and new password and confirm password are the same and current password is not the same as new password
    if (password.password === "" || password.confirmPassword === "") {
      setErrorMessage("Please fill all fields");
      setPasswordLoading(false);
      return;
    }
    if (password.password !== password.confirmPassword) {
      setErrorMessage("Passwords do no match");
      setPasswordLoading(false);
      return;
    }

    const res = await dispatch(
      changePasswordAction({ password: password.password })
    );
    if (!res?.isError && res?.result) {
      setSuccessMessage("Password is Updated Successfully");
      setPassword({
        password: "",
        confirmPassword: "",
      });
    } else if (res?.isError) {
      setErrorMessage("Password is not Updated: " + res?.message);
    }
    setPasswordLoading(false);
  };

  const handleCompanyNameSubmit = async (e: any) => {
    e.preventDefault();
    setNameLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    // if name is not the same as the previous name
    if (companyValues !== "" && companyValues !== companyName) {
      const res = await dispatch(
        changeCompanyNameAction({ name: companyValues })
      );
      if (!res?.isError && res?.result) {
        setSuccessMessage("Company Name is Updated Successfully");
        updateLocalStorage("corpName", companyValues);
      } else if (res?.isError) {
        setErrorMessage("Company Name is not Updated: " + res?.message);
      }
    }
    setNameLoading(false);
  };

  const handleImageSubmit = async (file: Blob) => {
    setImageUploadLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const form = new FormData();
    form.append("file", file);
    const { payload } = await dispatch(changeCompanyLogoAction(form));
    if (!payload?.isError && payload?.result) {
      setSuccessMessage(
        "Company logo changed successfully, might take a while to take effect properly"
      );
      setImagePreview(payload?.result.profileImage);
      updateLocalStorage("profileImage", payload?.result.profileImage);
    }
    setImageUploadLoading(false);
  };

  useEffect(() => {
    if (errorMessage) {
      toast({
        position: "top-right",
        title: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => {
          setErrorMessage("");
          dispatch({ type: "DASHBOARD_APP_ERROR", payload: {} });
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      toast({
        position: "top-right",
        title: successMessage,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMessage]);

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

          <Box mt={6} maxW={["100%", "100%", "50%"]}>
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
                <Text>Save change</Text>
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
            Please enter your current password to change your password{" "}
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
