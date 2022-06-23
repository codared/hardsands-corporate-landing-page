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
  Heading,
} from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import HardsandLink from "components/HardsandsLink";
import { androidSlashIcon, editIcon, globeIcon } from "design";

const products = [
  {
    id: 0,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
  {
    id: 1,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
  {
    id: 2,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
  {
    id: 3,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
  {
    id: 4,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
  {
    id: 5,
    name: "hardsands metal card",
    description: "Our most exclusive product premium, innovative, bespoke.",
    price: "78,000",
  },
];

const Home: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <Flex
        as="header"
        justify="space-between"
        p={["1rem", "3rem 9rem"]}
        flexDir={["column-reverse", "row"]}
      >
        <Box>
          <Text color="brand.300" fontWeight="bold">
            Share your info with just a tap!
          </Text>
          <Heading fontSize="6xl" w="12ch">
            THE LAST BUSINESS CARD YOU’LL EVER BUY
          </Heading>
          <Flex textTransform="capitalize" my="40px" gap={8}>
            <HardsandLink
              fontSize={"sm"}
              fontWeight={500}
              color={"black"}
              bg={"brand.200"}
              href={"/shop"}
              p={["none", "12px 16px", "12px 46px"]}
              transition="all 200ms ease-in"
              _hover={{
                bg: "black",
                color: "brand.300",
              }}
            >
              Design Your Card
            </HardsandLink>
          </Flex>
        </Box>
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655984088/hardsands/Hero_Images_keeoue.png"
          alt="placeholder"
        />
      </Flex>
      <Flex textTransform="uppercase" fontWeight="bold" justify="space-around" px={["3rem", "9rem"]}>
        <Flex>
          <Image src={globeIcon.src} alt="globe icon" display="inline"/>
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>We ship globally</Text>
        </Flex>
        <Flex>
          <Image src={androidSlashIcon.src} alt="globe icon" display="inline"/>
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>No app required</Text>
        </Flex>
        <Flex>
          <Image src={editIcon.src} alt="globe icon" display="inline"/>
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>100% Customizable </Text>
        </Flex>
      </Flex>
      <Flex
        as="section"
        bgColor="brand.50"
        px="8rem"
        py="3rem"
        justify="space-between"
      >
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428744/hardsands/large-headshot_a57k5x.png"
          alt="video"
        />
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
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"black"}
            href={"/shop"}
            p={["none", "12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            transition="all 200ms ease-in"
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            Design Your Card
          </HardsandLink>
        </Box>
      </Flex>
      <Box as="section" px="8rem" py="6rem">
        <Text fontSize="4xl" fontWeight="black" my="60px" textAlign="center">
          Hand picked for you
        </Text>
        <Grid templateColumns={["", "repeat(3, 1fr)"]} gap={16}>
          {products.map(({ id, name, price }) => (
            <ProductCard key={id} name={name} price={price} />
          ))}
        </Grid>
        <Flex justify="center" mt="2rem">
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"white"}
            bg={"black"}
            href={"/shop"}
            p={["none", "12px 16px", "12px 46px"]}
            borderRadius="8px"
            transition="all 200ms ease-in"
            _hover={{
              bg: "black",
              color: "brand.300",
            }}
          >
            See More Cards
          </HardsandLink>
        </Flex>
      </Box>
    </WithLayout>
  );
};

export default Home;
