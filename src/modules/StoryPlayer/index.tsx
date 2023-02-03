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

const PROFILES = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    status: "Products",
    stories: [
      {
        url: "https://player.vimeo.com/external/366974782.sd.mp4?s=cb1c5618db8ee20a68d8bfd026e6b4cee35a68be&profile_id=164&oauth2_token_id=57447761",
        // duration: 5000,
        header: {
          heading: "Mohit Karekar",
          // subheading: "Posted 30m ago",
          profileImage: "https://picsum.photos/100/100",
        },
        type: "video",
      },
      {
        url: "https://player.vimeo.com/external/491176465.sd.mp4?s=3b5e8d84be1388e4b435a6aacaa0e16c958a77b4&profile_id=165&oauth2_token_id=57447761",
        // duration: 5000,
        type: "video",
      },
    ],
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    status: "Reviews",
    stories: [
      {
        url: "https://player.vimeo.com/external/538561465.sd.mp4?s=786eeae0e3c0f89892c3c0ef13d59127799f3182&profile_id=165&oauth2_token_id=57447761",
        // duration: 5000,
        type: "video",
      },
      {
        url: "https://player.vimeo.com/external/364006452.sd.mp4?s=39e0fadb487cf1e6fe39a94a4f84d0c8a0f2cfd1&profile_id=164&oauth2_token_id=57447761",
        // duration: 5000,
        header: {
          heading: "Mohit Karekar",
          // subheading: "Posted 30m ago",
          profileImage: "https://picsum.photos/100/100",
        },
        type: "video",
      },
    ],
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    status: "Guidelines",
    stories: [],
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    status: "New Features",
    stories: [],
  },
];

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
              >
                <Image
                  borderRadius="full"
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
              currentIndex={0}
              stories={PROFILES[storyPosition - 1].stories as Story[]}
              defaultInterval={1500}
              width={425}
              height={868} // 955
              onAllStoriesEnd={() => {
                if (storyPosition === getProfilesWithStories(PROFILES)) {
                  return handleModalClose();
                }
                setStoryPosition(storyPosition + 1);
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
