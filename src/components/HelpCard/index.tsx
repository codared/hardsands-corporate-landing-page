import {
    Flex,
    Box,
    Image,
    Text,
  } from "@chakra-ui/react";
  import { customerImg, itemPlaceholderImg } from "assets";

  interface HelpCardProps {
    icon: any;
    review: string;
    product?: any;
  }

  
  export const HelpCard = ({ icon, review }: HelpCardProps) => {
    return (
      <Box
        p="25px"
        border="1px"
        borderColor="sandTone2"
        borderRadius="12px"
      >
        <Flex alignItems="center">
          <Image src={icon.src} h="70px" borderRadius="full" />
        </Flex>
        <Text mb="20px">{review}</Text>
        
      </Box>
    );
  };
  