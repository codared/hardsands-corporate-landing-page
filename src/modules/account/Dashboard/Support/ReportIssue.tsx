import {
  Box,
  Flex,
  Text,
  Heading,
  FormLabel,
  Select,
  FormControl,
  Button,
  Textarea,
} from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import HardsandLink from "components/HardsandsLink";
import Router from "next/router";
import { useState } from "react";
import SupportNav from "./components/SupportNav";

export const ISSUES = [
  {
    name: "About my existing order",
    value: "About my existing order",
  },
  {
    name: "I need help with cards or my account",
    value: "I need help with cards or my account",
  },
  {
    name: "Can’t activate an action",
    value: "Can’t activate an action",
  },
  {
    name: "Other",
    value: "Other",
  },
];

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHref = () => {
    if (!formData.name || !formData.issue) return "#";
    return `mailto:info@hardsands.com?subject=${formData.name} - ${formData.issue}&body=${formData.message}`;
  };

  return (
    <Box w={"full"}>
      <Heading>Support</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Find answers to your questions here or contact us directly at{" "}
        <HardsandLink href={"mailto:info@hardsands.com"}>
          info@hardsands.com
        </HardsandLink>
      </Text>
      <Box mt={6} bg="#fff" p={5} w={"full"}>
        <SupportNav />
        <Box as="form" px={10} py={5} mt={5} border="1px solid #d9d9d9">
          <Heading fontSize={"1.25rem"} textAlign={"center"} mb={6}>
            Report An Issue
          </Heading>
          <CustomInput
            onChange={handleChange}
            mb={6}
            name="name"
            label="Name"
          />
          <CustomInput
            onChange={handleChange}
            mb={6}
            name="email"
            label="Email"
          />
          <FormControl mb={6}>
            <FormLabel>Choose Issue</FormLabel>
            <Select
              name={"issue"}
              borderRadius={"none"}
              placeholder="Choose Issue"
              onChange={handleChange}
            >
              {ISSUES.map((issue) => (
                <option key={issue.name} value={issue.value}>
                  {issue.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Enter Message</FormLabel>
            <Textarea
              mb={6}
              placeholder="Message"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              borderWidth={1}
              borderRadius="none"
            />
          </FormControl>
          <HardsandLink
            href={handleHref()}
            color="#fff"
            bg="brand.300"
            w="100%"
            textAlign={"center"}
            display={"block"}
            borderRadius={"none"}
            _hover={{ textColor: "black", bg: "brand.200" }}
            py={[4]}
            my={[2]}
          >
            Submit
          </HardsandLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportIssue;
