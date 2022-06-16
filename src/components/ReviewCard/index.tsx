import {
    Flex,
    Box,
    useColorModeValue,
    Circle,
    Image,
    Text,
    Heading,
  } from "@chakra-ui/react";
  import HardsandLink from "components/HardsandsLink";
  
  const data = {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
  interface ProductCardProps {
    name: string,
    price: any
  }
  export const ProductCard = ({name, price}: ProductCardProps) => {
    return (
      <Box></Box>
    );
  };
  
  export default ProductCard;
  