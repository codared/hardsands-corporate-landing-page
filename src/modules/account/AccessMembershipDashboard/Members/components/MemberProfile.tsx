import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ActionsPermissions from "./ActionsPermissions";
import CreateMemberForm from "./CreateMemberForm";
import NameColumn from "./NameColumn";

const MemberProfile = ({
  member,
  showForm = true,
  showActions = true,
  showCard = false,
  handleSubmitComplete,
}: any) => {
  return (
    <Box>
      {showForm && (
        <>
          <CreateMemberForm
            editMode
            defaultValues={member}
            handleSubmitComplete={handleSubmitComplete}
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
            <NameColumn
              name={member.fullName}
              subText={member.email}
              // img={member.img}
              isActive={member.isActive}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MemberProfile;
