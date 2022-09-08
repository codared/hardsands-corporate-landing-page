import {
  Flex,
  Tabs,
  TabList,
  Tab,
  Box,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import { FiLink2, FiTrendingUp } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { ActionsType } from "utils/types";
import ActionCard from "../components/ActionCard";
import { ACTIONS, AppIcons } from "../constants";

const AccountTabView = ({ cardActions }: { cardActions: ActionsType[] }) => {
  return (
    <Flex w={["full", "100%"]} ml={[0, 5]}>
      <Tabs w="100%" variant="unstyled">
        <TabList w="100%" bg={"brand.100"}>
          <Tab
            w={["33.33333%", "100%"]}
            py={[2, 5]}
            // px={[6, 24]}
            _selected={{ color: "brand.200", bg: "black" }}
          >
            <Box mr={[2, 5]} alignSelf={"center"}>
              <FiLink2 />
            </Box>
            Actions
          </Tab>
          <Tab
            w={["33.33333%", "100%"]}
            py={[2, 5]}
            // px={[6, 24]}
            isDisabled
            _selected={{ color: "brand.200", bg: "black" }}
          >
            <Box mr={[2, 5]} alignSelf={"center"}>
              <FiTrendingUp />
            </Box>
            Statistics
          </Tab>
          <Tab
            w={["33.33333%", "100%"]}
            py={[2, 5]}
            // px={[6, 24]}
            isDisabled
            _selected={{ color: "brand.200", bg: "black" }}
          >
            <Box mr={[2, 5]} alignSelf={"center"}>
              <IoSettingsOutline />
            </Box>
            Settings
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={["1rem", "2rem"]}
              overflow="hidden"
            >
              {cardActions.map((action: ActionsType) => (
                <ActionCard
                  key={action.id}
                  title={action.title}
                  Icon={AppIcons[action.icon]}
                  isDefault={action.isDefault}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default AccountTabView;
