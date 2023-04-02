import { Box } from "@chakra-ui/react";
import React from "react";
import ActionsPermissions from "./ActionsPermissions";
import CreateMemberForm from "./CreateMemberForm";

const MemberProfile = ({
  member,
  showForm = true,
  showActions = true,
}: any) => {

  return (
    <Box>
      {showForm && (
        <>
          <CreateMemberForm editMode defaultValues={member} />
        </>
      )}
      {showActions && <ActionsPermissions member={member} />}
    </Box>
  );
};

export default MemberProfile;
