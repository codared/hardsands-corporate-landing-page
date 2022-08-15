import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Input,
  Grid,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Image,
  Text,
  Button,
  Textarea,
  Link,
} from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
// @ts-ignore
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Login">
      <Flex
        as="section"
        p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
        justify="center"
      >
        <FormControl padding={10} maxW="565">
          <Heading mb={5}>Login</Heading>
          <Text mb={5}>Welcome back, Login 😎</Text>
          <Box mb={5}>
            <FormLabel htmlFor="email" fontSize="smaller">
              Email
            </FormLabel>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              id="email"
              name={"email"}
              type="email"
              placeholder="Your Email Address"
            />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="password" fontSize="smaller">
              Password
            </FormLabel>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              id="password"
              name={"password"}
              type="password"
              placeholder="Your Password"
            />
          </Box>
          <Text textAlign="center" mb={5}>
            Don&apos;t have an account?
            <Link href="/auth/signup" color="brand.300">
              Sign up
            </Link>
          </Text>
          <Button
            fontSize={14}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans"
            onClick={() => {}}
            p={["24px 16px", "24px 46px"]}
            borderWidth="2px"
            borderColor={"brand.100"}
            borderRadius="0"
            transition="all 200ms ease-in"
            w="100%"
            textAlign="center"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "2px",
              borderColor: "brand.100",
            }}
            mb={[6, 0]}
          >
            Login
          </Button>
          <Flex color="white" justify="stretch" gap={5} mt={10}>
            <Button
              fontSize={14}
              fontWeight={500}
              color={"white"}
              fontFamily="MADE Outer sans"
              onClick={() => {}}
              p={["24px 16px", "24px 46px"]}
              borderWidth="2px"
              borderColor={"blueBtn"}
              borderRadius="0"
              transition="all 200ms ease-in"
              w="100%"
              textAlign="center"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "2px",
                borderColor: "blueBtn",
              }}
              mb={[6, 0]}
              flex={1}
              bg="blueBtn"
            >
              Login with
              <Box ml={2}>
                <FaFacebookF size={14} />
              </Box>
            </Button>
            <Button
              fontSize={14}
              fontWeight={500}
              color={"white"}
              fontFamily="MADE Outer sans"
              onClick={() => {}}
              p={["24px 16px", "24px 46px"]}
              borderWidth="2px"
              borderColor={"redBtn"}
              borderRadius="0"
              transition="all 200ms ease-in"
              w="100%"
              textAlign="center"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "2px",
                borderColor: "redBtn",
              }}
              mb={[6, 0]}
              flex={1}
              bg="redBtn"
            >
              Login with{" "}
              <Box ml={2}>
                <FcGoogle size={14} />
              </Box>
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </WithLayout>
  );
};

export default Login;
