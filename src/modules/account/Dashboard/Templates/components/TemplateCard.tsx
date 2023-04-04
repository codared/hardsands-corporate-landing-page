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
  cardName: string;

  routes?: string[];
};

const DeviceCard = ({ cardName, routes }: DeviceCardProps) => {
  const deviceDrawer = useDisclosure();
  const toast = useToast();
  const img = getCardImageFromSlug(slugify(device.cardVariant));

  return (
    <>
      <Box
        pos="relative"
        borderRadius="15px"
        cursor={"pointer"}
        background={"#FEF8F3"}
        padding={"1rem 2rem"}
      >
        {cardName}
      </Box>
    </>
  );
};

export default DeviceCard;
