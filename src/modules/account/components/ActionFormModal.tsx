import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  Image,
  Tag,
  Button,
} from "@chakra-ui/react";
import CustomModal from "components/CustomModal";
import { useState } from "react";
import { ActionsFormType, ActionsType } from "utils/types";
import { SOCIAL_LINKS } from "../constants";
import ActionFormBuilder from "./ActionFormBuilder";
import ProfileCardPreview from "./ProfileCardPreview";

const ActionFormModal = ({
  isOpen,
  onClose,
  selectedAction,
  handleActionSubmit,
  isSubmitting,
}: {
  isOpen: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  selectedAction: ActionsType;
  handleActionSubmit: (action: ActionsType) => void;
}) => {
  const [showAddSocials, setAddSocials] = useState<boolean>(false);
  const [selectedSocials, setSelectedSocials] = useState<any[]>([]);
  const [formState, setFormState] = useState<any>({});
  const isProfile = selectedAction.fieldTitle === "Social Card";

  const handleAction = () => {
    handleActionSubmit({ ...formState, ...selectedAction });
  };

  const handleAddSocials = () => {
    setAddSocials(true);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
  // console.log("formState >>> ", formState);

  return (
    <CustomModal
      size={isProfile ? "full" : ["full", "lg"]}
      title={"Edit Action"}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={"inside"}
      footer={
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
      }
    >
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
                fields={selectedAction.fields as ActionsFormType[]}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </CustomModal>
  );
};

export default ActionFormModal;
