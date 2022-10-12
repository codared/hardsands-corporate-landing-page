import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import EyeIcon from "design/svg/u_eye.svg";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

// function Rating({ rating, numReviews }: RatingProps) {
//   return (
//     <Box d="flex" alignItems="center">
//       {Array(5)
//         .fill("")
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2;
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: "1" }}
//                 color={i < rating ? "teal.500" : "gray.300"}
//               />
//             );
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
//           }
//           return <BsStar key={i} style={{ marginLeft: "1" }} />;
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && "s"}
//       </Box>
//     </Box>
//   );
// }

function UserProductCard() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      mb={10}
    >
      {data.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )}

      <Image
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        roundedTop="lg"
      />

      <Box p="6">
        <Text fontWeight="bolder" fontSize="xl">
          Hardsands Metal Card
        </Text>
        <Flex justifyContent="space-between" my={2} alignItems="center">
          <Flex>
            <Text mr={5} color="gray.400">
              Status
            </Text>
            <Text>Active</Text>
          </Flex>
          <Flex>
            <Image
              boxSize="25px"
              src={EyeIcon.src}
              alt="hardsands eye icon"
              mr={2}
            />
            <Text mr={5} color="gray.400">
              Views
            </Text>
            <Text>12</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt={4} alignItems="center">
          <Flex>
            <Text mr={5} color="gray.400">
              Color
            </Text>
            <Box width={25} height={25} borderRadius="11px" bg="brand.200" />
          </Flex>
          <Flex>
            <Text mr={5} color="gray.400">
              Material
            </Text>
            <Text>Metalic</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default UserProductCard;
