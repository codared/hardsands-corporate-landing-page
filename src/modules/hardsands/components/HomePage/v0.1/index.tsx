import WithLayout from "components/WithLayout";
import { HomePage } from "modules/hardsands";
import type { NextPage } from "next";
import { Box, Image, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import {
  androidSlashIcon,
  editIcon,
  globeIcon,
  hardsandsIconLogo,
  hardsandsTextLogo,
  rightArrow,
} from "design";
import { HomeProductCard } from "components/ProductCard";
import { ReviewCard } from "components/ReviewCard";
import { useTranslation } from "react-i18next";
import productRoutes from "modules/products/routes";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 0,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655990033/hardsands/image_10_zfqbsn.png",
      name: "Metal",
      description: "Our most exclusive product - premium, innovative, bespoke.",
      price: "500",
    },
    {
      id: 1,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655990033/hardsands/image_10_zfqbsn.png",
      name: "Wood",
      description: "Our most exclusive product - premium, innovative, bespoke.",
      price: "500",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655990033/hardsands/image_10_zfqbsn.png",
      name: "Plastic",
      description: "Our most exclusive product - premium, innovative, bespoke.",
      price: "500",
    },
  ];

  const cardUses = [
    {
      id: 0,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655993481/hardsands/image_10_g3xnxi.png",
      name: "Digital Business Card",
      description:
        "sharing your contact details, addresses, websites & emails easily.",
    },
    {
      id: 1,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655993481/hardsands/image_10_g3xnxi.png",
      name: "Profile Hub",
      description: "sharing everything about who you are and what you do.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655993481/hardsands/image_10_g3xnxi.png",
      name: "Lead Generation Tool",
      description: "more leads and appointments there and then.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655993481/hardsands/image_10_g3xnxi.png",
      name: "Link to any url",
      description:
        "Linking to any digital presence.Apps, Videos, E-menus & PDFs.",
    },
  ];
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <Flex
        as="header"
        justify="space-between"
        p={["1rem", "2rem 6rem", "6rem 9rem 3rem"]}
        flexDir={["column-reverse", "row"]}
      >
        <Box>
          <Text color="brand.300" fontWeight="bold" fontSize={["xl", "2xl"]}>
            {t("heading:subheading", "Share your info with just a tap!")}
          </Text>
          <Heading fontSize={["5xl", "4xl", "7xl"]} maxW={["10ch", "12ch"]}>
            {t("heading", "THE LAST BUSINESS CARD YOU’LL EVER BUY")}
          </Heading>
          <Flex textTransform="capitalize" my="40px" gap={8}>
            <HardsandLink
              fontSize={"sm"}
              fontWeight="bold"
              color={"black"}
              bg={"brand.200"}
              href={productRoutes.products()}
              p={["12px 16px", "12px 46px"]}
              w="fit-content"
              display="flex"
              alignItems="center"
              transition="all 200ms ease-in"
              _hover={{
                bg: "black",
                color: "brand.300",
              }}
              fontFamily="Made Outer Sans Regular"
            >
              <Text as="span">Design Your Card</Text>
              <Image src={rightArrow.src} alt="design your card" ml="2rem" />
            </HardsandLink>
          </Flex>
        </Box>
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655984088/hardsands/Hero_Images_keeoue.png"
          alt="placeholder"
          maxW={["full", "300", "500"]}
        />
      </Flex>
      <Flex
        textTransform="uppercase"
        fontWeight="bold"
        justify="space-around"
        px={["1rem", "6rem", "9rem"]}
        flexDir={["column", "row"]}
        alignItems="center"
        fontFamily="Made Outer Sans Regular"
      >
        <Flex mb={[4, 0]}>
          <Image src={globeIcon.src} alt="globe icon" display="inline" />
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>Worldwide shipping</Text>
        </Flex>
        <Flex mb={[4, 0]}>
          <Image src={androidSlashIcon.src} alt="globe icon" display="inline" />
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>No app required</Text>
        </Flex>
        <Flex mb={[4, 0]}>
          <Image src={editIcon.src} alt="globe icon" display="inline" />
          <Text ml={["1rem", "1.5rem", "2.5rem"]}>100% Customizable </Text>
        </Flex>
      </Flex>
      <Box as="section" p={["1rem", "2rem 6rem", "3rem 9rem"]}>
        <Grid
          bgImage="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655985288/hardsands/image_12_bjbc25.png"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          color="white"
          templateColumns={["", "repeat(2, 1fr)"]}
        >
          <Box p="1rem" flexGrow={1}>
            <Image
              src={hardsandsIconLogo.src}
              alt="Hardsands logo"
              display="inline"
              mr={2}
            />
            <Image
              src={hardsandsTextLogo.src}
              alt="Hardsands logo"
              display="inline"
            />
          </Box>

          <Box
            bg="blackAlpha.600"
            p={["1.5rem 1rem", "2.5rem 1.8rem", "4rem 3rem"]}
          >
            <Heading
              textTransform="uppercase"
              maxW={["full", "11ch"]}
              fontSize={["xl", "2xl", "5xl"]}
              mb={4}
            >
              DISCOVER{" "}
              <Text as="span" color="brand.300">
                HARDSANDS
              </Text>{" "}
              NFC BUSINESS CARDS
            </Heading>
            <Text fontWeight="bold" mb="30px">
              Instantly transfer any information.
            </Text>
            <Text mb="30px">
              Using NFC technology, the Hardsands card can share all of your
              information when tapped against a smartphone. No more messing
              around with old paper business cards, put all the information
              right where people spend most of their time - their phone!
            </Text>
            <HardsandLink
              fontSize={"sm"}
              fontWeight="bold"
              color={"black"}
              display="flex"
              bg={"brand.200"}
              href={productRoutes.products()}
              mt={6}
              p={["12px 16px", "12px 46px"]}
              w="fit-content"
              alignItems="center"
              transition="all 200ms ease-in"
              _hover={{
                bg: "black",
                color: "brand.300",
              }}
              fontFamily="Made Outer Sans Regular"
            >
              <Text as="span">Design Your Card</Text>
              <Image src={rightArrow.src} alt="design your card" ml="2rem" />
            </HardsandLink>
          </Box>
        </Grid>
      </Box>
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
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={["20px", "40px", "60px"]}
        >
          {/* <Image src={googleLogo.src} alt="Google" m="auto" />
          <Image src={emiratesLogo.src} alt="Emirates" m="auto" />
          <Image src={jumeirahLogo.src} alt="Jumeirah" m="auto" />
          <Image src={forbesLogo.src} alt="Forbes" m="auto" /> */}
        </Grid>
      </Flex>
      <Box as="section" bg="#F9F6F3" p={["1rem", "2rem", "3rem"]}>
        <Heading textAlign="center" mb={4}>
          CHOOSE YOUR MATERIAL
        </Heading>
        <Text color="brand.300" textAlign="center" fontWeight="bold" mb={8}>
          Get started by choosing your base material type
        </Text>
        <Flex
          justify="center"
          flexDir={["column", "row"]}
          flexWrap="wrap"
          gap={["20px", "40px", "60px"]}
        >
          {/* {products.map(({ id, name, img, description, price }) => (
            <Flex key={id}>
              <HomeProductCard
                name={name}
                img={img}
                price={price}
                description={description}
                t={() => {}}
              />
              {id < 2 && (
                <Image
                  ml={["20px", "40px", "60px"]}
                  src={divider.src}
                  alt="divider"
                  display={["none", "block"]}
                />
              )}
            </Flex>
          ))} */}
        </Flex>
      </Box>
      <Box as="section" p={["1rem", "2rem 6rem", "3rem 9rem"]}>
        <Heading textAlign="center" mb={6}>
          WHAT YOU WOULD USE YOUR CARD FOR
        </Heading>
        <Text color="brand.300" textAlign="center" fontWeight="bold" mb={6}>
          Share anything with one simple tap.
        </Text>
        <Flex flexWrap="wrap" justify="space-around">
          {cardUses.map(({ id, name, img, description }) => (
            <Box key={id} maxW="250px">
              <Image
                src={img}
                alt={`${name}`}
                display="block"
                mb={5}
                mx="auto"
              />
              <Heading
                color="brand.300"
                textTransform="uppercase"
                textAlign="center"
                fontSize="lg"
                fontWeight="normal"
                mb={5}
              >
                {name}
              </Heading>
              <Text textAlign="center">{description}</Text>
            </Box>
          ))}
        </Flex>
        <Text textAlign="center" fontWeight="bold" mt={6}>
          Share Payment info like Paypal, Cash App, Zelle, or Bank Details
        </Text>
      </Box>
      <Flex
        as="section"
        bg="#F9F6F3"
        p={["1rem", "2rem 6rem", "4rem 9rem"]}
        flexDir={["column", "column", "row"]}
        justify="center"
        alignItems="center"
        gap={["20px", "40px", "60px"]}
      >
        <Box>
          <Heading mb={10}>TWO WAYS TO SHARE</Heading>
          <Text color="brand.300" fontWeight="bold" mb={6}>
            Compatible with all phones. <br /> No app required.
          </Text>
          <Text mb={6}>
            Simply tap or scan your card using any smartphone, with <br />
            no app or installation required. It’s really that simple!
          </Text>
          <Flex gap="40px">
            <Box>
              <Text textTransform="uppercase" fontWeight="bold">
                You tap
              </Text>
              <Text lineHeight={["2rem"]}>
                1. Tap phone to hardsands card. <br />
                2. Open the notification.
              </Text>
            </Box>
            <Box>
              <Text textTransform="uppercase" fontWeight="bold">
                they scan
              </Text>
              <Text lineHeight="2rem">
                1. Open the camera app. <br />
                2. Point the camera at the QR code. <br />
                3. Open the link in browser.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655995885/hardsands/Video_player_qk9rp8.png"
          alt="video"
          maxW={["full", "470px"]}
          maxH="370px"
          objectFit="cover"
        />
      </Flex>
      <Flex
        as="section"
        bg="black"
        color="white"
        p={["1rem", "2rem 6rem", "4rem 9rem"]}
        flexDir={["column", "row"]}
        justify="space-between"
      >
        <Flex justify="center" flexDir="column">
          <Heading mb={10} color="brand.100">
            DON&apos;T LISTEN TO US, <br />
            LISTEN TO THEM.
          </Heading>
          <Text fontWeight="bold" mb={6}>
            Join the 110,000+ others who have <br />
            experienced modern networking with <br />
            Hardsands.
          </Text>
        </Flex>
        <Box>
          <ReviewCard
            name="John Doe"
            review={`"This is a serious business card for people taking what they are doing seriously and want to show that."`}
          />
          <ReviewCard
            name="John Doe"
            review={`"This is a serious business card for people taking what they are doing seriously and want to show that."`}
          />
          <ReviewCard
            name="John Doe"
            review={`"This is a serious business card for people taking what they are doing seriously and want to show that."`}
          />
        </Box>
      </Flex>
      <Flex as="section" p={["1rem", "2rem 6rem", "4rem 9rem"]}></Flex>
    </WithLayout>
  );
};

export default Home;
