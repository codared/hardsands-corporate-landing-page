import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex,
  IconButton,
  SimpleGrid,
  Tag,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  Input,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import {
  findSameSocials,
  getSocialIcons,
  getSocialEditIcons,
  getSocialLink,
} from "modules/account/functions";
import { useRef } from "react";
import { FiEdit3 } from "react-icons/fi";
import { ActionsType } from "utils/types";
import { SOCIAL_LINKS } from "../../constants";
import { SocialCardActionType } from "../../types";
import OurSiteMarketing from "../OurSiteMarketing";

export default function SocialProfile({
  editMode = false,
  imageLoading = false,
  handleSocialSelect,
  handleChange,
  selectedAction,
  selectedImageUrl,
  fields,
}: {
  editMode?: boolean;
  imageLoading?: boolean;
  handleChange?: (e: any) => Promise<void>;
  handleSocialSelect?: (selectedSocials: any) => void;
  selectedAction?: ActionsType;
  selectedImageUrl?: string;
  fields?: SocialCardActionType;
}) {
  const hiddenFileInput = useRef(null);
  const EditableControls = ({ ...rest }) => {
    const { isEditing, getEditButtonProps } = useEditableControls();

    return isEditing ? null : editMode ? (
      <IconButton
        // position={"absolute"}
        // {...rest}
        m={"auto 0"}
        variant="outline"
        colorScheme="brand.100"
        aria-label="edit"
        rounded={"full"}
        borderColor={"brand.100"}
        bgColor={"brand.100"}
        icon={<FiEdit3 size={18} />}
        {...getEditButtonProps()}
      />
    ) : null;
  };

  // Extract the static data and use the rest as socials
  const { name, profileImage, title, ...rest } = fields as SocialCardActionType;

  return (
    <Center>
      <Box
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        // boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"180px"} w={"full"} bg={"brand.100"} />
        <Flex justify={"center"}>
          <Box w={"50%"} mt={-24} position={"relative"}>
            <>
              {!imageLoading && (
                <Image
                  w={196}
                  h={196}
                  m="0 auto"
                  objectFit={"cover"}
                  src={
                    selectedImageUrl ||
                    profileImage ||
                    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  }
                  bgColor={"gray.300"}
                  alt={"profile image"}
                  css={{
                    border: "10px solid white",
                  }}
                  borderRadius={"25px"}
                />
              )}
              {imageLoading && (
                <Box
                  bgColor={"gray.300"}
                  w={196}
                  h={196}
                  css={{
                    border: "10px solid white",
                  }}
                  borderRadius={"25px"}
                >
                  <CircularProgress
                    position={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    isIndeterminate
                    transform={"translate(-50%, -50%)"}
                    // value={40}
                    color="green.400"
                  >
                    {/* <CircularProgressLabel>40%</CircularProgressLabel> */}
                  </CircularProgress>
                </Box>
              )}
            </>
            {editMode && (
              <>
                <IconButton
                  position={"absolute"}
                  bottom={0}
                  right={0}
                  m={"auto 0"}
                  variant="outline"
                  colorScheme="brand.100"
                  aria-label="edit"
                  rounded={"full"}
                  borderColor={"brand.100"}
                  bgColor={"brand.100"}
                  icon={<FiEdit3 />}
                  // @ts-ignore
                  onClick={() => hiddenFileInput?.current?.click()}
                />
                <Input
                  type={"file"}
                  display="none"
                  ref={hiddenFileInput}
                  accept="image/png, image/jpeg"
                  name={"profileImage"}
                  onChange={handleChange}
                  placeholder={`Enter ${name}`}
                  _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                />
              </>
            )}
          </Box>
        </Flex>

        <Flex p={6} direction={"column"} position={"relative"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Editable
              fontSize={24}
              fontWeight={"bolder"}
              fontFamily={"body"}
              defaultValue={name || "Your Name"}
              placeholder={"Your Name"}
              isPreviewFocusable={editMode}
              onChange={(val) => {
                let e = {
                  preventDefault: () => {},
                  target: {
                    name: "name",
                    value: val,
                  },
                };
                handleChange && handleChange(e);
              }}
            >
              <EditablePreview />
              <EditableInput name={"name"} />
              <EditableControls top={6} right={6} />
            </Editable>
            <Editable
              placeholder={"Work Title | Position"}
              defaultValue={title || "Work Title | Position"}
              isPreviewFocusable={editMode}
              onChange={(val) => {
                let e = {
                  preventDefault: () => {},
                  target: {
                    name: "title",
                    value: val,
                  },
                };
                handleChange && handleChange(e);
              }}
            >
              <EditablePreview />
              <EditableInput name={"title"} />
              <EditableControls top={16} right={6} />
            </Editable>
          </Stack>
        </Flex>

        <Flex direction={"column"}>
          {!editMode && <OurSiteMarketing />}

          {/* social icons */}
          {!editMode && (
            <SimpleGrid columns={3} spacing={10} px={8} mt={6}>
              {getSocialIcons(rest).map((item: any, index: number) => {
                if (!item) return null;
                return (
                  <HardsandLink
                    key={index}
                    target="_blank"
                    href={getSocialLink(item)}
                  >
                    {/* @ts-ignore */}
                    <Box height="80px" align={"center"}>
                      <Image
                        w={"50px"}
                        src={item.image.src}
                        alt={`${item.label} icons`}
                      />
                      <Text mt={2} textTransform={"capitalize"}>
                        {item.label}
                      </Text>
                    </Box>
                  </HardsandLink>
                );
              })}
            </SimpleGrid>
          )}
          {editMode && (
            <>
              {Object.keys(SOCIAL_LINKS).map((socialLink, index) => (
                <Box key={index} mb={10} px={8} mt={6}>
                  <Text fontFamily={"MADE Outer sans Light"} mb={5}>
                    {socialLink}
                  </Text>
                  <Text color="gray.500" mb={4}>
                    Click an icon to add your username
                  </Text>
                  <SimpleGrid columns={3} spacing={10}>
                    {getSocialEditIcons(rest).map((item: any) => (
                      <Box
                        key={item.label}
                        height="80px"
                        // @ts-ignore
                        align={"center"}
                        onClick={
                          handleSocialSelect
                            ? () => handleSocialSelect(item)
                            : () => {}
                        }
                        position="relative"
                        _hover={{ opacity: 1 }}
                        opacity={
                          editMode
                            ? !!findSameSocials(
                                item,
                                selectedAction?.fields as any
                              ) && item.user
                              ? 1
                              : 0.5
                            : 1
                        }
                      >
                        {item.pro && (
                          <Tag
                            position={"absolute"}
                            fontFamily={"MADE Outer sans Light"}
                          >
                            PRO
                          </Tag>
                        )}
                        <Image
                          w={"50px"}
                          src={item.image.src}
                          alt={`${item.label} icons`}
                        />
                        <Text mt={2} textTransform={"capitalize"}>
                          {item.label}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              ))}
            </>
          )}
        </Flex>
        <Box h={"180px"} w={"full"} />
      </Box>
    </Center>
  );
}
