import { Flex, Button, Image } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import React, { useEffect, useState } from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

const StoryContent = ({
  buttonText = "Buy Now",
  onOpen = () => {},
}: {
  url?: string;
  buttonText?: string;
  product?: any;
  onOpen?: () => void;
}) => {
  return (
    <>
      <Flex
        position={"absolute"}
        bottom={0}
        bg={"transparent"}
        w={"full"}
        p={6}
        justifyContent={"center"}
        zIndex={1000}
      >
        {/* <Button
          bg={"transparent"}
          _hover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          p={[6]}
          color={"white"}
          borderRadius={"none"}
        >
          <IoVolumeHighOutline size={38} />
        </Button> */}
        <HardsandsButton
          // @ts-ignore
          w={"full"}
          href={"#"}
          onClick={() => onOpen()}
          _hover={{ color: "white" }}
        >
          {buttonText}
        </HardsandsButton>
      </Flex>
    </>
  );
};

export default StoryContent;
