import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import React from "react";
import Header from "./components/Header";

function EngageConnections() {
  const steps = [
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Ease of sharing",
      text: "We offer you various ways to share your card so you can maximise client engagement. This might include sharing via a QR Code, text, email, and more.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Analytics and tracking",
      text: "Our solution lets you track engagement with your cards, such as the number of card views, best-performing cards, and more.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Highly customizable",
      text: "Our customisable dashboard allows you to add more than just basic contact information, such as social media handles, business locations, website URLs, and images.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Security",
      text: "Your information remains encrypted and can only be read by authorized parties. This ensures that your information stays safe and confidential.",
    },
  ];

  return (
    <Container overflow={"hidden"} p={[0, "inherit"]} maxW={["100%", "9xl"]}>
      <Header />

      <Flex
        direction={["column", "column", "row"]}
        justifyContent={"center"}
        bg={"black"}
        p={[10, 10, 40]}
      >
        <Box
          mb={[20, 20, 0]}
          w={["100%", "100%", "50%"]}
          color={"white"}
          justifyContent={"center"}
        >
          <Heading fontSize={["4xl", "6xl"]}>
            Engage connections with an immersive experience
          </Heading>
          <Box h={6} />
          <Text w={["100%", "60%"]}>
            It may seem like a simple way to share your contact information. But
            with a little creativity, you can create an immersive experience
            that will engage your connections and leave a lasting impression.
          </Text>
          <Box h={6} />
          <HardsandsButton>Buy Now</HardsandsButton>
        </Box>

        <Image
          w={["lg", "lg", "50%"]}
          h={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_944.png?v=1670886355"
          }
          alt={"Engage connections with an immersive experience"}
        />
      </Flex>

      <Flex direction={["column"]} justifyContent={"center"} p={[10, 10, 40]}>
        <Box w={["full"]} textAlign={"center"} mb={[10, 20]}>
          <Heading textTransform={"capitalize"}>
            4 REASONS WHY YOU NEED THE BLACK MATTE CARD
          </Heading>
        </Box>

        <Flex direction={["column"]} w={["100%", "100%", "70%"]} m={"0 auto"}>
          {steps.map((step: any, index: number) => (
            <Flex
              key={step.title}
              justifyContent={["center"]}
              alignItems={["center"]}
              direction={["column", index % 2 === 0 ? "row" : "row-reverse"]}
              mb={[14, 0]}
            >
              <Image w={["full", "xs"]} src={step.img} alt={step.title} />
              <Box w={[0, 24, 32]} h={[6, 10, 0]} />
              <Box
                w={["100%", "40%"]}
                textAlign={["left", index % 2 === 0 ? "left" : "right"]}
              >
                <Heading fontWeight={"normal"}>{step.title}</Heading>
                <Box h={6} />
                <Text>{step.text}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Box
        p={[10, 10, 48]}
        bg={
          "url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/slideBg.svg?v=1670951411)"
        }
        bgRepeat={"no-repeat"}
        bgPosition={["center"]}
        bgSize={"cover"}
        mb={[10]}
      >
        <Flex direction={["column", "row"]} justifyContent={"center"}>
          <Flex
            direction={"column"}
            ml={[0, 14]}
            w={["100%", "60%", "40%"]}
            textAlign={"left"}
            justifyContent={"center"}
          >
            <Heading>Join the 1% of the 1%</Heading>
            <Box h={6} />
            <Text>
              What if we told you that in one step, you could join the 1%? Sure,
              it sounds like a sales pitch. But it&apos;s true! We want you to
              be ahead of the game.
            </Text>
            <Box h={6} />
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={"#"}
            >
              {"TRY NOW"}
            </HardsandsButton>
          </Flex>
          {/* <Box w={20} />
          <Box h={14} display={["block", "none"]} />
          <Image
            maxW={"sm"}
            src={
              "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/landing_page_asset_1.png?v=1670851695"
            }
            alt={"Join the 1% of the 1%"}
          /> */}
        </Flex>
      </Box>

      <Box maxW={"80%"} m={"0 auto 100px"} p={[10, 10, 40]} bgColor={"black"}>
        <Flex
          direction={["column", "column", "row"]}
          justifyContent={"center"}
          alignItems={["center"]}
        >
          <Image
            maxW={["100%"]}
            w={"sm"}
            src={
              "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/landing_page_asset_1.png?v=1670851695"
            }
            alt={"Personalized Corporate Gifting"}
          />
          <Box w={20} />
          <Box h={[14]} display={["block", "block", "none"]} />
          <Flex
            direction={"column"}
            ml={[0, 0, 14]}
            w={["100%", "60%", "30%"]}
            textAlign={"left"}
            justifyContent={"center"}
            color={"white"}
          >
            <Heading>Personalized Corporate Gifting</Heading>
            <Box h={6} />
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of ty
            </Text>
            <Box h={6} />
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={"#"}
            >
              {"Coming Soon"}
            </HardsandsButton>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default EngageConnections;
