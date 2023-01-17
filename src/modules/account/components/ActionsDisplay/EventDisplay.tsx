import {
  Center,
  Box,
  useColorModeValue,
  Image,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { BsClock } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";

function EventDisplay({
  about,
  title,
  startDate,
  endDate,
  profileImage,
  location,
  time,
}: {
  about: string;
  title: string;
  startDate: string;
  endDate: string;
  profileImage: string;
  location: string;
  time: string;
}) {
  const isSameDay = startDate.split("T")[0] === endDate.split("T")[0];
  return (
    <Center>
      <Box
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          w={"100%"}
          m="0 auto"
          objectFit={"cover"}
          src={
            profileImage ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          bgColor={"gray.300"}
          alt={"profile image"}
          css={{
            border: "10px solid white",
          }}
          borderRadius={"25px"}
        />

        <Heading color={"brand.300"}>{title}</Heading>
        <Box h={10} />
        <Text>{about}</Text>
        <Box h={10} />
        <List spacing={3}>
          <ListItem>
            <ListIcon
              as={HiOutlineLocationMarker}
              fontSize={24}
              color="brand.300"
            />
            {location}
          </ListItem>
          <ListItem>
            <ListIcon as={MdOutlineEventNote} fontSize={24} color="brand.300" />
            {isSameDay
              ? `${moment(startDate).format("LL")}`
              : `${moment(startDate).format("LL")} to ${moment(endDate).format(
                  "LL"
                )}`}
          </ListItem>
          <ListItem>
            <ListIcon as={BsClock} fontSize={24} color="brand.300" />
            {moment(time ?? startDate).format("LT")}
          </ListItem>
        </List>
      </Box>
    </Center>
  );
}

export default EventDisplay;
