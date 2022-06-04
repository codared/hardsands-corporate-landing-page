import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex h="100vh" py={10} px={6} alignItems="center">
      <Box textAlign="center" width="100%">
        <Heading
          display="inline-block"
          as="h1"
          size="4xl"
          bgGradient="linear(to-r, sandTone3, sandTone3)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you&lsquo;re looking for does not seem to exist
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, sandTone3, sandTone3)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
}
