import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import { Box, Image, Link, Flex, Stack, Text, Button } from "@chakra-ui/react";
import headerImg from "../assets/header-img.jpeg";

const Home: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <header className="header">
        <Flex justify="space-between">
          <Box>
            <Stack fontSize="6xl" fontWeight="black" pb="20px">
              <Text>All in One Business</Text>
              <Text color="brand.300" as="span">
                Cards{" "}
                <Text as="span" color="gray.800">
                  Powered By
                </Text>
              </Text>
              <Text display="inline" as="span">
                Technology
              </Text>
            </Stack>
            <Flex textTransform="capitalize" mb="40px">
              <Link href="/" colorScheme="green">
                <Button background="brand.300" px="30px" py="15px">
                  Design your card
                </Button>
                <Button
                  px="30px"
                  py="15px"
                  ml="10"
                  variant="outline"
                  border="2px"
                  borderColor="gray.800"
                >
                  Learn More
                </Button>
              </Link>
            </Flex>
          </Box>
          <Image src={headerImg.src} alt="placeholder" />
        </Flex>
      </header>
    </WithLayout>
  );
};

export default Home;
