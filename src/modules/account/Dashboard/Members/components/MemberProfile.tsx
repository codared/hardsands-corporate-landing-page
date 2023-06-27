import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import ActionsPermissions from "./ActionsPermissions";
import CreateMemberForm from "./CreateMemberForm";
import NameColumn from "./NameColumn";

const MemberProfile = ({
  member,
  showForm = true,
  showActions = true,
  showCard = false,
  createDrawer,
  loading,
  handleResetCard,
}: any) => {
  return (
    <Box>
      {showForm && (
        <>
          <CreateMemberForm
            createDrawer={createDrawer}
            editMode
            defaultValues={member}
          />
        </>
      )}
      {showActions && <ActionsPermissions member={member} />}
      {showCard && (
        <Box>
          <Image
            rounded={"lg"}
            src={
              member.img || "https://via.placeholder.com/150x150?text=No+Image"
            }
            alt={member.fullName}
          />
          <Box py={[6]}>
            {member.cardName && (
              <Box mt={2} mb={6}>
                <Box fontSize={"sm"} fontWeight={"bold"}>
                  Card Variant
                </Box>
                <Box fontSize={"sm"}>{member.cardName}</Box>
              </Box>
            )}
            <NameColumn
              name={member.fullName}
              subText={member.email}
              // img={member.img}
              isActive={member.isActive}
            />
          </Box>
        </Box>
      )}
      {handleResetCard && typeof handleResetCard === "function" && (
        <Box mt={10}>
          <Box mb={4} color={"red.400"} textAlign={"left"}>
            <Text fontWeight={"bold"} fontSize={14}>
              Warning: Resetting a card will remove all data associated with the
              card. This action cannot be undone.
            </Text>
          </Box>

          <Button
            onClick={handleResetCard}
            cursor={"pointer"}
            color={"red.400"}
            fontWeight={"bold"}
            fontSize={"sm"}
            p={2}
            bg={"red.50"}
            textAlign={"center"}
            borderRadius={"none"}
            _hover={{ bg: "red.100", color: "black" }}
            w={"full"}
            loadingText={"Resetting Card..."}
            isLoading={loading}
          >
            Reset Card
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MemberProfile;
