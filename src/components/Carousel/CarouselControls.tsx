import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { useRTL } from "modules/i18n/hooks";
import { ArrowDirection } from "./types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CarouselControlsProps {
  hideForwardArrow?: boolean;
  hideBackArrow?: boolean;
  onClick: (value: ArrowDirection) => void;
}

const CarouselControls: FC<CarouselControlsProps> = ({
  hideForwardArrow,
  hideBackArrow,
  onClick,
}) => {
  const { isRTL } = useRTL();

  return (
    <Flex
      position="absolute"
      bottom="20px"
      right={isRTL ? "unset" : "0px"}
      left={isRTL ? "0px" : "unset"}
      align="center"
      justify="center"
    >
      {!hideBackArrow && <BsArrowLeft onClick={() => onClick("prev")} />}
      {!hideForwardArrow && <BsArrowRight onClick={() => onClick("next")} />}
    </Flex>
  );
};

export default CarouselControls;
