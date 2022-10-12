import {
  Grid,
  Box,
  Button,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { APP_SCREEN } from "modules/account/types";
import { AiFillStar } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { ActionsType } from "utils/types";

const ActionCards = ({
  cardActions,
  setSelectedAction,
  handleSelectedTab,
  onOpen,
}: {
  isDefault?: boolean;
  cardActions: ActionsType[];
  setSelectedAction: (action: any) => void;
  handleSelectedTab: (tab: APP_SCREEN) => void;
  onOpen: any;
}) => {
  return (
    <Grid
      templateColumns={["repeat(3, 1fr)"]}
      gap={["1rem", "2rem"]}
      overflow="hidden"
    >
      {cardActions
        .map((action: ActionsType) => {
          const Icon = AppIcons[action.title];
          return (
            <Box
              key={action.id}
              textAlign={"center"}
              position="relative"
              py={[4]}
              fontSize={[15, 20]}
              fontWeight="bold"
              borderStyle="solid"
              borderWidth={1}
              borderColor={"brand.300"}
              justifyContent={"center"}
              alignContent={"center"}
              transition={"all 200ms ease-in-out"}
            >
              <Box position={"absolute"} top="0px" right="0px">
                <Button
                  as={IconButton}
                  bg="transparent"
                  aria-label="Options"
                  icon={<FaEllipsisV />}
                  variant="ghost"
                  onClick={() => {
                    setSelectedAction(action);
                    onOpen();
                  }}
                  _focus={{ backgroundColor: "transparent" }}
                />
              </Box>
              <Flex
                color="brand.300"
                justifyContent={"center"}
                alignContent={"center"}
                mb={[2]}
              >
                <Icon size={50} />
              </Flex>
              {action.title}
              {action.isDefault && (
                <Flex justifyContent={"center"} color="brand.300">
                  <AiFillStar />
                  <Text fontSize={14}>Active Action</Text>
                </Flex>
              )}
            </Box>
          );
        })
        .reverse()}
    </Grid>
  );
};

export default ActionCards;
