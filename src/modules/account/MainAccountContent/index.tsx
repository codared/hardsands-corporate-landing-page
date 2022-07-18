import {
  Box,
  Image,
  Flex,
  Button,
  IconButton,
  Text,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FiLink2, FiPlus, FiShare2, FiTrendingUp } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { ActionsType } from "utils/types";
import ActionCard from "../components/ActionCard";
import { ACTIONS } from "../constants";

const MainAccountContent = () => {
  return (
    // <Container>
    <Box rounded="md">
      <Flex
        justifyContent={"center"}
        flexDir={["column-reverse", "column", "row"]}
      >
        <Flex flexDir={["column-reverse", "column"]}>
          <Image
            src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
            alt="your card"
          />

          <Flex justifyContent={"center"}>
            <Button
              bg="red.300"
              color={"white"}
              _hover={{ textColor: "white" }}
              borderRadius="0"
              py={5}
              px={[10, 16]}
            >
              Deactivate
            </Button>
            {/* <Box w={50} /> */}
            <Flex
              py={1.5}
              px={[10, 16]}
              color="brand.300"
              fontWeight={"bolder"}
              alignSelf={"center"}
              borderWidth="1px"
              borderStyle="solid"
            >
              12 Taps
              <Box ml={3} alignSelf={"center"}>
                <AiOutlineEye size={20} />
              </Box>
            </Flex>
          </Flex>

          {/* QR code share section */}
          <Box p={8} my={8} borderWidth={1} borderStyle="solid">
            <Flex justify={"space-between"}>
              <Heading fontSize={14} alignSelf={"center"}>
                Share
              </Heading>
              <IconButton
                bg="black"
                color="white"
                aria-label="share link"
                icon={<FiShare2 />}
              />
            </Flex>
            <Image
              boxSize={250}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEUAAAD///+l2Z/dAAACg0lEQVR4nO3WS3JiQQwEQHP/S89qFg4IUaV+gB1OLfvpU8mKr6+zuv2v4dNQydRhwtMiJAymXo8Yi5AwmHo9YizCnyRMAt1fTV6q9MmtKiHhs/nkhZCQcE5I+Gw+eSF8u/DBt6s9FfUwISEhISEhIeF7hK8bJyQkJCQkJPw5wvtKThASEhISEhK+VJjUbmrYk2Q93bybr6aiHIT7zbv5airKQbjfvJuvpqIchPvNu/lqKspBeL65qyHH5S+fKcIrXz5ThFe+fKYIr3z5TBFe+XIa8bB2v8Kw57Jgly0ivBHmPV2wyxYR3gjzni7YZYsIbx8XVsmG5qGnaq6uT0VI2ISumgnjIiRsQlfNhHFVx4banTjcE+UhJCQkJCQkLG8MV6vmgZq8dJkJCQkJCQkJs7GhJ7mRNCdHd5kJCYfQhISrPIT9xiE04duFQ8RdjmpPVZPn8Bgh4epoFeP0GCHh6mgV4/QY4W8T3qcfPEnoZLzqST4REhISEhISPjz/upedcOkhJCQkJCQkLGHD1K52P0fS/GBzcpWwLsJ6fNqcXCWsi7AenzYnVwnreqswWV0FSn6p4dOukvCEhISEhIR/WTh8q2r3S91/qvZEP9malKdPegjTZsKDInzSQ5g2Ex7UzxUe1pC+8uw2J59Oi/DbC2G9Ofl0WoTfXgjrzcmn0yL89vJh4X2Ooaqp6miymZCQkJCQkPBcWPUkVy+LGASb9hA+7iEkbK4nwQgJCZ9c/d3C4Ua1ufpdOiohISEhISHhC/7TVJUIh+vRz0FISEhISEh4fKO6mgRKbnXNhISEhISEhNtKsu6aqz2XeZJjVzVXewgPinDfXO0hPCjCfXO1508L/wFl9l/gl2v+4QAAAABJRU5ErkJggg=="
              alt=""
              my={4}
              mx="auto"
            />
            <Flex
              justify={"space-between"}
              p={5}
              bg="brand.10"
              // TODO: copy Link
              onClick={() => {}}
              cursor="pointer"
            >
              <Box ml={3} alignSelf={"center"}>
                <FiLink2 />
              </Box>
              <Text>http://hrdsnd.co/c/UbhjAxJ</Text>
              <Box ml={3} alignSelf={"center"}>
                <FaRegCopy />
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box w={100} />

        <Flex flexDir={"column"}>
          <Flex w={["full", "100%"]}>
            <Tabs w="100%" variant="unstyled">
              <TabList w="100%" bg={"brand.100"}>
                <Tab
                  w={['33.33333%', '100%']}
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
								w={['33.33333%', '100%']}
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
								w={['33.33333%', '100%']}
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
                  <SimpleGrid columns={[1, 2, 4]} spacing={[2, 2, 5]}>
                    {ACTIONS.map((action: ActionsType) => (
                      <ActionCard
                        key={action.id}
                        title={action.title}
                        Icon={action.icon}
                        isDefault={action.isDefault}
                      />
                    ))}
                  </SimpleGrid>
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
          {/* @ts-ignore */}
          <HardsandsButton mt={10} Icon={FiPlus} href={"#"}>
            Add Action
          </HardsandsButton>
        </Flex>
      </Flex>
    </Box>
    // </Container>
  );
};

export default MainAccountContent;
