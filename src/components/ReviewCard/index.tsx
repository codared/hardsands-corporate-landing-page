import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

//   const data = {
//     isNew: true,
//     imageURL:
//       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
//     name: "Wayfarer Classic",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   };

import { customerImg, itemPlaceholderImg } from "assets";
interface ReviewCardProps {
  name: string;
  review: string;
  product?: any;
}

export const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <Box bgColor="whiteAlpha.200" p="40px" borderRadius="20px" maxW="465px">
      <Image
        src={customerImg.src}
        mb="20px"
        mx="auto"
        h="111px"
        borderRadius="full"
      />
      <Text fontSize="2xl" textAlign="center" mb="20px">
        {name}
      </Text>
      <Text>{review}</Text>
    </Box>
  );
};

export const FullReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <Box
      p="25px"
      border="1px"
      borderColor="sandTone2"
      borderRadius="12px"
    >
      <Flex alignItems="center" mb={4}>
        <Image src={customerImg.src} h="70px" borderRadius="full" />
        <Text display="inline" fontSize="2xl" ml={4}>
          {name}
        </Text>
      </Flex>
      <Text mb="20px">{review}</Text>
      <Flex gap="20px" pt="20px" borderTop="1px" borderColor="sandTone1">
        <Image
          src={itemPlaceholderImg.src}
          w="70px"
          h="70px"
          objectFit="cover"
        />
        <Box pt="20px">
          <Text textTransform="capitalize">Hardsands metal card</Text>
          <Text fontSize="sm" color="gray.400">
            12 Dec 2021
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
