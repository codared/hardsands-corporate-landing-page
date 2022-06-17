import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Image,
  Grid,
  Link,
  Flex,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import ProductCard from "components/ProductCard";

const products = [
  {
    id: 0,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
  {
    id: 1,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
  {
    id: 2,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
  {
    id: 3,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
  {
    id: 4,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
  {
    id: 5,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000"
  },
];


const Home: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <Flex
        as="header"
        bgColor="brand.100"
        justify="space-between"
        px="3rem"
        pt="3rem"
      >
        <Box>
          <Stack fontSize="6xl" fontWeight="bolder" pb="20px">
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
              <Button bgColor="brand.300" px="30px" py="15px">
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
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428676/hardsands/header-img_viwcqv.jpg"
          alt="placeholder"
        />
      </Flex>
      <Grid
        as="section"
        px="3rem"
        gap={16}
        templateColumns={["", "repeat(2, 1fr)"]}
      >
        <Box mt="80px">
          <Text fontSize="4xl" fontWeight="black" mb="40px">
            Share your business <br /> information with <br />{" "}
            <Text as="span" color="brand.300">
              SWAG
            </Text>
          </Text>
          <Text mb="40px" w="42ch">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link href="/">
            <Button bgColor="black" textTransform="capitalize" color="white">
              Buy your card
            </Button>
          </Link>
        </Box>
        <Image
          border="8px"
          borderColor="brand.300"
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428491/hardsands/woman_rjf3sl.jpg"
        />
      </Grid>
      <Box as="section" p="3rem">
        <Text
          fontSize="3xl"
          fontWeight="black"
          textTransform="capitalize"
          color="brand.300"
          textAlign="center"
        >
          3 Simple Steps
        </Text>
        <Flex justify="center" gap="25px">
          <Button bgColor="brand.300" textTransform="capitalize">
            Design your card
          </Button>
          <Button
            px="30px"
            py="15px"
            variant="outline"
            border="2px"
            borderColor="gray.800"
          >
            Learn More
          </Button>
        </Flex>
      </Box>
      <Flex
        as="section"
        bgColor="brand.50"
        px="8rem"
        py="3rem"
        justify="space-between"
      >
        <Image src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428744/hardsands/large-headshot_a57k5x.png" alt="video" />
        <Box mt="2rem" ml="2rem">
          <Text fontSize="4xl" fontWeight="black" mb="40px">
            Full & Autonomous <br /> Control Over Your <br />{" "}
            <Text as="span" color="brand.300">
              Business Card
            </Text>
          </Text>
          <Text mb="40px" w="40ch">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button
            px="30px"
            py="15px"
            variant="outline"
            border="2px"
            borderColor="gray.800"
          >
            Design Your Card
          </Button>
        </Box>
      </Flex>
      <Box as="section" px="8rem" py="6rem">
        <Text fontSize="4xl" fontWeight="black" my="60px" textAlign="center">
          Hand picked for you
        </Text>
        <Grid templateColumns={["", "repeat(3, 1fr)"]} gap={16}>
          {products.map(({ name, price }) => (
            <ProductCard key={name} name={name} price={price} />
          ))}
        </Grid>
        <Flex justify="center" mt="2rem">
          <Button px="30px" py="15px" bg="black" color="white">
            See more cards
          </Button>
        </Flex>
      </Box>
    </WithLayout>
  );
};

export default Home;
