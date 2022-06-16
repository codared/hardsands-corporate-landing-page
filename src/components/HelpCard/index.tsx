import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";
interface HelpCardProps {
  icon: any;
  title: string;
  text?: any;
}

export const HelpCard = ({ icon, title, text }: HelpCardProps) => {
  return (
    <Box
      p="30px"
      border="1px"
      borderColor="sandTone2"
      borderRadius="12px"
      mx="auto"
      textAlign="center"
    >
      <Flex justify="center">
        <Image src={icon.src} borderRadius="full" />
      </Flex>
      <Heading fontSize="xl" mt={10} mb={6}>{title}</Heading>
      <Text mb="20px" maxW="340px">{text}</Text>
    </Box>
  );
};
