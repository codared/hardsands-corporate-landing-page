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

const Login: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Login">
      <Flex
        as="section"
        p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
        justify="center"
      >
        <FormControl boxShadow="sm" padding={10} maxW="565">
          <Heading mb={5}>Login</Heading>
          <Text mb={5}>Welcome back, Login 😎</Text>
          <Box mb={5}>
            <FormLabel htmlFor="email" fontSize="smaller">
              Email
            </FormLabel>
            <Input id="email" type="email" placeholder="Your Email Address" />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="password" fontSize="smaller">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Your Email Address"
            />
          </Box>
          <Text textAlign="center" mb={5}>
            Don&apos;t have an account? 
            <Link href="/auth/signup" color="brand.300">
              Sign up
            </Link>
          </Text>
          <Button bg="black" color="white" w="full">
            Login
          </Button>
          <Flex color="white" justify="stretch" gap={5} mt={10}>
            <Button flex={1} bg="blueBtn">Login with Facebook</Button>
            <Button flex={1} bg="redBtn">Login with Google</Button>
          </Flex>
        </FormControl>
      </Flex>
    </WithLayout>
  );
};

export default Login;
