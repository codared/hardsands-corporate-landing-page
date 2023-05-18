import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import CustomDrawer from "components/CustomDrawer";
import ActionFormBuilder from "modules/account/components/ActionFormBuilder";
import SocialProfile from "modules/account/components/ActionsDisplay/ProfileCardDisplay";
import { ACTION_FORM_STATUS, NumberFields } from "modules/account/constants";
import {
  getCountryBanks,
  getUploadUrl,
  uploadImageData,
} from "modules/account/services";
import React, { useState, useMemo } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { ActionsFormType, ActionsType } from "utils/types";
import { getCountryPhoneCode } from "utils/getCountries";
import CustomInput from "components/CustomInput";
import {
  camelCase,
  exceptionLabels,
  exceptionPlaceholders,
} from "modules/account/functions";

const retrieveFormKeyValue = (action: ActionsType) => {
  const fieldsPlaceHolder = {};
  action?.fields?.forEach((field: ActionsFormType) => {
    fieldsPlaceHolder[field?.formKey as string] = field.value;
  });
  return fieldsPlaceHolder;
};

const EditFormScreen = ({
  selectedAction,
  handleActionSubmit,
  isSubmitting,
  formStatus,
  setSelectedAction,
  makeRequestToSaveActionImage,
}: {
  formStatus?: string;
  isSubmitting: boolean;
  selectedAction: ActionsType;
  setSelectedAction?: (action: ActionsType) => void;
  handleActionSubmit: (action: ActionsType) => void;
  makeRequestToSaveActionImage: (action: ActionsType) => void;
}) => {
  const reduxDispatch = useTypedDispatch();
  const [selectedSocials, setSelectedSocials] = useState<{
    label: string;
    id: number;
    user: string;
  }>();
  const [imageUploadData, setImageUploadData] = useState<{
    name: string;
    url: string;
  }>();
  const toast = useToast();
  const [selectedImageUrl, setSelectedImageUrl] = useState<any>();
  const [selectedImageData, setSelectedImageData] = useState<any>({});
  const [imageLoading, setImageLoading] = useState<any>(false);
  const [openTextModal, setOpenTextModal] = useState<any>(false);
  const [modalTitle, setTitle] = useState<any>("");
  const [formState, setFormState] = useState<any>(
    formStatus === ACTION_FORM_STATUS.ADD
      ? {}
      : retrieveFormKeyValue(selectedAction)
  );
  const [showPhoneCodeError, setShowPhoneCodeError] = useState<boolean>(false);
  const [selectedPhoneCodeOption, setSelectedPhoneCodeOption] = useState<any>(
    formState.phoneCode
      ? {
          value: formState.phoneCode,
          label: formState.phoneCode,
        }
      : getCountryPhoneCode()[0]
  );

  const isProfile = selectedAction.fieldTitle === "Social Card";
  const isBank = selectedAction.fieldTitle === "Bank Account";
  const user = useTypedSelector((state) => state.app?.user);
  const [countryBanks, setCountryBanks] = useState([]);

  useMemo(async () => {
    if (isBank) {
      const _countryBanks = await getCountryBanks(user?.country as string);
      setCountryBanks(_countryBanks as any);
    }
  }, [isBank, user?.country]);

  const handleAction = () => {
    handleActionSubmit({ ...formState, ...selectedAction });
  };

  const handleImageUpload = async (imageUploadData: any, data: string) => {
    try {
      if (!imageUploadData?.url) {
        return;
      }
      formState.profileImage = imageUploadData.name;
      makeRequestToSaveActionImage(formState);
      await uploadImageData(imageUploadData.url, data);
      return;
    } catch (error) {
      setImageLoading(false);
      console.log(error);
      return;
    }
  };

  const handleChange = async (e: any) => {
    e.preventDefault();

    if (e.target.name === "profileImage") {
      const files = e.target.files;
      // Calculate size in KibiBytes
      if (files.length && files[0].size > 10097152) {
        // only allow images less that 10mb
        reduxDispatch({
          type: "APP_ERROR",
          payload: {
            isError: true,
            name: "Profile Image",
            message: "Image file is too large, should be less than 10MB",
          } as any,
        });
        return;
      } else {
        setImageLoading(true);
        setSelectedImageData({ name: files[0].name, size: files[0].size });
        const res = await getUploadUrl(files[0].type);
        if (!res?.isError) {
          setImageUploadData(res.result);
          let reader = new window.FileReader();
          reader.readAsDataURL(files[0]);
          reader.onloadend = function () {
            setSelectedImageUrl(reader.result);

            reader.readAsBinaryString(files[0]);
            reader.onloadend = async () => {
              await handleImageUpload(res.result, files[0]);
              setFormState({
                ...formState,
                [e.target.name]: res.result.name || files[0],
              });
              formState.profileImage = res.result.name;
            };
          };
        }
        setImageLoading(false);
      }
    }

    if (NumberFields.includes(e.target.name) && isNaN(e.target.value)) {
      return;
    } else if (
      (NumberFields.includes(e.target.name) &&
        e.target.name.toLowerCase().includes("number") &&
        e.target.value.length >= 11) ||
      (NumberFields.includes(e.target.name) &&
        e.target.name.toLowerCase().includes("phone") &&
        e.target.value.length >= 12)
    ) {
      return;
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }

    if (isProfile && !!selectedSocials?.label) {
      const fieldsList = selectedAction.fields?.find(
        (field: any) => field.name === selectedSocials?.label
      );
      if (!fieldsList && setSelectedAction) {
        setSelectedAction({
          ...selectedAction,
          fields: [
            // @ts-ignore
            ...selectedAction.fields,
            {
              name: selectedSocials?.label,
              formKey: selectedSocials?.label.toLowerCase(),
              type: "text",
            },
          ],
        });
      }
    }
  };

  const handleSocialSelect = (selectedSocial: any) => {
    const modalTitle =
      selectedSocial.label.includes("WhatsApp") ||
      selectedSocial.label.includes("Text") ||
      selectedSocial.label.includes("Phone")
        ? "Number"
        : "Username";
    setTitle(modalTitle);
    setSelectedSocials(selectedSocial);
    setOpenTextModal(true);
  };

  const onDrawerClose = () => {
    if (modalTitle === "Number" && formState.phone && !formState.phoneCode) {
      setShowPhoneCodeError(true);
    } else {
      setOpenTextModal(false);
      setShowPhoneCodeError(false);
    }
  };

  const handleImagePreviewClose = (): void => {
    setSelectedImageUrl(null);
    setSelectedImageData({});
  };

  return (
    <Box mb={8}>
      <Flex direction={["column", "column", "row"]}>
        {isProfile && (
          <>
            <Flex w={"100%"} justifyContent={"center"}>
              <SocialProfile
                editMode={true}
                imageLoading={imageLoading}
                selectedAction={selectedAction}
                handleChange={handleChange}
                fields={formState}
                selectedImageUrl={selectedImageUrl}
                handleSocialSelect={handleSocialSelect}
              />
            </Flex>
            <CustomDrawer
              title={
                modalTitle === "Number"
                  ? "Enter Contact Information"
                  : "Provide Necessary Info"
              }
              onClose={onDrawerClose}
              isOpen={openTextModal}
              contentHeight={"50%"}
            >
              <>
                <FormControl>
                  <Box mb={4}>
                    {modalTitle === "Number" ? (
                      <>
                        <FormLabel>Select Phone Code*</FormLabel>
                        <Select
                          size="lg"
                          placeholder="Phone Code"
                          options={getCountryPhoneCode()}
                          name={"phoneCode"}
                          onChange={(newValue: any) => {
                            const event = {
                              preventDefault: () => {},
                              target: {
                                name: "phoneCode",
                                value: newValue?.value,
                              },
                            };
                            handleChange(event);
                            setSelectedPhoneCodeOption(newValue);
                          }}
                          isRequired
                          value={selectedPhoneCodeOption}
                          chakraStyles={{
                            dropdownIndicator: (provided, state) => ({
                              ...provided,
                              background: "brand.100",
                              p: 0,
                              w: "40px",
                            }),
                            inputContainer: (provider) => ({
                              ...provider,
                              minW: "313px",
                              _placeholder: { color: "black" },
                            }),
                            container: (provider) => ({
                              ...provider,
                              borderRadius: "none",
                              borderColor: "black !important",
                            }),
                          }}
                        />
                        {showPhoneCodeError ? (
                          <Text color={"red.600"} mb={4}>
                            Please select phone code
                          </Text>
                        ) : (
                          <Box mb={4} />
                        )}
                        <CustomInput
                          label="Phone Number"
                          placeholder="Enter Phone Number"
                          name="phone"
                          type="text"
                          mb={4}
                          maxLength={11}
                          defaultValue={formState.phone}
                          isRequired
                          borderRadius={0}
                          borderColor={"black"}
                          _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                          onChange={handleChange}
                          onKeyDown={(e: any) => {
                            if (
                              e.key === " " ||
                              (!Number(e.key) &&
                                e.key !== "0" &&
                                e.key !== "Backspace" &&
                                e.key !== "ArrowLeft" &&
                                e.key !== "ArrowRight")
                            ) {
                              // if the entered key is not an interger, not a zero, backspace or arrow key
                              e.preventDefault();
                            }
                          }}
                        />
                      </>
                    ) : null}
                    {camelCase(selectedSocials?.label as string) !== "phone" && (
                      <>
                        <FormLabel>
                          {exceptionLabels(selectedSocials?.label as string)}
                        </FormLabel>
                        <Input
                          type={"text"}
                          name={camelCase(selectedSocials?.label as string)}
                          borderRadius={0}
                          borderColor={"black"}
                          onChange={handleChange}
                          value={
                            // @ts-ignore
                            formState[camelCase(selectedSocials?.label)] || ""
                          }
                          placeholder={exceptionPlaceholders(
                            selectedSocials?.label as string
                          )}
                          _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                          size="lg"
                        />
                      </>
                    )}
                  </Box>
                </FormControl>

                <SaveButton
                  text={"Add More Socials"}
                  handleAction={onDrawerClose}
                  isSubmitting={false}
                />
              </>
            </CustomDrawer>
          </>
        )}
        <Box w={"full"}>
          {!isProfile && (
            <ActionFormBuilder
              onChange={handleChange}
              formState={formState}
              fields={selectedAction.fields as ActionsFormType[]}
              selectedImageUrl={selectedImageUrl}
              selectedImageData={selectedImageData}
              handleImagePreviewClose={handleImagePreviewClose}
              imageLoading={imageLoading}
              banks={countryBanks}
            />
          )}
          <SaveButton handleAction={handleAction} isSubmitting={isSubmitting} />
        </Box>
      </Flex>
    </Box>
  );
};

const SaveButton = ({
  handleAction,
  isSubmitting,
  text = "Save",
  loadingText = "Adding Action",
}: any) => {
  return (
    <Box mt={[10]}>
      <Button
        px={[2]}
        py={[2]}
        cursor="pointer"
        w={"full"}
        justifyContent={"center"}
        transition={"all ease-in-out 200ms"}
        bg="brand.200"
        color={"black"}
        borderWidth="2px"
        borderColor={"brand.100"}
        borderRadius="0"
        _hover={{
          bg: "transparent",
          color: "black",
          borderWidth: "2px",
          borderColor: "brand.100",
        }}
        fontFamily={"MADE Outer sans Light"}
        onClick={handleAction}
        userSelect="none"
        isLoading={isSubmitting}
        loadingText={loadingText}
      >
        <Text>{text}</Text>
      </Button>
    </Box>
  );
};

export default EditFormScreen;
