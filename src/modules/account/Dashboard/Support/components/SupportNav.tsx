import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { DASH_ROOT } from "modules/account/constants";
import { routeId } from "modules/account/constants";

const SupportNav = () => {
  const { query } = useRouter();

  const corpName = (query.corpName as string[]) || [];

  const baseUrl = DASH_ROOT.replace(routeId, corpName[0]);

  return (
    <Flex>
      <Link href={`${baseUrl}/support/faq`}>
        <Box
          px={5}
          py={2}
          bg={corpName[2] === "faq" ? "brand.300" : "#d9d9d917"}
          border={corpName[2] === "faq" ? "none" : "1px solid #d9d9d9"}
          color={corpName[2] === "faq" ? "#fff" : "#000"}
          fontWeight={"bold"}
          w="full"
          maxW="204px"
          textAlign="center"
          cursor={"pointer"}
        >
          FAQ
        </Box>
      </Link>
      <Link href={`${baseUrl}/support/report-issue`}>
        <Box
          px={5}
          py={2}
          bg={corpName[2] === "report-issue" ? "brand.300" : "#d9d9d917"}
          border={corpName[2] === "report-issue" ? "none" : "1px solid #d9d9d9"}
          color={corpName[2] === "report-issue" ? "#fff" : "#000"}
          fontWeight={"bold"}
          w="full"
          maxW="204px"
          textAlign="center"
          cursor={"pointer"}
        >
          Report an issue
        </Box>
      </Link>
    </Flex>
  );
};

export default SupportNav;
