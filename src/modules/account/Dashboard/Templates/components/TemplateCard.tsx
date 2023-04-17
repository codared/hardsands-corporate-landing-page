import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Box, Text, Image, List, ListItem } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";

type TemplateCardProps = {
  cardName: string;
  icon: any;
  editLink?: string;
  assignLink?: string;
};

const TemplateCard = ({
  cardName,
  icon,
  editLink,
  assignLink,
}: TemplateCardProps) => {
  const actionBtnRef = useRef<any>();
  const [showActionsModal, setShowActionsModal] = useState(false);

  const toggleActionsModal = () => {
    setShowActionsModal((prev) => !prev);
  };

  const closeDropdownWhenOutsideIsClicked = (e: MouseEvent) => {
    if (e.target !== actionBtnRef.current) {
      setShowActionsModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownWhenOutsideIsClicked);

    return () => document.removeEventListener("click", closeDropdownWhenOutsideIsClicked)
  }, [showActionsModal])

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
        ref={actionBtnRef}
      />
      {showActionsModal && (
        <List
          pos={"absolute"}
          color="#969696"
          bg="#fff"
          zIndex={10}
          border={"1px solid #d9d9d9"}
          fontSize={"0.875rem"}
          top="3.5rem"
          right={0}
          sx={{
            "& a": {
              display: "block",
              padding: "0.75rem 1.25rem",
            },
          }}
        >
          <ListItem borderBottom={"1px solid #d9d9d9"}>
            <Link href={`${editLink}`}>Edit Action</Link>
          </ListItem>
          <ListItem>
            <Link href={`${assignLink}`}>Assign / Unassign</Link>
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
