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
  
  interface ReviewCardProps {
    name: string,
    review: string
  }
  export const ReviewCard = ({name, review}: ReviewCardProps) => {
    return (
      <Box bgColor="whiteAlpha.200" p="40px" borderRadius="20px" maxW="465px">
        <Circle size="111px" bg="white" mx="auto" mb="20px"/>
        <Text fontSize="2xl" textAlign="center" mb="20px">{name}</Text>
        <Text>{review}</Text>
      </Box>
    );
  };

  