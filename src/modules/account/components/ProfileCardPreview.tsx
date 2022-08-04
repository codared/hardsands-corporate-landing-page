import { Box, VStack, Image, Button, Text, Flex, Grid } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileCardPreview = ({
  addSocials,
  selectedSocials,
}: {
  addSocials: () => void;
  selectedSocials: any[];
}) => {
  return (
    <Box minW={"290px"}>
      <VStack p={[5]} position="relative">
        <Box w={["full"]}></Box>
        <Image
          boxSize={150}
          borderWidth={10}
          borderColor={"brand.300"}
          borderRadius="full"
          src={
            "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE="
            // "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
          }
          alt={"profile preview image"}
        />
        <Text>Name</Text>
        <Text>Title</Text>
        <Text>Address</Text>
        <Text>About texts</Text>

        <Flex>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["1rem", "2rem"]}
            overflow="hidden"
          >
            {selectedSocials.map((selectedSocial, index) => (
              <Image
                w={100}
                key={index}
                src={selectedSocial.image.src}
                alt={selectedSocial.label}
              />
            ))}
            <Button
              bg="transparent"
              borderWidth={2}
              borderStyle={"dashed"}
              borderColor={"black"}
              p={[5]}
              onClick={addSocials}
            >
              <Box>
                <AiOutlinePlus />
              </Box>
            </Button>
          </Grid>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProfileCardPreview;
