import { Box } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { colors } from "styles/theme";

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? 'black' : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                color={'black'}
                key={i}
                style={{ marginLeft: "1" }}
              />
            );
          }
          return (
            <BsStar
              color={'black'}
              key={i}
              style={{ marginLeft: "1" }}
            />
          );
        })}
      <Box mx={2}>|</Box>
      <Box as="span" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default Rating;
