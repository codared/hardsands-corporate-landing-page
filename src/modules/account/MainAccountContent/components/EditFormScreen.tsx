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
  const [formState, setFormState] = useState<any>(
    formStatus === ACTION_FORM_STATUS.ADD
      ? {}
      : retrieveFormKeyValue(selectedAction)
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
    const prefix =
      selectedSocial.label.includes("WhatsApp") ||
      selectedSocial.label.includes("Telegram")
        ? "Number"
        : "Username";
    setSelectedSocials(selectedSocial);
    setOpenTextModal(true);
  };

  const onDrawerClose = () => {
    setOpenTextModal(false);
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
              title="Enter Social Media Handle"
              onClose={onDrawerClose}
              isOpen={openTextModal}
              contentHeight={"50%"}
            >
              <>
                <FormControl>
                  <Box mb={4}>
                    <FormLabel>
                      {selectedSocials?.label} Username or Link to Social
                      Profile
                    </FormLabel>
                    <Input
                      type={"text"}
                      name={selectedSocials?.label.toLowerCase()}
                      borderRadius={0}
                      borderColor={"black"}
                      onChange={handleChange}
                      // @ts-ignore
                      value={formState[selectedSocials?.label.toLowerCase()]}
                      placeholder={`Enter ${selectedSocials?.label} Username/Link`}
                      _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                      size="lg"
                    />
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
