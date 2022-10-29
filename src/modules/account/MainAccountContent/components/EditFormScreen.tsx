import { Box, Flex, Grid, Tag, Text, Image, Button } from "@chakra-ui/react";
import ActionFormBuilder from "modules/account/components/ActionFormBuilder";
import ProfileCardPreview from "modules/account/components/ProfileCardPreview";
import { ACTION_FORM_STATUS, NumberFields } from "modules/account/constants";
import { getCountryBanks, getUploadUrl } from "modules/account/services";
import React, { useState, useMemo, useEffect } from "react";
import { useTypedSelector } from "redux/store";
import { SOCIAL_LINKS } from "utils/constants";
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
  setImageUploadData,
}: {
  formStatus?: string;
  isSubmitting: boolean;
  selectedAction: ActionsType;
  setImageUploadData?: any;
  handleActionSubmit: (action: ActionsType) => void;
}) => {
  const [showAddSocials, setAddSocials] = useState<boolean>(false);
  const [selectedSocials, setSelectedSocials] = useState<any[]>([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState<any>();
  const [imageLoading, setImageLoading] = useState<any>(false);
  const [formState, setFormState] = useState<any>(
    formStatus === ACTION_FORM_STATUS.ADD
      ? {}
      : retrieveFormKeyValue(selectedAction)
  );
  const isProfile = selectedAction.title === "Profile";
  const isBank = selectedAction.title === "Bank Account";
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

  const handleAddSocials = () => {
    setAddSocials(true);
  };

  const handleChange = async (e: any) => {
    e.preventDefault();

    if (e.target.name === "profileImage") {
      const files = e.target.files;
      if (files.length && files[0].size > 2097152) {
        // only allow images less that 2mb
        return;
      } else {
        // console.log("image value >>>>> ", files[0]);
        setImageLoading(true);
        const res = await getUploadUrl(files[0].imageType);
        // console.log("res >>> ", res);
        if (!res?.isError) {
          setImageUploadData(res.result);
          let reader = new window.FileReader();
          reader.readAsDataURL(files[0]);
          reader.onloadend = function () {
            setSelectedImageUrl(reader.result);

            reader.readAsBinaryString(files[0]);
            reader.onloadend = () => {
              setFormState({
                ...formState,
                [e.target.name]: files[0],
              });
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
  };

  const handleSocialSelect = (selectedSocial: any) => {
    const prefix =
      selectedSocial.label.includes("WhatsApp") ||
      selectedSocial.label.includes("Telegram")
        ? "Number"
        : "Username";
    selectedAction.fields = [
      // @ts-ignore
      ...selectedAction.fields,
      { name: `${selectedSocial.label} ${prefix}`, type: "text" },
    ];
    setSelectedSocials([...selectedSocials, { ...selectedSocial }]);
    setAddSocials(false);
  };

  return (
    <Box mb={8}>
      <Flex direction={["column", "column", "row"]}>
        {isProfile && (
          <>
            <ProfileCardPreview
              addSocials={handleAddSocials}
              selectedSocials={selectedSocials}
            />
            <Box w={8} />
          </>
        )}
        {showAddSocials && (
          <Box w={"full"}>
            {Object.keys(SOCIAL_LINKS).map((socialLink, index) => (
              <Box key={index} mb={10}>
                <Text fontFamily={"MADE Outer sans"} mb={5}>
                  {socialLink}
                </Text>
                <Grid
                  templateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(4, 1fr)",
                  ]}
                  gap={["1rem", "2rem"]}
                  overflow="hidden"
                >
                  {(SOCIAL_LINKS[socialLink] as any[]).map(
                    (social: any, index) => (
                      <Box
                        key={index}
                        boxSize={100}
                        borderRadius={"25px"}
                        overflow="hidden"
                        cursor={"pointer"}
                        onClick={
                          social.pro
                            ? () => {}
                            : () => handleSocialSelect(social)
                        }
                        position="relative"
                      >
                        {social.pro && (
                          <Tag
                            position={"absolute"}
                            fontFamily={"MADE Outer sans"}
                          >
                            PRO
                          </Tag>
                        )}
                        <Image
                          objectFit={"contain"}
                          src={social.image.src}
                          alt="social image"
                        />
                      </Box>
                    )
                  )}
                </Grid>
              </Box>
            ))}
          </Box>
        )}
        {!showAddSocials && (
          <Box w={"full"}>
            <ActionFormBuilder
              onChange={handleChange}
              formState={formState}
              fields={selectedAction.fields as ActionsFormType[]}
              selectedImageUrl={selectedImageUrl}
              imageLoading={imageLoading}
              banks={countryBanks}
            />
            <Box p={[4]} position={"absolute"} bottom={0} left={0} right={0}>
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
                fontFamily={"MADE Outer sans"}
                onClick={handleAction}
                userSelect="none"
                isLoading={isSubmitting}
                loadingText={"Adding Action"}
              >
                <Text>Save</Text>
              </Button>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default EditFormScreen;
