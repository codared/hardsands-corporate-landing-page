import { useRef, useState } from "react";
import {
  Container,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Grid,
  Stack,
  VStack,
  HStack,
  Center,
  Input,
  GridItem,
  Img,
  Button,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import productRoutes from "modules/products/routes";
import {
  HappyConfidentProfessionalTeam,
  WhyChooseHardsands,
  WantToMaximizeYourTeamsPotential,
  TailoredForYou,
  TailoredForYouDivider,
  TailoredForYouIcon,
  Divider,
  IntegrationMadeEasyIcon,
  IntegrationMadeEasyImage,
  EffortlesslyManageYourTeam,
  DividerDownwards,
  User,
  Paper,
  DataAndSafety,
  FeaturesThatGiveUsAnEdgeBg,
  AnalyzingData,
  AdminDashboard,
  ProfilePage,
  HC1,
  HC3,
  HC4,
  IMG1,
  IMG2,
  IMG3,
  ACL,
  ACR,
  TUTD1,
  TUTD2,
  TUTD3,
  TUTD4,
  Customer1,
  Customer2,
  Customer3,
  StarFill,
  Worldwide,
  ProfileCircle,
  ProfileUser2,
  PersonalCard,
  UpgradingYourTeamImage,
  MaximizingYourTeamImage,
  SearchIconW,
  CircleClicked,
  CircleUnclicked,
  HorizontalDivider,
} from "assets/index";
import WithLayout from "components/WithLayout";
import WhatOurCustomersAreSaying from "modules/hardsands/Corporate/WhatOurCustomersAreSaying";
const Corporate = () => {
  const [boxIndex, setBoxIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(-1);

  const boxWidth = "309px";
  const boxHeight = "303px";
  const boxMt = "135px";
  const imgWidth = "100px";
  const imgHeight = "100px";
  const imgMt = "-59px";
  const textMt = "12px";
  const dTextMt = "31px";
  const textFontSize = "13px";

  const cardRef = useRef(null);
  const boxRef = useRef(null);

  const cardScroll = (offset: number) => {
    //@ts-ignore
    cardRef.current.scrollLeft += offset;
  };

  const boxScrollLeft = (offset: number) => {
    //@ts-ignore
    boxRef.current.scrollLeft -= offset;
    if (boxIndex > 1) {
      const value = boxIndex - 1;
      setBoxIndex(value);
    }
  };
  console.log("index:: ", activeIndex);

  const boxScrollRight = (offset: number) => {
    //@ts-ignore
    boxRef.current.scrollLeft += offset;
    if (6 - boxIndex > 2) {
      const value = boxIndex + 1;
      setBoxIndex(value);
    }
  };
  return (
    <WithLayout pageTitle="Hardsands - Corporate">
      <Box overflow="hidden">
        <Box //bg
          width={["100%", "100%", "71%"]}
          maxWidth="2150px"
          h="678px"
          bg="#FEF8F3"
          mt={["20px", "20px", "70px"]}
          ml={["0%", "0%", "2%"]}
          position="absolute"
          zIndex={-400}
        ></Box>

        <Flex // Empower Your Team
          alignItems="center"
          justifyContent="center"
          w="100%"
          ml={["0px", "0px", "125px"]}
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Image
            w={["100%", "65%", "530px"]}
            h={["100%", "65%", "635px"]}
            pt={["0px", "12px", "9px"]}
            mx="auto"
            color="#FEF8F3"
            src={HappyConfidentProfessionalTeam.src}
            alt={"happyconfidentprofessionalimage"}
          />
          <Box
            w={["100%", "", "57%"]}
            maxWidth="2250px"
            ml={["0px", "", "90px"]}
            pl={["5%", "", "0%"]}
          >
            <Box w={["100%", "", "75%"]} mt={["80px", "", "172px"]}>
              <Text
                w="100%"
                fontSize={["35px", "", "47px"]}
                lineHeight={["34px", "", "60px"]}
                fontWeight={["1000", "", "600"]}
                textTransform="capitalize"
              >
                <Text
                  as="span"
                  color="#DF9F71"
                  fontFamily={"MADE Outer Sans Light"}
                  fontStyle="normal"
                  fontWeight={["1000", "", "600"]}
                >
                  {" "}
                  Empower your team to connect with
                </Text>
                <Text
                  as="span"
                  color="#160A01"
                  fontFamily={"MADE Outer Sans Light"}
                  fontWeight="600"
                >
                  {" "}
                  Our
                  <br /> cutting-edge solution{" "}
                </Text>
              </Text>
            </Box>
            <Box w={["100%", "75%"]} maxWidth="2250px" mt="18px">
              <Text
                fontSize={["17px", "", "23px"]}
                fontWeight="300"
                lineHeight="34px"
                textTransform="capitalize"
                fontFamily={"Campton Light"}
                color="#000"
              >
                Transform your team&apos;s communication game with our
                innovative platform. Amplify their outreach, foster stronger
                relationships, and realize newfound success.
              </Text>
            </Box>
            <Box
              w={["90%", "257px"]}
              h={["50px", "40px"]}
              mx={["auto", "0px"]}
              mt={["12px", "24px"]}
            >
              <HardsandsButton
                // @ts-ignore
                textTransform={"uppercase"}
                href={productRoutes.products()}
                text={"START NOW"}
                w={"full"}
                fontFamily={"MADE Outer sans Light"}
                fontSize="16px"
                fontWeight="300"
              />
            </Box>
          </Box>
        </Flex>

        <Container // Why Choose Hardsands?
          as={Stack}
          maxW="full"
          mt="110px"
        >
          <Box
            maxW={["100%", "100%", "707px"]}
            h="34px"
            bg="#FFF"
            mt={["0px", "0px", "110px"]}
            mx="auto"
          >
            <Text
              fontFamily="MADE Outer Sans Light"
              fontSize={["25px", "48px", "48px"]}
              fontWeight="600"
              lineHeight="34px"
              textTransform="capitalize"
              textAlign={["center", "center", "center"]}
              color="#DF9F71"
            >
              Why Choose Hardsands?
            </Text>
          </Box>
          <Image
            maxW="986px"
            mx="auto"
            width={["100%", "75%", "986px"]}
            mt={["27px", "22px", "69px"]}
            height={["220px", "300px", "392px"]}
            src={WhyChooseHardsands.src}
            alt={"whychoosehardsands"}
          />
          <Box
            width={["100%", "100%", "1108px"]}
            height={["100%", "100%", "136px"]}
            mt={["24px", "24px", "49px"]}
            mx="auto"
          >
            <Text
              color="#000"
              fontFamily="Campton Light"
              fontSize={["14px", "19.5px"]}
              fontWeight={["100", "300"]}
              lineHeight="34px"
              textTransform="capitalize"
              textAlign={["center", "center", "inherit"]}
            >
              Our digital business cards offer a modern solution to traditional
              paper cards, with a sleek and minimalist design that&apos;s
              perfect for the digital age. See why our clients love our
              innovative solution and how it can help you stand out in a crowded
              marketplace. Watch the video now to see how our solution can take
              your professional image to the next level.
            </Text>
          </Box>
        </Container>

        <Grid //Want to Maximize Your Team's  Potential
          mt="38px"
        >
          <GridItem colStart={[0, 0, 1]} colEnd={[0, 0, 5]}>
            <Container
              as={Stack}
              mx="auto"
              maxW={["100%", "100%", "70%"]}
              pt={["10%", "10%", "10%"]}
              mr="0px"
            >
              <Text
                fontFamily="MADE Outer Sans Light"
                fontSize={["26px", "48px", "48px"]}
                fontWeight="600"
                lineHeight={["34px", "55px", "55px"]}
                textTransform="capitalize"
                textAlign="center"
                alignItems="flex-end"
                mr="0px"
                bg="#FFF"
              >
                <Text as="span" color="#DF9F71">
                  {`Want to maximize `}
                </Text>
                <Text as="span" color="#120801">
                  {`Your team's `}
                </Text>
                <Text as="span" color="#DF9F71">
                  Potential?
                </Text>
              </Text>
              <Text
                fontFamily="Campton"
                fontSize="15px"
                fontWeight="300"
                lineHeight="30px"
                textTransform="capitalize"
                align="center"
              >
                Fill out the form below and we&apos;ll be in touch
              </Text>
            </Container>

            <Box
              mx={["5%", "5%", "auto"]}
              width={["90%", "90%", "80%"]}
              mr={["0px", "0px", "5"]}
            >
              <Flex
                direction={["column", "row", "row"]}
                mx={["auto", "auto", "auto"]}
                justifyContent="space-between"
              >
                <Box
                  height="21px"
                  width={["100%", "48%", "48%"]}
                  mt={["90px", "90px", "54px"]}
                >
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Name
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    placeholder="Your name"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box
                  width={["100%", "48%", "48%"]}
                  height="21px"
                  mt={["90px", "90px", "54px"]}
                >
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Email
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    placeholder="test@gmail.org"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Flex
                direction={["column", "row", "row"]}
                mx="auto"
                justifyContent="space-between"
              >
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Company
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    placeholder="Your Name"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Company Size
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Flex
                direction={["column", "row", "row"]}
                mx="auto"
                justifyContent="space-between"
              >
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Job Title
                  </Text>
                  <Input
                    height="54px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Phone Number
                  </Text>
                  <Input
                    height="54px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Box mt="104px" w="40%" mb={["0px", "0px", "120px"]}>
                <HardsandsButton
                  // @ts-ignore
                  w={"80%"}
                  href={productRoutes.products()}
                  text={"Submit"}
                  fontFamily={"MADE Outer sans Light"}
                  fontSize="16px"
                  fontWeight="300"
                />
              </Box>
            </Box>
          </GridItem>
          <GridItem colStart={[0, 0, 6]} colEnd={[0, 0, 10]}>
            <Flex
              direction={["column", "column", "row"]}
              height={["100%"]}
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                // mt="42px"
                width={["360px", "550px", "635px"]}
                height={["353px", "450px", "450px"]}
                mt={["0px", "", "70px"]}
                mx="auto"
                src={WantToMaximizeYourTeamsPotential.src}
                alt={"want-to-maximize-your-team's-potential"}
              />
            </Flex>
          </GridItem>
        </Grid>

        <Container //Tailored For You
          as={Stack}
          maxW="full"
          mx="auto"
        >
          <Box
            width={["100%", "100%", "504px"]}
            height={["100%", "100%", "81px"]}
            mt={["40px", "70px", "83px"]}
            mx="auto"
          >
            <Heading
              fontFamily="MADE Outer Sans Light"
              fontSize={["26px", "55px", "55px"]}
              fontWeight={["900", "", "400"]}
              lineHeight="60px"
              textTransform="capitalize"
              color="#DF9F71"
              textAlign="center"
              alignItems="center"
            >
              tailored for you
            </Heading>
          </Box>
          <Box
            width={["100%", "100%", "498px"]}
            height={["100%", "100%", "28px"]}
            mt={["0px", "5px", "0px"]}
            mx="auto"
          >
            <Text
              fontFamily="Campton Light"
              fontSize={["17px", "", "20px"]}
              fontWeight="300"
              lineHeight={["21px", "", "28px"]}
              textTransform="capitalize"
              textAlign="center"
            >
              We offer a range of services to meet your needs
            </Text>
          </Box>
          <Box>
            <Flex
              width="100%"
              direction={["column", "column", "row"]}
              justifyContent="center"
              mt={["20px", "", "7px"]}
              mb={["15px", "173px"]}
            >
              <Flex justifyContent="center">
                <Image
                  width={["265px", "520px", "520px"]}
                  height={["276px", "543px", "543px"]}
                  mt={["0px", "0px", "113px"]}
                  ml={["0px", "0px", "6%"]}
                  src={TailoredForYou.src}
                  alt={"tailoredforyouimage"}
                />
                <Image
                  width={["6px", "9px", "9px"]}
                  height={["130px", "260px", "260px"]}
                  mt={["80px", "200px", "251px"]}
                  ml={["20px", "20px", "33px"]}
                  src={TailoredForYouDivider.src}
                  alt={"tailoredforyoudividerimage"}
                />
                <Image
                  width={["27px", "55px", "55px"]}
                  height={["27px", "55px", "55px"]}
                  mt={["80px", "200px", "319px"]}
                  ml={["30px", "30px", "44px"]}
                  src={TailoredForYouIcon.src}
                  alt={"tailoredforyouiconimage"}
                />
              </Flex>
              <Box
                width={["100%", "100%", "570px"]}
                height={["100%", "100%", "136px"]}
                mt={["20px", "20px", "319px"]}
                ml={["0px", "0px", "60px"]}
              >
                <Heading
                  fontFamily="MADE Outer Sans Light"
                  fontSize={["22px", "32px", "32px"]}
                  fontWeight="300"
                  lineHeight="34px"
                  textTransform="capitalize"
                >
                  Access leads from a single dashboard
                </Heading>
                <Box
                  width={["100%", "100%", "445px"]}
                  height={["100%", "100%", "120px"]}
                >
                  <Text
                    fontFamily="Campton Light"
                    fontSize={["14px", "14px", "17px"]}
                    fontWeight="300"
                    lineHeight="30px"
                    textTransform="capitalize"
                  >
                    Track leads from any source with customizable forms. Manage
                    leads from a single dashboard. Effortlessly communicate with
                    leads to close deals faster.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Flex //IntegrationMadeEasy
            width="full"
            bg="#000"
            pb={["15px", "161px"]}
            direction={["column", "column", "row"]}
            justifyContent="space-around"
          >
            <Flex
              alignContent="center"
              justifyContent="center"
              width="100%"
              mx={["0%", "10%"]}
            >
              <Image
                width="1px"
                height={["163px", "237px", "237px"]}
                src={Divider.src}
                alt={"divider"}
                pt={["15px", "0px"]}
                mt={["42px", "263px"]}
                ml={["15px", "0px"]}
              />
              <Image
                width={["27px", "55px", "55px"]}
                height={["27px", "55px", "55px"]}
                ml={["10px", "", "26px"]}
                mt={["84px", "349px"]}
                bg="black"
                src={IntegrationMadeEasyIcon.src}
                alt={"integrationmadeeasyicon"}
              />
              <Box>
                <Heading
                  color="#FFF"
                  fontFamily="MADE Outer Sans Light"
                  fontSize={["22px", "32px", "32px"]}
                  fontWeight="300"
                  lineHeight="34px"
                  textTransform="capitalize"
                  ml="6%"
                  mt={["84px", "349px"]}
                >
                  Integration made easy
                </Heading>
                <Box
                  width={["100%", "80%", "439px"]}
                  height={["100%", "80%", "120px"]}
                  mt="8px"
                  ml={["0px", "22px"]}
                >
                  <Text
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize={["14px", "17px", "17px"]}
                    fontWeight="300"
                    lineHeight="30px"
                    textTransform="capitalize"
                    textAlign={["center", "center", "inherit"]}
                  >
                    Connect any software to your dashboard without hassle..
                    Automate repetitive tasks and eliminate manual errors..
                    Simplify your workday and focus on what really matters.
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Image
              mr={["0px", "", "90px"]}
              alignSelf={["center", "", "initial"]}
              width={["260px", "520px", "520px"]}
              height={["276", "543px", "543px"]}
              mt="66px"
              src={IntegrationMadeEasyImage.src}
              alt={"integrationmadeeasyimage"}
            />
          </Flex>

          <Flex //EffortlesslyManageYourTeam
            direction={["column", "column", "row"]}
            width={["100%", "100%", "100%"]}
            justifyContent="center"
            mb={["15px", "15px", "184px"]}
            mt={["45px", "15px", "0px"]}
          >
            <Flex justifyContent="center">
              <Image
                width={["265px", "520px", "520px"]}
                height={["276px", "542px", "542px"]}
                ml={["0px", "0px", "6%"]}
                mt={["0px", "0px", "99px"]}
                src={EffortlesslyManageYourTeam.src}
                alt={"effortlessly-manage-your-team"}
              />
              <Image
                width={["6px", "9px", "9px"]}
                height={["130px", "260px", "260px"]}
                mt={["80px", "200px", "251px"]}
                ml={["0px", "0px", "61px"]}
                src={DividerDownwards.src}
                alt={"divider"}
              />
              <Image
                width={["27px", "55px", "55px"]}
                height={["27px", "55px", "55px"]}
                mt={["80px", "200px", "377px"]}
                ml={["15px", "30px", "30px"]}
                src={User.src}
                alt={"user"}
              />
            </Flex>

            <Box
              width={["100%", "100%", "544px"]}
              height={["100%", "100%", "68px"]}
              mt={["20px", "20px", "377px"]}
              ml={["0px", "0px", "60px"]}
            >
              <Heading
                color="#000"
                fontFamily="MADE Outer Sans Light"
                fontSize={["22px", "32px", "32px"]}
                fontWeight="300"
                lineHeight="34px"
                textTransform="capitalize"
              >
                Effortlessly Manage Your Team
              </Heading>
              <Box
                width={["100%", "100%", "439px"]}
                height={["100%", "100%", "190x"]}
                mt="18px"
              >
                <Text
                  color="#000"
                  fontFamily="Campton Light"
                  fontSize={["14px", "", "17px"]}
                  fontWeight="300"
                  lineHeight="30px"
                  textTransform="capitalize"
                >
                  Our Admin Control Panels provide a powerful, user-friendly
                  solution for corporate admins to manage their teams and leads
                  all from one centralized tool.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>

        <Container //Features That Give Us An Edge
          as={Stack}
          maxW={["100%", "100%", "98%"]}
          backgroundImage={FeaturesThatGiveUsAnEdgeBg.src}
          mt="57px"
        >
          <Box
            mt="66px"
            textAlign="center"
            textTransform="capitalize"
            fontWeight="400"
          >
            <Heading
              fontFamily="Made Outer Sans Light"
              fontSize={["25px", "25px", "55px"]}
              lineHeight="34px"
            >
              Features that give us an edge
            </Heading>
            <Text
              fontFamily="Campton"
              fontSize={["14px", "14px", "17px"]}
              lineHeight="30px"
              mt="20px"
            >
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </Box>

          <Flex
            direction={["column", "column", "row"]}
            justify="center"
            mt="85px"
            alignItems="flex-end"
          >
            <Box width={["100%", "100", "36%"]} mx={["0%", "0%", "1%"]}>
              <Box height="571px" bg="white" pt="55px">
                <Img src={Paper.src} alt="paper" mx="auto" />

                <Heading
                  fontFamily="Campton"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="34px"
                  textTransform="capitalize"
                  mt="7%"
                  ml="6%"
                >
                  Enhanced Professionalism
                </Heading>
                <Text
                  width="88%"
                  mt="4%"
                  mx="auto"
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  textAlign="left"
                  mb="12%"
                >
                  Impress potential clients and partners with our sleek and
                  modern gear. This proves your company&apos;s commitment to
                  innovation and technology.
                </Text>
              </Box>
              <Box height="290px" bg="#FEF8F3" mt="41px" />
            </Box>

            <Box
              width={["100%", "100%", "36%"]}
              mx={["0%", "0%", "1%"]}
              mt={["30px", "30px", "0px"]}
            >
              <Box height="428px" bg="white">
                <Flex width="100%" justifyContent="flex-end">
                  <Img
                    // @ts-ignore
                    // align={"right"}
                    src={DataAndSafety.src}
                    alt="data-and-safety"
                  />
                </Flex>
                <Heading
                  fontFamily="Campton"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="34px"
                  textTransform="capitalize"
                  mt="15px"
                  ml="6%"
                >
                  Data and Safety
                </Heading>
                <Text
                  width="88%"
                  mt="4%"
                  mx="auto"
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  textAlign="left"
                  mb="18%"
                >
                  Our technology allows for secure and private transmission of
                  information, minimizing the risk of data breaches.
                </Text>
              </Box>

              <Box height="587px" bg="#DF9F71" mt="50px">
                <Box
                  // @ts-ignore
                  align="right"
                >
                  <Img src={AdminDashboard.src} alt="admin-dashboard" />
                </Box>
                <Heading
                  color="#FFF"
                  fontFamily="Campton"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="34px"
                  textTransform="capitalize"
                  mt="47px"
                  ml="6%"
                >
                  Admin Dashboard
                </Heading>
                <Text
                  width="88%"
                  mt="4%"
                  mx="auto"
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  textAlign="left"
                  mb="18%"
                  color="#FFF"
                >
                  easily add or remove profile pictures, assign action
                  templates, and view performance metrics,
                </Text>
              </Box>
            </Box>

            <Box
              width={["100%", "100%", "36%"]}
              mx={["0%", "0%", "1%"]}
              mt={["30px", "30px", "0px"]}
              pb="56px"
            >
              <Box height={["", "", "571px"]} bg="#FEF8F3">
                <Box
                  // @ts-ignore
                  align="right"
                >
                  <Img src={AnalyzingData.src} alt="analyzing-data" />
                </Box>
                <Heading
                  fontFamily="Campton"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="34px"
                  textTransform="capitalize"
                  ml="6%"
                >
                  Better tracking
                </Heading>
                <Text
                  width="88%"
                  mt="4%"
                  mx="auto"
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  textAlign="left"
                >
                  you can easily track how many times your team members’ cards
                  have been scanned, allowing you to better gauge the
                  effectiveness of your networking efforts and make data-driven
                  decisions.
                </Text>
              </Box>

              <Box height="470px" bg="#202020" mt="50px">
                <Box
                  // @ts-ignore
                  align="right"
                >
                  <Img src={ProfilePage.src} alt="profile-page" />
                </Box>
                <Heading
                  color="#FFF"
                  fontFamily="Campton"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="34px"
                  textTransform="capitalize"
                  ml="6%"
                >
                  Team Management
                </Heading>
                <Text
                  color="#FFF"
                  width="88%"
                  mt="4%"
                  mx="auto"
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  textAlign="left"
                  mb="13%"
                >
                  Monitor individual or team performance metrics with
                  downloadable reports, including top performers, leads
                  generated, and check-in/out times.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>

        <Box //From Start To Finish
          w="full"
          mt="114px"
          pb={["0px", "", "112px"]}
        >
          <Heading
            color="#DF9F71"
            textAlign="center"
            fontFamily="MADE Outer Sans Light"
            fontSize={["25px", "25px", "48px"]}
            fontWeight="500"
            lineHeight={["25px", "", "60px"]}
            textTransform="capitalize"
          >
            From Start to finish: our easy process
            <Text
              color="#000"
              textAlign="center"
              fontFamily="Campton Light"
              fontSize={["14px", "14px", "17px"]}
              fontWeight={["900", "", "300"]}
              lineHeight="28px"
              textTransform="capitalize"
              mt={["10px", "", "0px"]}
            >
              Designed to make it easy for you to get started
            </Text>
          </Heading>

          <Box>
            <Flex
              width="100%"
              maxWidth="2250px"
              px="auto"
              mx="auto"
              mt={["40px", "", "212px"]}
              justifyContent="space-between"
              direction={["column", "column", "row"]}
            >
              <Flex
                width={["100%", "100%", "31%"]}
                mr={["0%", "0%", "2%"]}
                height={["", "", "165px"]}
              >
                <Img width="142px" height="121px" src={HC4.src} />
                <Box width="75%">
                  <Box
                    width="163px"
                    height="104px"
                    backgroundImage={IMG1.src}
                    mt={["0px", "", "-30px"]}
                    position="absolute"
                    zIndex={-1}
                  ></Box>
                  <Text>
                    <Heading
                      fontFamily="MADE Outer Sans Light"
                      fontSize="20px"
                      fontWeight="300"
                      textTransform="capitalize"
                      mt="28px"
                    >
                      Activate your card
                    </Heading>
                    <Text
                      fontFamily="Campton Light"
                      fontSize="10px"
                      fontWeight="400"
                      lineHeight="23px"
                      textTransform="capitalize"
                      mt="8px"
                    >
                      To activate the card on an Android device, turn on NFC in
                      settings and place it near the back camera. For an iPhone,
                      place the card on the front camera and click on the
                      instant notification to fill in activation code and email.
                    </Text>
                  </Text>
                </Box>
              </Flex>

              <Box
                width={["100%", "100%", "31%"]}
                mr={["0%", "05", "2%"]}
                height={["", "", "165px"]}
                mt={["25px", "25px", "0px"]}
              >
                <Flex>
                  <Box width="142px" height="140px">
                    <Img src={HC1.src} />
                  </Box>
                  <Box width="70%">
                    <Box
                      width="203px"
                      height="104px"
                      backgroundImage={IMG2.src}
                      mt={["0px", "", "-30px"]}
                      position="absolute"
                      zIndex={-1}
                    ></Box>
                    <Text>
                      <Heading
                        fontFamily="MADE Outer Sans Light"
                        fontSize="20px"
                        fontWeight="300"
                        textTransform="capitalize"
                        mt="28px"
                      >
                        Create Your Profile
                      </Heading>
                      <Text
                        fontFamily="Campton Light"
                        fontSize="10px"
                        fontWeight="400"
                        lineHeight="23px"
                        textTransform="capitalize"
                        mt="8px"
                      >
                        Once you are logged in, Click on your card. You will see
                        three options available. Click on “Card actions” select
                        your default action, save it, and voila!
                      </Text>
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box
                width={["100%", "100%", "31%"]}
                mr={["0%", "0%", "2%"]}
                height={["", "", "165px"]}
                mt={["25px", "25px", "0px"]}
              >
                <Flex>
                  <Box>
                    <Img width="142px" height="140px" src={HC3.src} />
                  </Box>
                  <Box width="70%">
                    <Box
                      width="209px"
                      height="104px"
                      backgroundImage={IMG3.src}
                      mt={["0px", "", "-30px"]}
                      position="absolute"
                      zIndex={-1}
                    ></Box>
                    <Text>
                      <Heading
                        fontFamily="MADE Outer Sans Light"
                        fontSize="20px"
                        fontWeight="300"
                        textTransform="capitalize"
                        mt="12px"
                      >
                        Share your card
                      </Heading>
                      <Text
                        fontFamily="Campton Light"
                        fontSize="10px"
                        fontWeight="400"
                        lineHeight="23px"
                        textTransform="capitalize"
                        mt="8px"
                      >
                        With a single swipe on any smartphone, you can begin
                        sharing your identity and what you do.
                      </Text>
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Container // WhatOurCustomersAreSaying
          as={Stack}
          maxW="full"
          mt="72px"
          display={["none", "", "contents"]}
        >
          <Heading
            color="#DF9F71"
            fontFamily="MADE Outer Sans Light"
            fontSize={["30px", "", "48px"]}
            fontWeight={["1000", "", "500"]}
            textAlign="center"
            mt={["0px", "", "41px"]}
          >
            What Our Customers Are Saying
          </Heading>
          <Flex width="full" justifyContent="center">
            <Box mr={["0px", "", "77px"]} mt="256px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollLeft(346)}
                bg="white"
              >
                <Img
                  width={["35px", "", "39px"]}
                  height={["35px", "", "40px"]}
                  src={ACL.src}
                />
              </Button>
            </Box>
            <Flex
              width={["90%", "", "70%"]}
              maxWidth="1040px"
              justifyContent="space-between"
              overflow="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              ref={boxRef}
              scrollBehavior="smooth"
            >
              {[
                {
                  img: Customer1.src,
                },
                {
                  img: Customer2.src,
                },
                {
                  img: Customer3.src,
                },
                {
                  img: Customer1.src,
                },
                {
                  img: Customer2.src,
                },
                {
                  img: Customer3.src,
                },
              ].map((element, index) => {
                return (
                  <Box
                    key={index}
                    minWidth={index === boxIndex ? boxWidth : "249px"}
                    height={index === boxIndex ? boxHeight : "245px"}
                    mt={index === boxIndex ? boxMt : "164px"}
                    mr="77px"
                    bg="#FBECDE"
                  >
                    <Img
                      mt={index === boxIndex ? imgMt : "-39px"}
                      mx="auto"
                      w={index === boxIndex ? imgWidth : "66px"}
                      h={index === boxIndex ? imgHeight : "66px"}
                      src={element.img}
                    />
                    <Box
                      width="90%"
                      mx="auto"
                      mt={index === boxIndex ? textMt : "6px"}
                    >
                      <Text
                        color="#000"
                        fontFamily="Campton Light"
                        fontSize={index === boxIndex ? textFontSize : "10px"}
                        fontWeight="400"
                        lineHeight="22px"
                        textAlign="center"
                      >
                        We had to print new cards every time one of our
                        employees got a promotion, and it was simply wasteful.
                        With Hardsands, we just update the info on the portal.
                        Much easier and less expensive than ordering a new
                        batch. Plus, our customers enjoy the first tap. There is
                        a significant wow factor.
                      </Text>
                    </Box>
                    <Text
                      color="#DF9F71"
                      fontFamily="Campton Light"
                      fontSize={index === boxIndex ? textFontSize : "11px"}
                      fontWeight="400"
                      textAlign="center"
                      mt={index === boxIndex ? dTextMt : "12px"}
                    >
                      DAVID BASSEY
                    </Text>
                    <Box>
                      <Flex justifyContent="center" mt="8px">
                        <Img src={StarFill.src} />
                        <Img src={StarFill.src} />
                        <Img src={StarFill.src} />
                        <Img src={StarFill.src} />
                        <Img src={StarFill.src} />
                      </Flex>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
            <Box mt="256px" ml={["0px", "", "77px"]}>
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollRight(346)}
                bg="white"
              >
                <Img
                  width={["35px", "", "39px"]}
                  height={["35px", "", "40px"]}
                  src={ACR.src}
                />
              </Button>
            </Box>
          </Flex>
        </Container>

        <Container
          width="50%"
          alignContent="center"
          display={["contents", "", "none"]}
        >
          <WhatOurCustomersAreSaying />
        </Container>

        <Container //Landmarks
          as={Stack}
          maxW="96%"
          mt={["50px", "", "100px"]}
          bg="#FEF8F3"
          py="47px"
        >
          <Flex
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            mx="auto"
            px={["1%", "", "5%"]}
            height={["", "", "220px"]}
          >
            <Box height={["", "", "209px"]} w={["100%", "", "22%"]}>
              <Image
                src={Worldwide.src}
                alignSelf={["center", "", "inherit"]}
              />
              <Box width={["100%", "", "80%"]}>
                <Text
                  color="rgba(0, 0, 0, 0.60)"
                  fontFamily="Campton Light"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="22px"
                  textTransform="capitalize"
                  mt="19px"
                >
                  we have shipped our cards to 20+ Countries around the world
                </Text>
              </Box>
              <Box>
                <Text
                  color="#000"
                  fontFamily="MADE Outer Sans Outline Bold"
                  fontSize={["80px", "70px", "80px"]}
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  10+
                </Text>
              </Box>
            </Box>
            <Box
              width={["96%", "", "1px"]}
              height={["1px", "", "168px"]}
              mt={["25px", "", "0px"]}
              bgColor="#D9D9D9"
            />
            <Box
              //@ts-ignore
              align="left"
              height={["", "", "209px"]}
              w={["100%", "", "22%"]}
              mt={["25px", "", "0px"]}
            >
              <Img src={ProfileCircle.src} />
              <Box width={["100%", "", "75%"]}>
                <Text
                  color="rgba(0, 0, 0, 0.60)"
                  fontFamily="Campton Light"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="22px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  clients have received their cards and started sharing it
                </Text>
              </Box>
              <Box>
                <Text
                  color="#000"
                  fontFamily="MADE Outer Sans Outline Bold"
                  fontSize={["80px", "70px", "80px"]}
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  3K+
                </Text>
              </Box>
            </Box>
            <Box
              width={["96%", "", "1px"]}
              height={["1px", "", "168px"]}
              mt={["25px", "", "0px"]}
              bgColor="#D9D9D9"
            />
            <Box
              //@ts-ignore
              align="left"
              height={["", "", "209px"]}
              w={["100%", "", "22%"]}
              mt={["25px", "", "0px"]}
            >
              <Box>
                <Img src={PersonalCard.src} />
              </Box>
              <Box width={["100%", "", "80%"]}>
                <Text
                  color="rgba(0, 0, 0, 0.60)"
                  fontFamily="Campton Light"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="22px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  The number of times they have saved a new default action
                </Text>
              </Box>
              <Box>
                <Text
                  color="#000"
                  fontFamily="MADE Outer Sans Outline Bold"
                  fontSize={["80px", "", "73px"]}
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  30K+
                </Text>
              </Box>
            </Box>
            <Box
              width={["96%", "", "1px"]}
              height={["1px", "", "168px"]}
              mt={["25px", "", "0px"]}
              bgColor="#D9D9D9"
            />
            <Box
              //@ts-ignore
              height={["", "", "209px"]}
              w={["100%", "", "22%"]}
              mt={["25px", "", "0px"]}
            >
              <Box
                //@ts-ignore
                align="left"
              >
                <Img src={ProfileUser2.src} />
              </Box>
              <Box width="100%">
                <Text
                  color="rgba(0, 0, 0, 0.60)"
                  fontFamily="Campton Light"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="22px"
                  textTransform="capitalize"
                  mt="17px"
                  pl="0px"
                >
                  The number of times our clients have shared with their
                  connections
                </Text>
              </Box>
              <Box
                //@ts-ignore
                align="left"
              >
                <Text
                  color="#000"
                  fontFamily="MADE Outer Sans Outline Bold"
                  fontSize={["80px", "70px", "80px"]}
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  5k+
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>

        <Container //Trust Us To Deliver
          as={Stack}
          maxW="full"
          mt={["50px", "", "119px"]}
        >
          <Text
            fontFamily="MADE Outer Sans Light"
            fontSize={["34px", "", "48px"]}
            fontWeight={["1000", "", "500"]}
            textAlign="center"
            mt={["0px", "", "69px"]}
          >
            <Text as="span" color="#DF9F71">
              {"Trust Us To "}
            </Text>
            <Text as="span" color="#000">
              Deliver
            </Text>
          </Text>
          <Box width={["100%", "", "63%"]} mx="auto">
            <Text
              fontFamily="Campton Light"
              fontSize={["14px", "", "15px"]}
              fontWeight="300"
              textAlign="center"
              lineHeight="30px"
              textTransform="capitalize"
            >
              See our work in action. Browse through our collection of
              beautifully designed digital business cards for our satisfied
              clients.
            </Text>
          </Box>

          <Flex mt={["50px", "", "110px"]} width="full" justifyContent="center">
            <Box mt="98px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => cardScroll(-386)}
                bg="white"
                cursor="default"
              >
                <Img width="39px" height="40px" src={ACL.src} />
              </Button>
            </Box>
            <Flex
              width={["70%", "", "81%"]}
              pl="2%"
              justifyContent="space-between"
              overflow="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              ref={cardRef}
              scrollBehavior="smooth"
            >
              {[
                {
                  img: TUTD1.src,
                },
                {
                  img: TUTD2.src,
                },
                {
                  img: TUTD3.src,
                },
                {
                  img: TUTD1.src,
                },
                {
                  img: TUTD2.src,
                },
                {
                  img: TUTD3.src,
                },
              ].map((item, index) => {
                return (
                  <Img
                    key={index}
                    width="356px"
                    height="235px"
                    mr="2%"
                    src={item.img}
                  />
                );
              })}
            </Flex>
            <Box mt="98px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => cardScroll(386)}
                bg="none"
                cursor="default"
              >
                <Img width="39px" height="40px" src={ACR.src} />
              </Button>
            </Box>
          </Flex>

          <Box
            w={["96%", "", "258px"]}
            h="63px"
            mt="77px"
            mb={["30px", "", "56px"]}
            mx="auto"
          >
            <HardsandsButton
              // @ts-ignore
              textTransform={"uppercase"}
              href={productRoutes.products()}
              text={"START NOW"}
              w={"full"}
              fontFamily={"MADE Outer sans Light"}
              fontSize="16px"
              fontWeight="300"
            />
          </Box>
        </Container>

        <Container //Upgrading Your Team...
          as={Stack}
          maxW="full"
          mt={["50px", "", "81px"]}
          bg="#FEF8F3"
        >
          <Grid //
            mb={["50px", "", "186px"]}
          >
            <GridItem colStart={[0, 0, 1]} colEnd={[0, 0, 5]}>
              <Container
                alignItems={["center", "", "inherit"]}
                as={Stack}
                mx="auto"
                maxW={["100%", "", "80%"]}
                mt={["30px", "", "215px"]}
                mr="0px"
              >
                <Text
                  width="100%"
                  fontFamily="MADE Outer Sans Light"
                  fontSize={["34px", "", "48px"]}
                  fontWeight={["900", "", "600"]}
                  lineHeight="55px"
                  textTransform="capitalize"
                  textAlign="center"
                  mr="0px"
                >
                  <Text as="span" color="#DF9F71">
                    {`Upgrading `}
                  </Text>
                  <Text as="span" color="#000">
                    {`Your team `}
                  </Text>
                  <Text as="span" color="#DF9F71">
                    Has never been this easy
                  </Text>
                </Text>
                <Text
                  fontFamily="Campton Light"
                  fontSize="15px"
                  fontWeight="300"
                  lineHeight="30px"
                  textTransform="capitalize"
                  textAlign="center"
                  mt="3%"
                  width="89%"
                  mx="auto"
                >
                  Unlock the power of networking with our innovative digital
                  solution. Your team will love the seamless user experience and
                  cutting-edge features, while you&apos;ll appreciate the
                  measurable results and competitive edge it brings.
                </Text>
              </Container>
              <Box mt="27px" w={["100%", "", "40%"]} ml={["4%", "", "48%"]}>
                <HardsandsButton
                  // @ts-ignore
                  w={["90%", "", "70%"]}
                  href={productRoutes.products()}
                  text={"GET STARTED"}
                  fontFamily={"MADE Outer sans Light"}
                  fontSize="16px"
                  fontWeight="300"
                  bg="#000"
                  color="#FFF"
                />
              </Box>
            </GridItem>
            <GridItem colStart={[0, 0, 6]} colEnd={[0, 0, 10]}>
              <Image
                // my="auto"
                width={["360px", "450px", "635px"]}
                height={["353px", "370px", "450px"]}
                mt={["0px", "", "70px"]}
                mx="auto"
                src={UpgradingYourTeamImage.src}
                alt={"upgrading-your-team-image"}
              />
            </GridItem>
          </Grid>
        </Container>

        <Container //FAQs
          as={Stack}
          maxW="full"
          bg="#000"
          mt={["50px", "", "81px"]}
        >
          <Text
            color="#FFF"
            fontFamily="MADE Outer Sans Light"
            fontSize="16px"
            fontWeight="300"
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
            mt={["50px", "", "113px"]}
          >
            FAQs
          </Text>
          <Heading
            color="#DF9F71"
            fontFamily="MADE Outer Sans Light"
            fontSize={["30px", "", "35px"]}
            fontWeight={["1000", "", "300"]}
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
          >
            Frequently Asked Questions
          </Heading>
          <Text
            color="rgba(255, 255, 255, 0.72)"
            fontFamily="Campton Light"
            fontSize={["16px", "", "20px"]}
            fontWeight="400"
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
          >
            have questions? We&apos;’re here to help
          </Text>
          <Flex
            mx="auto"
            width={["70%", "17%", "17%"]}
            alignItems={"center"}
            borderColor="0.7px solid #FFF"
            borderWidth={"1px"}
            px="1%"
          >
            <Box>
              <Img src={SearchIconW.src} w="20px" h="20px" />
            </Box>
            <Input
              placeholder="Search"
              color="rgba(255, 255, 255, 0.55)"
              border="none"
              focusBorderColor="transparent"
              pl="5%"
            />
          </Flex>

          <VStack>
            <Box
              width={["100%", "", "80%"]}
              mt={["50px", "", "133px"]}
              alignContent="space-between"
            >
              {[
                {
                  text: "What is Hardsands Card",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "How do hardsands cards and Epoxy work?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "Where should I place my hardsand Epoxy?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "Can I get a hardsands card with my own logo/branding?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "What surfaces may hardsand Epoxy stick to?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "Is there a monthly fee for using hardsands card or hardsands Epoxy?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
                {
                  text: "Is it necessary for the receiver to use a hardsand product or an app to receive my info?",
                  resp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,",
                  img: HorizontalDivider.src,
                },
              ].map((element, index) => {
                return (
                  <VStack key={index}>
                    <Flex
                      width="100%"
                      mt="23.5px"
                      justifyContent="space-between"
                    >
                      <Text width={["90%", "", ""]}>
                        <Heading
                          color="#FFF"
                          fontFamily="Campton Light"
                          fontSize={["18px", "", "20px"]}
                          fontWeight="500"
                          lineHeight="34px"
                          textTransform="capitalize"
                        >
                          {element.text}
                        </Heading>
                        {activeIndex !== index ? (
                          ""
                        ) : (
                          <Text
                            width={["80%", "", "69%"]}
                            color="rgba(255, 255, 255, 0.69)"
                            fontFamily="Campton Light"
                            fontSize={["13px", "", "15px"]}
                            fontWeight="400"
                            lineHeight="23px"
                            textTransform="capitalize"
                          >
                            {element.resp}
                          </Text>
                        )}
                      </Text>

                      <Button
                        _hover={{ bg: "none" }}
                        onClick={
                          activeIndex !== index
                            ? () => setActiveIndex(index)
                            : () => setActiveIndex(-1)
                        }
                        bg=""
                      >
                        <Img
                          width="25px"
                          height="25px"
                          src={
                            activeIndex !== index
                              ? CircleUnclicked.src
                              : CircleClicked.src
                          }
                        />
                      </Button>
                    </Flex>
                    <Img mt="9px" src={element.img} />
                  </VStack>
                );
              })}
            </Box>
            <Box
              mt={["50px", "", "99px"]}
              mb="71px"
              width={["100%", "", "80%"]}
              background="rgba(255, 255, 255, 0.07)"
              py="20px"
            >
              <Flex
                direction={["column", "column", "row"]}
                width="100%"
                justifyContent="space-around"
              >
                <Text width={["100%", "", "75%"]}>
                  <Heading
                    color="#DF9F71"
                    fontFamily="Campton Light"
                    fontSize={["18px", "", "20px"]}
                    fontWeight="500"
                    lineHeight="34px"
                    textAlign={["center", "center", "inherit"]}
                    textTransform="capitalize"
                  >
                    Still have questions?
                  </Heading>
                  <Text
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize={["13px", "", "20px"]}
                    fontWeight="400"
                    lineHeight="34px"
                    textTransform="capitalize"
                    textAlign={["center", "center", "inherit"]}
                  >
                    Can&apos;'t find the answers you’re looking for? Contact us
                    via our Hardsands Technology Customer Support
                  </Text>
                </Text>
                <Box w={["100%", "", "17%"]}>
                  <HardsandsButton
                    // @ts-ignore
                    w={"100%"}
                    // href={productRoutes.products()}
                    text={"Get in touch"}
                    fontFamily={"MADE Outer sans Light"}
                    fontSize="14px"
                    fontWeight="300"
                    color="#FFF"
                    bg="#DF9F71"
                    mt="5%"
                  />
                </Box>
              </Flex>
            </Box>
          </VStack>
        </Container>

        <Grid //Interested in Maximizing Your Team's Potential?
          mb="133px"
        >
          <GridItem colStart={[0, 0, 1]} colEnd={[0, 0, 5]}>
            <Container
              as={Stack}
              maxW={["100%", "100%", "85%"]}
              pt={["20%", "", "140px"]}
              mr="0px"
            >
              <Text
                width="100%"
                fontFamily="MADE Outer Sans Light"
                fontSize={["26px", "48px", "48px"]}
                fontWeight="600"
                lineHeight={["34px", "55px", "55px"]}
                textTransform="capitalize"
                textAlign="center"
                alignItems={["center", "", "flex-end"]}
                mr="0px"
                bg="#FFF"
              >
                <Text as="span" color="#DF9F71">
                  {`Interested in maximizing `}
                </Text>
                <Text as="span" color="#120801">
                  {`Your team's `}
                </Text>
                <Text as="span" color="#DF9F71">
                  Potential?
                </Text>
              </Text>
              <Text
                fontFamily="Campton Light"
                fontSize="15px"
                fontWeight="300"
                lineHeight="30px"
                textTransform="capitalize"
                align="center"
              >
                Fill out the form below and we&apos;ll be in touch
              </Text>
            </Container>
            <Box
              mx={["5%", "5%", "auto"]}
              width={["90%", "90%", "80%"]}
              mr={["0px", "0px", "5"]}
            >
              <Flex
                direction={["column", "row", "row"]}
                mx={["auto", "auto", "auto"]}
                justifyContent="space-between"
              >
                <Box
                  height="21px"
                  width={["100%", "48%", "48%"]}
                  mt={["90px", "90px", "54px"]}
                >
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Name
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    placeholder="Your name"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box
                  width={["100%", "48%", "48%"]}
                  height="21px"
                  mt={["90px", "90px", "54px"]}
                >
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Email
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    placeholder="test@gmail.org"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Flex
                direction={["column", "row", "row"]}
                mx="auto"
                justifyContent="space-between"
              >
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Company
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    placeholder="Your Name"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Company Size
                  </Text>
                  <Input
                    height="54px"
                    mt="11px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Flex
                direction={["column", "row", "row"]}
                mx="auto"
                justifyContent="space-between"
              >
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Job Title
                  </Text>
                  <Input
                    height="54px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
                <Box width={["100%", "48%", "48%"]} height="21px" mt="102px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="18px"
                    fontWeight="300"
                    color="#000"
                  >
                    Phone Number
                  </Text>
                  <Input
                    height="54px"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.40)"
                    focusBorderColor="rgba(0, 0, 0, 0.40)"
                  ></Input>
                </Box>
              </Flex>
              <Box mt="104px" w="40%" mb={["0px", "0px", "120px"]}>
                <HardsandsButton
                  // @ts-ignore
                  w={"80%"}
                  href={productRoutes.products()}
                  text={"Submit"}
                  fontFamily={"MADE Outer sans Light"}
                  fontSize="16px"
                  fontWeight="300"
                />
              </Box>
            </Box>
          </GridItem>

          <GridItem colStart={[0, 0, 6]} colEnd={[0, 0, 10]}>
            <Flex
              direction={["column", "column", "row"]}
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                width={["360px", "450px", "635px"]}
                height={["353px", "370px", "450px"]}
                mt={["0px", "", "70px"]}
                mx="auto"
                src={MaximizingYourTeamImage.src}
                alt={"maximize-your-team-potential"}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </WithLayout>
  );
};
export default Corporate;
