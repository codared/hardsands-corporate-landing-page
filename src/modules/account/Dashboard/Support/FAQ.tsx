import Link from "next/link";
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
} from "@chakra-ui/react";
import SupportNav from "./components/SupportNav";

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    title: "Where should I place my hardsand Epoxy?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    title: "Can I get a hardsands card with my own logo/branding?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 5,
    title: "What surfaces may hardsand Epoxy stick to?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 6,
    title:
      "Is there a monthly fee for using hardsands card or hardsands Epoxy?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 7,
    title:
      "Is it necessary for the receiver to use a hardsand product or an app to receive my info?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
        <Accordion allowToggle mt={6} border="1px solid #d9d9d9" px={8} py={5}>
          <Input />
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
