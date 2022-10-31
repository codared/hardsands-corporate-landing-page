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
  Text,
} from "@chakra-ui/react";
import { FiLink2, FiTrendingUp } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { ActionsType } from "utils/types";
import ActionCard from "../components/ActionCard";
import StatisticCard from "../components/StatisticCard";
import { ACTIONS, AppIcons } from "../constants";

const AccountTabView = ({
  cardActions,
  handleSetDefault,
  handleEdit,
  cardStatistics,
}: {
  handleSetDefault: (id: number) => void;
  handleEdit: (id: number) => void;
  cardActions: ActionsType[];
  cardStatistics?: any;
}) => {
  return (
    <Flex w={["full", "100%"]} ml={[0, 5]}>
      <Tabs w="100%" variant="unstyled">
        <TabList w="100%" bg={"transparent"} borderBottom={'1px'} borderBottomColor={"black"}>
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
            // isDisabled
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
              {cardActions
                .map((action: ActionsType) => (
                  <ActionCard
                    key={action.id}
                    handleSetDefault={() =>
                      handleSetDefault(action.id as number)
                    }
                    handleEdit={() => handleEdit(action.id as number)}
                    title={action.fieldTitle}
                    Icon={AppIcons[action.fieldTitle]}
                    isDefault={action.isDefault}
                  />
                ))
                .reverse()}
            </Grid>
          </TabPanel>
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
              {Object.keys(cardStatistics).map((stat) => (
                <StatisticCard
                  key={stat}
                  value={cardStatistics[stat]}
                  title={stat}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Text>Coming soon...!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default AccountTabView;
