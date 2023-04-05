import { Box, Text, Image } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";

type DeviceCardProps = {
  cardName: string;
  icon: any;
};

const DeviceCard = ({ cardName, icon }: DeviceCardProps) => {
  return (
    <Box
      pos="relative"
      cursor={"pointer"}
      background={"#FEF8F3"}
      padding={"1.75rem"}
    >
      <Image pos={"absolute"} right={3} src={AppIcons.VerticalDots.src} />
      <Image
        src={icon?.src}
        alt={cardName}
        display={"block"}
        mx="auto"
        mt={8}
        mb={3}
      />
      <Text fontSize={"19px"} textAlign={"center"}>
        {cardName}
      </Text>
    </Box>
  );
};

export default DeviceCard;
