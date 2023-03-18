import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouteChange } from "../hooks";
import FormSelectorCard from "../sharedComponents/FormSelectorCard";
import { LEADSFORM } from "./constants";
import LeadsFormRecords from "./LeadsFormRecords";
import queryString from "query-string";
import { useRouter } from "next/router";

const Leads = () => {
  const route = useRouter();
  const parsed = queryString.parse(route.asPath.split("?")[1]);
  const form = LEADSFORM.find((form: any) => form.id === Number(parsed.form));
  const [activeForm, setActiveForm] = useState<
    | {
        name: string;
        id: number;
      }
    | undefined
  >(form || LEADSFORM[0]);

  useRouteChange(activeForm?.id);

  return (
    <Box>
      <Box>
        <Text color="#737373" fontSize="14px">
          Please select one of the forms below to access your leads
        </Text>
        <Heading>Leads</Heading>
      </Box>

      <Flex
        mt="8"
        flexDirection={["row", "row", "row"]}
        gap="8"
        transition={"all ease-in-out 200ms"}
        overflowX={"auto"}
      >
        {LEADSFORM.map((form) => (
          <FormSelectorCard
            key={form.name}
            form={form}
            // width={100 / LEADSFORM.length}
            active={activeForm?.id === form.id}
            onClick={setActiveForm}
          />
        ))}
      </Flex>

      <Box mt="8">
        <LeadsFormRecords selectForm={activeForm} />
      </Box>
    </Box>
  );
};

export default Leads;
