import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { resolveRoute } from "modules/account/functions";
import { getCardImageFromSlug } from "modules/products/functions";
import Link from "next/link";
import React from "react";
import { slugify } from "utils/string";
import { CorpCard } from "../../reducer";

type DeviceCardProps = {
  device: CorpCard;
  routes: string[];
};

const DeviceCard = ({ device, routes }: DeviceCardProps) => {
  const img = getCardImageFromSlug(slugify(device.cardVariant));

  return (
    <Link href={resolveRoute(routes[0], `/devices/${device.cardSerial}`)}>
      <Box pos="relative" borderRadius="15px" cursor={"pointer"}>
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
            <Text>{device.clicks} Clicks</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default DeviceCard;
