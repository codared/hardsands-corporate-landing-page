import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { DASH_ROOT } from "modules/account/constants";

const SupportNav = () => {
    const { pathname} = useRouter();
    console.log(DASH_ROOT, 1)
    return (
      <Flex>
        <Link href={`${DASH_ROOT}/support/faq`}>
          <Box
            px={5}
            py={2}
            bg="brand.300"
            fontWeight={500}
            w="full"
            maxW="204px"
            textAlign="center"
            color={pathname.includes("support/faq") ? "#fff": "#000"}
          >
            FAQ
          </Box>
        </Link>
        <Link href={`${DASH_ROOT}/support/report-issue`}>
          <Box
            px={5}
            py={2}
            bg="#d9d9d917"
            border="1px solid #d9d9d9"
            fontWeight={500}
            w="full"
            maxW="204px"
            textAlign="center"
          >
            Report an issue
          </Box>
        </Link>
      </Flex>
    );
}

export default SupportNav;