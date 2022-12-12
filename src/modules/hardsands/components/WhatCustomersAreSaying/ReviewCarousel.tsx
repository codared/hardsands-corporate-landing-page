import { Box, Flex } from "@chakra-ui/react";
import Carousel from "components/Carousel";
import ReviewCard from "./ReviewCard";

interface ReviewCarouselSlideProps {
  reviews: any;
  imgAlt: string;
}

const ReviewCarouselSlide = ({ reviews, imgAlt }: ReviewCarouselSlideProps) => {
  return (
    <Box
      width={["100%", null, "50%"]}
      position={["unset"]}
      top="10px"
      m={"0 auto"}
    >
      <Flex align="center" justify="center" position="relative">
        <Carousel
          showArrows={reviews.length > 1}
          showDots={false}
          h="100%"
          fullWidth
          imagePaths={[]}
          imgAlt={imgAlt}
          dotPosition="bottom"
          isGallery
          galleryWidth={["unset", "45px", "45px", "80px"]}
          galleryHeight={["unset", "58px", "58px", "100px"]}
          roundDots={false}
          startingIndex={0}
          thresholdX={0}
          enableScroll={false}
          showControlsAbove={false}
          showProgress={false}
        >
          {reviews.map((src: any, i: number) => (
            <ReviewCard key={i} review={src} />
          ))}
        </Carousel>
      </Flex>
    </Box>
  );
};

export default ReviewCarouselSlide;
