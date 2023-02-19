import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import React, { useState } from "react";
import { BsVolumeUp } from "react-icons/bs";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import { colors } from "styles/theme";
import Stories from "react-insta-stories";
import StoryContent from "./components/StoryContent";
import { Story } from "react-insta-stories/dist/interfaces";
import PrevButton from "components/PrevButton";
import NextButton from "components/NextButton";
import { MdClose } from "react-icons/md";
import VariantSelectionModal from "./components/VariantSelectionModal";
import { PROFILES } from "./constants";

const getProfilesWithStories = (profiles: any[]) => {
  return profiles.filter(
    (prof: { stories: string | any[] }) => prof.stories.length
  ).length;
};

function Story({
  buttonText = "Buy Now",
  arrowColor = "white",
  navigationButtonsSpace = "0px",
}: {
  buttonText?: string;
  arrowColor?: string;
  navigationButtonsSpace?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isVariantSelectionOpen,
    onOpen: onOpenVariantSelection,
    onClose: onCloseVariantSelection,
  } = useDisclosure();
  const [storyPosition, setStoryPosition] = useState<number>(1);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);

  const handleStorySelect = (profile: any) => {
    if (profile.stories.length) {
      setStoryPosition(profile.id);
      onOpen();
    }
  };

  const handleModalClose = () => {
    onClose();
    return setStoryPosition(1);
  };

  return (
    <Box>
      <Heading
        textAlign={["center", "left"]}
        color={["black", "black", "white"]}
        size={"md"}
        my={[4]}
        ml={[10]}
      >
        Try it Below
      </Heading>
      <Flex px={[10]} py={[4]} overflowX={"scroll"}>
        {PROFILES.map((story, index) => (
          <Flex direction={"column"} key={index} mr={[8]}>
            <Box
              boxSize={100}
              maxW={100}
              maxH={100}
              borderRadius="full"
              bg={
                story.stories.length
                  ? `linear-gradient(to bottom right, ${colors.brand["200"]}, ${colors.brand["300"]})`
                  : "transparent"
              }
              p={["4px"]}
              cursor={"pointer"}
              onClick={() => handleStorySelect(story)}
            >
              <Box
                as={"figure"}
                borderRadius="full"
                borderColor={"white"}
                borderWidth={"2px"}
                h={"100%"}
              >
                <Image
                  borderRadius="full"
                  h={"100%"}
                  src={story.image}
                  alt={story.status}
                />
              </Box>
            </Box>
            <Text
              mt={4}
              wordBreak={"keep-all"}
              color={["black", "black", "white"]}
              textAlign={"center"}
              fontSize={"smaller"}
            >
              {story.status}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Modal
        onClose={handleModalClose}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent w={"initial"} my={"auto"} maxH={"100%"}>
          <ModalBody p={0} position={"relative"} overflow={"visible"}>
            <Box
              position={"absolute"}
              right={4}
              zIndex={1000}
              top={"20px"}
              p={[1]}
              cursor={"pointer"}
              onClick={() => onClose()}
            >
              <MdClose size={34} color={"white"} />
            </Box>
            <PrevButton
              arrowColor={arrowColor}
              // onClick={this.prevSlide}
              showControlsAbove={false}
              left={navigationButtonsSpace}
              overrideContainerStyle={{
                opacity: "0.5",
                display: ["none", "inline-flex"],
              }}
            />
            <Stories
              keyboardNavigation
              currentIndex={currentStoryIndex}
              stories={PROFILES[storyPosition - 1].stories as Story[]}
              defaultInterval={15000}
              // width={360}
              // height={640} // 955
              width={425}
              height={868} // 955
              onStoryEnd={(s: any, st: any) => {}}
              onAllStoriesEnd={(s: any, st: any) => {
                try {
                  if (storyPosition === getProfilesWithStories(PROFILES)) {
                    return handleModalClose();
                  }
                  setCurrentStoryIndex(0);
                  setStoryPosition(storyPosition + 1);
                } catch (e) {}
              }}
            />
            <NextButton
              arrowColor={arrowColor}
              // onClick={this.nextSlide}
              showControlsAbove={false}
              right={navigationButtonsSpace}
              overrideContainerStyle={{
                opacity: "0.5",
                display: ["none", "inline-flex"],
              }}
            />
            <StoryContent
              onOpen={onOpenVariantSelection}
              buttonText={buttonText}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <VariantSelectionModal
        variantOptions={[
          {
            name: "Matte Black metal Card",
            price: "$39.99",
          },
          {
            name: "Matte Sandtone metal Card",
            price: "$39.99",
          },
          {
            name: "Epoxy",
            price: "$39.99",
          },
        ]}
        buttonText={"Proceed to Checkout"}
        isVariantSelectionOpen={isVariantSelectionOpen}
        onCloseVariantSelection={onCloseVariantSelection}
      />
    </Box>
  );
}

export default Story;
