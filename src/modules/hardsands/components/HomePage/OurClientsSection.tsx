import { Flex, Heading, Grid, Image } from "@chakra-ui/react";

const OurClientsSection = () => {
  return (
    <Flex
      as="section"
      p={["2rem 1rem 3rem", "0 6rem 2rem", "0 9rem 3rem"]}
      justify="center"
      alignItems="center"
      flexDir={["column", "row"]}
    >
      <Heading
        fontSize="small"
        textTransform="uppercase"
        mb={["30px", "0"]}
        mr={["0", "40px", "60px"]}
      >
        Our clients:
      </Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "40px", "60px"]}
      >
        <Image
          src={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657209503/hardsands/google_jtweit.svg"
          }
          alt="Google"
          m="auto"
        />
        <Image
          src={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657209471/hardsands/emirates_ebhq6p.svg"
          }
          alt="Emirates"
          m="auto"
        />
        <Image
          src={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657209515/hardsands/jumeirah_uc89dt.svg"
          }
          alt="Jumeirah"
          m="auto"
        />
        <Image
          src={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657209491/hardsands/forbes_czqiw1.svg"
          }
          alt="Forbes"
          m="auto"
        />
      </Grid>
    </Flex>
  );
};

export default OurClientsSection;
