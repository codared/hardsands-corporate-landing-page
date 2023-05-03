import {
  Box,
  Flex,
  Text,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Input,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import SupportNav from "./components/SupportNav";
import { SearchIcon } from "assets/index";

const FAQs = [
  {
    id: 1,
    title: "What is Hardsands Card?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    title: "How do hardsands cards and Epoxy work?",
    content:
      "Hardsands cards use NFC technology to transmit information to smartphones. Epoxy is a protective coating that adds durability to the card.",
  },
  {
    id: 3,
    title: "Where should I place my hardsand Epoxy?",
    content:
      "You can place your Hardsand Epoxy on any smooth and flat surface, such as a phone case, laptop, or notebook.",
  },
  {
    id: 4,
    title: "Can I get a hardsands card with my own logo/branding?",
    content:
      "Yes, you can customize your Hardsands card with your own logo or branding.",
  },
  {
    id: 5,
    title: "What surfaces may hardsand Epoxy stick to?",
    content:
      "Hardsand Epoxy can stick to most surfaces, including plastic, glass, and metal.",
  },
  {
    id: 6,
    title:
      "Is there a monthly fee for using hardsands card or hardsands Epoxy?",
    content:
      "There is no monthly fee for using Hardsands card or hardsands Epoxy.",
  },
  {
    id: 7,
    title:
      "Is it necessary for the receiver to use a hardsand product or an app to receive my info?",
    content:
      "No, the receiver does not need to use a Hardsand product or an app to receive your information. Any smartphone with NFC capabilities can read the information on the card.",
  },
];

const FAQ = () => {
  return (
    <Box>
      <Heading>Support</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Lorem ipsium is simply dummy text of the printing and type setting
      </Text>
      <Box mt={6} bg="#fff" p={5}>
        <SupportNav />
        <Accordion
          allowToggle
          mt={6}
          border="1px solid #d9d9d9"
          px={8}
          py={5}
          
        >
          <Flex
            bg="#f9f9f9"
            border="0.5px solid #D9D9D9"
            maxW="280px"
            ml="auto"
            gap={2}
            px={4}
            mb={4}
          >
            <Image src={SearchIcon.src} alt="Search" />
            <Input
              placeholder="Search"
              border="none"
              bg="none"
              fontSize="12px"
              focusBorderColor="none"
              p={0}
            />
          </Flex>
          {FAQs.map(({ id, title, content }) => (
            <AccordionItem key={id} py={4}>
              <Heading fontSize={"1.25rem"}>
                <AccordionButton
                  display="flex"
                  justifyContent={"space-between"}
                  _hover={{ color: "#000 !important", background: "#fff" }}
                  textTransform={"capitalize"}
                >
                  {title} <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4} color="#757575">
                {content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
