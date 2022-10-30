import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
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
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { useRef } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdArrowForwardIos, MdOutlineClose } from "react-icons/md";
import { ActionsType } from "utils/types";
import { AppIcons, SOCIAL_LINKS } from "../constants";
import OurSiteMarketing from "./OurSiteMarketing";

const socials = [
  {
    name: "Facebook",
    icon: AppIcons.FacebookIcon.src,
  },
  {
    name: "twitter",
    icon: AppIcons.TwitterIcon.src,
  },
  {
    name: "linkedIn",
    icon: AppIcons.LinkedInIcon.src,
  },
  {
    name: "Instagram",
    icon: AppIcons.InstagramIcon.src,
  },
  {
    name: "Tiktok",
    icon: AppIcons.TiktokIcon.src,
  },
  {
    name: "Google Plus",
    icon: AppIcons.TwitchIcon.src,
  },
];

export default function SocialProfile({
  editMode = false,
  handleSocialSelect,
  handleChange,
  selectedAction,
  selectedImageUrl,
}: {
  editMode?: boolean;
  handleChange?: (e: any) => Promise<void>;
  handleSocialSelect?: (selectedSocials: any) => void;
  selectedAction?: ActionsType;
  selectedImageUrl?: string;
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

  const findSameSocials = (item: any, findingArray: any[]) => {
    return findingArray.find((finding) => finding.name === item.label);
  };

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
            <Image
              w={196}
              h={196}
              m="0 auto"
              objectFit={"cover"}
              src={
                selectedImageUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt={"profile image"}
              css={{
                border: "10px solid white",
              }}
              borderRadius={"25px"}
            />
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
              defaultValue="Your Name"
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
              defaultValue="Work Title | Position"
              isPreviewFocusable={editMode}
              onChange={(val) => {
                let e = {
                  preventDefault: () => {},
                  target: {
                    name: "workTitle",
                    value: val,
                  },
                };
                handleChange && handleChange(e);
              }}
            >
              <EditablePreview />
              <EditableInput name={"workTitle"} />
              <EditableControls top={16} right={6} />
            </Editable>
          </Stack>
        </Flex>

        <Flex direction={"column"}>
          {!editMode && <OurSiteMarketing />}

          {/* social icons */}
          {!editMode && (
            <SimpleGrid columns={3} spacing={10} px={8} mt={6}>
              {socials.map((item: any, index: number) => (
                <HardsandLink key={index} target="_blank" href={"#"}>
                  {/* @ts-ignore */}
                  <Box height="80px" align={"center"}>
                    <Image
                      w={"50px"}
                      src={item.icon}
                      alt={`${item.name} icons`}
                    />
                    <Text mt={2} textTransform={"capitalize"}>
                      {item.name}
                    </Text>
                  </Box>
                </HardsandLink>
              ))}
            </SimpleGrid>
          )}
          {editMode && (
            <>
              {Object.keys(SOCIAL_LINKS).map((socialLink, index) => (
                <Box key={index} mb={10} px={8} mt={6}>
                  <Text fontFamily={"MADE Outer sans"} mb={5}>
                    {socialLink}
                  </Text>
                  <Text color="gray.500" mb={4}>Click an icon to add your username</Text>
                  <SimpleGrid columns={3} spacing={10}>
                    {(SOCIAL_LINKS[socialLink] as any[]).map((item: any) => (
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
                              )
                              ? 1
                              : 0.5
                            : 1
                        }
                      >
                        {item.pro && (
                          <Tag
                            position={"absolute"}
                            fontFamily={"MADE Outer sans"}
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
      </Box>
    </Center>
  );
}
