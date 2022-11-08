import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Mark from "mark.js";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// import { FaqContentButton } from './components/FaqContentButton'
// import FaqContents from './components/FaqContents'
// import FaqCovidNotice from './components/FaqCovidNotice'
// import FaqHeader from './components/FaqHeader'
// import FaqSectionTitles from './components/FaqSectionTitles'
// import { getFaqData } from './faqContents'

import staticRoutes from "modules/static/routes";
import { debounce } from "utils/debounce";
import FaqContents from "./FaqContents";
// import { initKustomerChat } from 'modules/analytics/functions/kustomer'

const FaqPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setQuery] = useState("");
  const searchNodeRef = useRef(null);

  const markInstance = useRef<Mark | undefined>();

  const debouncedMark = debounce(() => {
    markInstance.current?.unmark({
      done: () => {
        markInstance.current?.mark(searchQuery);
      },
    });
  }, 50);

  useEffect(() => {
    markInstance.current = new Mark(
      searchNodeRef.current as unknown as HTMLElement
    );
  }, []);

  useEffect(() => {
    markInstance.current = new Mark(
      searchNodeRef.current as unknown as HTMLElement
    );
  }, []);

  useEffect(() => {
    debouncedMark();
  }, [searchQuery]);

  const handleChange = (event: { target: { value: any } }) => {
    const searchString = event.target.value;
    setQuery(searchString);
  };

  const searchPlaceholder = () => {
    return t("support:search.placeholder", "Search FAQs{{dots}}", {
      dots: "...",
    });
  };

  // Ensure Kustomer chat icon only shows on FAQ page
  useEffect(() => {
    const kustomerIframe = document.getElementById("kustomer-ui-sdk-iframe");
    if (kustomerIframe) {
      kustomerIframe.style.display = "block";
    }
    // else {
    //   initKustomerChat()
    // }

    return () => {
      if (kustomerIframe) {
        kustomerIframe.style.display = "none";
      }
    };
  }, []);

  return (
    <Box pb={24}>
      {/* <FaqHeader /> */}
      <Flex
        direction={["column", "row"]}
        justify="center"
        mt={12}
        px={["unset", "30px", "unset"]}
      >
        <Heading mb={22}>FAQs</Heading>

        <Box
          position="relative"
          maxWidth="48rem"
          width="100%"
          px={[4, 8]}
          ref={searchNodeRef}
        >
          {/* <FaqCovidNotice /> */}
          <Box my={[8, 10]} mb={[10]}>
            <Input
              value={searchQuery}
              onChange={handleChange}
              placeholder={searchPlaceholder()}
            />
          </Box>
          <FaqContents />
          <FaqCustomerSupportSection />
        </Box>
      </Flex>
    </Box>
  );
};

const FaqCustomerSupportSection = () => {
  const { t } = useTranslation();

  const contactSupportLink = {
    id: "contact-support",
    title: t(
      "support:content.contact-customer-support",
      "Contact Customer Support"
    ),
    href: staticRoutes.customerSupport(),
  };

  return (
    <Flex
      my={[3, 3, 6]}
      position="sticky"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
      justify="center"
      bg="white"
      alignItems="center"
      py={4}
      flexDirection={["column", "row"]}
    >
      <Text
        size="md"
        fontWeight="bold"
        lineHeight="2"
        mr={[0, 8]}
        mb={[4, 0]}
        textAlign={["center", "unset"]}
      >
        {t(
          "support:need-help-contact-us",
          "Need help? Contact us via our Hardsands Technology Customer Support and let us know how we can help!"
        )}
      </Text>
      {/* <FaqContentButton link={contactSupportLink} /> */}
    </Flex>
  );
};

export default FaqPage;
