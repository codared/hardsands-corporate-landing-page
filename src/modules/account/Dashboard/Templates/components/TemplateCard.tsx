import { Box, Text, Image, List, ListItem } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { useState } from "react";
import Link from "next/link";

type TemplateCardProps = {
  cardName: string;
  icon: any;
  actionsLink?: string;
};

const TemplateCard = ({ cardName, icon, actionsLink }: TemplateCardProps) => {
  const [showActionsModal, setShowActionsModal] = useState(false);

  const toggleActionsModal = () => {
    setShowActionsModal((prev) => !prev);
  };

  return (
    <Box
      pos="relative"
      cursor={"pointer"}
      background={"#FEF8F3"}
      padding={"1.75rem"}
    >
      <Image
        pos={"absolute"}
        right={3}
        src={AppIcons.VerticalDots.src}
        alt="action"
        onClick={toggleActionsModal}
      />
      {showActionsModal && (
        <List
          pos={"absolute"}
          color="#969696"
          bg="#fff"
          zIndex={10}
          border={"1px solid #d9d9d9"}
          fontSize={"0.875rem"}
          right={"-160px"}
          sx={{
            "& a": {
              display: "block",
              padding: "0.75rem 1.25rem",
            },
          }}
        >
          <ListItem borderBottom={"1px solid #d9d9d9"}>
            <Link href={`${actionsLink}`}>Edit Action</Link>
          </ListItem>
          <ListItem>
            <Link href={`${actionsLink}`}>Assign / Unassign</Link>
          </ListItem>
        </List>
      )}

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

export default TemplateCard;
