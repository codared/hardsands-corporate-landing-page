import {
  Box,
  Flex,
  Container,
  Grid,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";

export const PLPSkeleton = () => {
  const idArray = [0, 1, 2];
  return (
    <Container maxWidth={["lg", "7xl"]}>
      <Flex as="section" p={["4rem 1rem", "4rem 6rem"]} justify="center">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="2rem"
        >
          {idArray.map((id) => (
            <ProductCardSkeleton key={id} />
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};

const ProductCardSkeleton = () => {
  return (
    <Box position="relative" mb={[0]}>
      <Skeleton w={300} height={200} />

      <Box p={["4"]} textAlign="center">
        <Skeleton w={"full"} height={4} />
        <Box h={5} />
        <Flex mt={[0, 3, 3]} justify="space-between" flexDir={["column"]}>
          <Flex mb={2} justifyContent={"space-between"} alignItems={"center"}>
            <Flex>
              <SkeletonCircle size="5" mr={2} />
              <SkeletonCircle size="5" />
            </Flex>
            <Box m="auto 0">
              <Skeleton w={100} height={5} />
            </Box>
          </Flex>
          <Box h={5} />
          <Skeleton w={"full"} height={10} />
        </Flex>
      </Box>
    </Box>
  );
};

export default PLPSkeleton;
