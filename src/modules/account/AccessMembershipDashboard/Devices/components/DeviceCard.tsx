import {
  Box,
  Heading,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import CustomDrawer from "components/CustomDrawer";
import { AppIcons } from "modules/account/constants";
import { getCardImageFromSlug } from "modules/products/functions";
import React from "react";
import { slugify } from "utils/string";
import MemberProfile from "../../Members/components/MemberProfile";
import { CorpCard } from "../../types";

type DeviceCardProps = {
  device: CorpCard;
  routes: string[];
};

const DeviceCard = ({ device, routes }: DeviceCardProps) => {
  const deviceDrawer = useDisclosure();
  const toast = useToast();
  const img = getCardImageFromSlug(slugify(device.cardVariant));

  return (
    <>
      <Box
        pos="relative"
        borderRadius="15px"
        cursor={"pointer"}
        onClick={() =>
          device.user
            ? deviceDrawer.onOpen()
            : toast({
                position: "top-right",
                title: "No user assigned to this device",
                status: "info",
                duration: 9000,
                isClosable: true,
              })
        }
      >
        <Heading as="h4" fontSize={"18px"} mb={4}>
          {device.cardVariant}
        </Heading>
        <Box pos="relative">
          <Image src={img} alt={device.cardVariant} />
          <Box
            bg="rgba(0, 0, 0, 0.54)"
            color="#fff"
            borderRadius={"0px 0px 15px 15px"}
            p="1rem"
            pos="absolute"
            bottom="0"
            w="100%"
            fontSize={"0.875rem"}
            fontWeight="500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Image
              src={AppIcons.PersonalCardIcon.src}
              alt="personal card"
              boxSize={"30px"}
            />
            <Box>
              <Text>{device.hits} Clicks</Text>
              <Text>
                {device.user?.fullName}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <CustomDrawer
        title={"Device Holder"}
        size={"sm"}
        placement="right"
        isOpen={deviceDrawer.isOpen}
        onClose={deviceDrawer.onClose}
      >
        <MemberProfile
          member={{
            ...device.user,
            img,
            fullName: `${device.user?.fullName}`,
          }}
          showActions={false}
          showForm={false}
          showCard
        />
      </CustomDrawer>
    </>
  );
};

export default DeviceCard;
