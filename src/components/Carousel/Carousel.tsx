import { Box, FlexProps, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Swipe from "react-easy-swipe";

import CarouselDots from "./CarouselDots";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";

const fadeIn = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
`;

interface BaseCarouselState {
  currentIndex: number;
}

export type DotPosition = "top" | "bottom" | "right" | "left";

export interface BaseCarouselProps extends FlexProps {
  children: React.ReactElement[];
  thresholdX: number;
  dotPosition: DotPosition;
  showArrows: boolean;
  showDots: boolean;
  enableScroll: boolean;
  startingIndex: number;
  isGallery: boolean;
  imagePaths: string[];
  imgAlt?: string;
  dotsBgColor?: string;
  showControlsAbove: boolean;
  showProgress: boolean;
  fullWidth: boolean;
  absoluteDots?: boolean;
  isRTL?: boolean;
  galleryWidth?: string | string[];
  galleryHeight?: string | string[];
  roundDots?: boolean;
  arrowColor?: string;
}

class BaseCarousel extends React.Component<
  BaseCarouselProps,
  BaseCarouselState
> {
  static defaultProps = {
    thresholdX: 50,
    dotPosition: "bottom",
    showArrows: true,
    showDots: true,
    enableScroll: true,
    startingIndex: 0,
    isGallery: false,
    imagePaths: [],
    dotsBgColor: "black",
    showControlsAbove: false,
    showProgress: false,
    fullWidth: false,
    roundDots: true,
  };

  isSwiping = false;
  movedX = 0;

  constructor(props: BaseCarouselProps) {
    super(props);
    const { startingIndex } = props;
    this.state = {
      currentIndex: startingIndex,
    };
    this.isSwiping = false;
    this.movedX = 0;
  }

  onSwipeStart = () => {
    this.isSwiping = true;
  };

  onSwipeMove = (position: { x: number; y: number }) => {
    this.movedX = position.x;
  };

  onSwipeEnd = () => {
    this.isSwiping = false;
    const movedX = this.movedX;
    this.movedX = 0;

    if (Math.abs(movedX) < this.props.thresholdX) {
      return;
    }

    movedX < 0 ? this.moveRight() : this.moveLeft();
  };

  moveLeft = () => {
    const { children } = this.props;
    const { currentIndex } = this.state;
    if (currentIndex === 0) {
      // go back to 0
      this.setState({
        currentIndex: children.length - 1,
      });
    } else {
      this.setState({
        currentIndex: currentIndex - 1,
      });
    }
  };

  moveRight = () => {
    const { children } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex === children.length - 1) {
      // go back to 0
      this.setState({
        currentIndex: 0,
      });
    } else {
      // go back to 0
      this.setState({
        currentIndex: currentIndex + 1,
      });
    }
  };

  prevSlide = () => {
    if (this.props.isRTL) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
  };

  nextSlide = () => {
    if (this.props.isRTL) {
      this.moveLeft();
    } else {
      this.moveRight();
    }
  };

  getDotPosition = (dotPosition: DotPosition) => {
    switch (dotPosition) {
      case "right":
        return "row";
      case "left":
        return "row-reverse";
      case "top":
        return "column-reverse";
      default:
        return "column";
    }
  };

  render() {
    const {
      children,
      enableScroll,
      showArrows,
      showDots,
      dotPosition,
      isGallery,
      imagePaths,
      imgAlt,
      thresholdX,
      startingIndex,
      dotsBgColor,
      showControlsAbove,
      showProgress,
      fullWidth,
      absoluteDots,
      isRTL,
      galleryWidth,
      galleryHeight,
      roundDots,
      arrowColor,
      ...rest
    } = this.props;

    const { currentIndex } = this.state;
    const swipeProps = {
      onSwipeStart: this.onSwipeStart,
      onSwipeMove: this.onSwipeMove,
      onSwipeEnd: this.onSwipeEnd,
      style: { height: "100%" },
    };
    return (
      // @ts-ignore
      <Swipe
        {...(enableScroll && swipeProps)}
        style={{ height: "100%", width: fullWidth ? "100%" : "auto" }}
      >
        <Box
          display={["block", "flex"]}
          flexDirection={this.getDotPosition(dotPosition)}
          position="relative"
          {...rest}
        >
          <Flex
            flex={1}
            className="carousel-content"
            direction="row"
            align="stretch"
            justify="stretch"
            position="relative"
            userSelect={'none'}
          >
            {showArrows && (
              <PrevButton
                arrowColor={arrowColor}
                onClick={this.prevSlide}
                showControlsAbove={showControlsAbove}
              />
            )}
            {React.Children.map(children, (child, ind) => {
              if (ind === currentIndex) {
                return child;
              } else {
                return;
              }
            })}
            {showArrows && (
              <NextButton
                arrowColor={arrowColor}
                onClick={this.nextSlide}
                showControlsAbove={showControlsAbove}
              />
            )}
          </Flex>
          {showDots && (
            <CarouselDots
              mt={isGallery && dotPosition === "bottom" ? [3, 5, 5] : 0}
              mb={isGallery && dotPosition === "top" ? [3, 5, 5] : 0}
              mr={isGallery && dotPosition === "left" ? 2 : 0}
              ml={isGallery && dotPosition === "right" ? 2 : 0}
              alignSelf={
                dotPosition === "left" || dotPosition === "right"
                  ? "flex-start"
                  : "center"
              }
              total={children.length}
              absoluteDots={absoluteDots}
              currentIndex={currentIndex}
              onDotClick={(ind: any) => this.setState({ currentIndex: ind })}
              isGallery={isGallery}
              imagePaths={isGallery ? imagePaths : []}
              imgAlt={imgAlt}
              bg={dotsBgColor}
              dotPosition={dotPosition}
              galleryWidth={galleryWidth}
              galleryHeight={galleryHeight}
              roundDots={roundDots}
            />
          )}
          {showProgress && (
            <Text size="sm" position="absolute" bottom={6} right={6}>
              {currentIndex + 1}/{children.length}
            </Text>
          )}
        </Box>
      </Swipe>
    );
  }
}

// @ts-ignore
export const Carousel = styled(BaseCarousel)`
  & > .carousel-content .hidden {
    display: none !important;
  }

  & > .carousel-content .fade-in {
    animation: ${fadeIn} 1.5s;
  }
`;

export default Carousel;
// export const FadingCarouselSlide = (props) => {}
