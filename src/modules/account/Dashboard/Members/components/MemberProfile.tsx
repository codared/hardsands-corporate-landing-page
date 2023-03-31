import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import ActionItem from "modules/account/MainAccountContent/components/ActionItem";
import React from "react";
import { MdAdd } from "react-icons/md";
import CreateMemberForm from "./CreateMemberForm";
import NameColumn from "./NameColumn";

const MemberProfile = ({ member }: any) => {
  console.log(
    "🚀 ~ file: MemberProfile.tsx:4 ~ MemberProfile ~ member",
    member
  );
  return (
    <Box>
      <>
        <CreateMemberForm editMode defaultValues={member} />
      </>
      <Box>
        <Image
          rounded={"lg"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Bamboo-wood-GIF.gif?v=1672479356"
          }
          alt={member.name}
        />
        <Box py={[6]}>
          <NameColumn
            name={member.name}
            subText={"Lagos, Nigeria"}
            img={member.img}
            isActive={member.status}
          />
        </Box>
      </Box>
      <Box>
        <Heading size={"md"}>Active Actions</Heading>
        <Flex direction={"column"} py={[6]}>
          <ActionItem
            title="URL"
            Icon={AppIcons.URL}
            handleActionSelect={() => {}}
          />
          <ActionItem
            title="Contact Card"
            Icon={AppIcons["Contact Card"]}
            handleActionSelect={() => {}}
          />
          <ActionItem
            title="Leads"
            Icon={AppIcons.Event}
            handleActionSelect={() => {}}
          />
        </Flex>
        <Button
          w={"full"}
          color="white"
          bg={"brand.300"}
          _hover={{ textColor: "black", bg: "brand.200" }}
          borderRadius={"none"}
          py={[6]}
        >
          <MdAdd size={24} />
          <Text>Add Action</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default MemberProfile;
