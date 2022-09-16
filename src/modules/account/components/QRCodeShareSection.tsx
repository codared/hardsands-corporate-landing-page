import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
import { FiShare2, FiLink2 } from "react-icons/fi";
import QRCode from "react-qr-code";
import { UserCardType } from "../types";

const QRCodeShareSection = ({ card }: { card: UserCardType }) => {
  const toast = useToast();

  return (
    <Box p={8} my={8} borderWidth={1} borderStyle="solid">
      <Flex justify={"space-between"}>
        <Heading fontSize={14} alignSelf={"center"}>
          Share
        </Heading>
        <IconButton
          bg="black"
          color="white"
          aria-label="share link"
          icon={<FiShare2 />}
        />
      </Flex>
      <Box boxSize={250} my={4} mx="auto">
        <QRCode value={card.url} />
      </Box>
      <Flex
        justify={"space-between"}
        p={5}
        bg="brand.10"
        // TODO: copy Link
        onClick={() => {
          navigator.clipboard.writeText(card.url);
          toast({
            position: "bottom",
            title: "Copied!",
            status: "success",
            duration: 1000,
          });
        }}
        cursor="pointer"
      >
        <Box ml={3} alignSelf={"center"}>
          <FiLink2 />
        </Box>
        <Text>{card.url}</Text>
        {/* <Text>http://hrdsnd.co/c/UbhjAxJ</Text> */}
        <Box ml={3} alignSelf={"center"}>
          <FaRegCopy />
        </Box>
      </Flex>
    </Box>
  );
};

export default QRCodeShareSection;
