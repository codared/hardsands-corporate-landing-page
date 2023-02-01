import {
  Heading,
  OrderedList,
  UnorderedList,
  ListItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { PrismicLink } from "@prismicio/react";

export const richTextComponents = {
  heading1: ({ children }: any) => (
    <Heading
      as="h2"
      size="xl"
      mb={[7]}
      mt={[0, 12]}
      className="mb-7 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  heading2: ({ children }: any) => (
    <Heading as="h3" size="lg" mb={[3]} className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }: any) => (
    <Heading as="h4" size="md" mb={[3]} className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: any) => (
    <Text fontWeight={"lighter"} mb={[7]} className="mb-7 last:mb-0">
      {children}
    </Text>
  ),
  oList: ({ children }: any) => (
    <OrderedList mb={[7]} pl={[4, 6]} className="mb-7 pl-4 last:mb-0 md:pl-6">
      {children}
    </OrderedList>
  ),
  list: ({ children }: any) => (
    <UnorderedList mb={[7]} pl={[4, 6]} className="mb-7 pl-4 last:mb-0 md:pl-6">
      {children}
    </UnorderedList>
  ),
  listItem: ({ children }: any) => (
    <ListItem
      mb={[7]}
      listStyleType={"disc"}
      pl={[1, 2]}
      className="mb-1 list-disc pl-1 last:mb-0 md:pl-2"
    >
      {children}
    </ListItem>
  ),
  preformatted: ({ children }: any) => (
    <Box
      as={"pre"}
      mb={[7]}
      borderRadius={"3px"}
      bg={"slate.100"}
      p={[4, 8]}
      fontSize={["sm", "lg"]}
      className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg"
    >
      <code>{children}</code>
    </Box>
  ),
  strong: ({ children }: any) => (
    <Box
      as={"strong"}
      fontWeight={"semibold"}
      fontSize={"inherit"}
      className="font-semibold"
    >
      {children}
    </Box>
  ),
  hyperlink: ({ children, node }: any) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};
