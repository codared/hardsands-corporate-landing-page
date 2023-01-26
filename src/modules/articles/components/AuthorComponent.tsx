import { Stack, Avatar, Text } from "@chakra-ui/react";
import React from "react";

function AuthorComponent({
  image,
  name,
  minRead,
  createdAt,
}: {
  image: string;
  name: string;
  minRead: string;
  createdAt: string;
}) {
  return (
    <Stack my={6} direction={"row"} spacing={4} align={"center"}>
      <Avatar
        src={image}
        // @ts-ignore
        alt={`Author - ${name}`}
      />
      <Stack direction={"column"} spacing={0} fontSize={"sm"}>
        <Text fontWeight={600}>{name}</Text>
        <Text color={"gray.400"}>
          {createdAt} · {minRead}
        </Text>
      </Stack>
    </Stack>
  );
}

export default AuthorComponent;
