import { Flex } from "@chakra-ui/react";
import { ArrowDirection } from "./types";
import React, { FC, ReactNode, useState } from "react";
import CarouselControls from "./CarouselControls";

interface CarouselProps {
  contents: ReactNode[];
}

const CarouselForProductPackagesItems: FC<CarouselProps> = ({ contents }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleControls = (direction: ArrowDirection) => {
    if (direction === "prev") {
      setPageNumber((prev) => prev - 1);
    }

    if (direction === "next") {
      setPageNumber((prev) => prev + 1);
    }
  };

  if (!contents || !contents.length) {
    return null;
  }

  return (
    <Flex
      minH="400px"
      minWidth={["100%", "600px"]}
      position="relative"
      justifySelf="center"
      justify="center"
      align="center"
    >
      {contents[pageNumber - 1]}
      <CarouselControls
        onClick={handleControls}
        hideBackArrow={pageNumber < 2}
        hideForwardArrow={pageNumber === contents.length}
      />
    </Flex>
  );
};

export default CarouselForProductPackagesItems;
