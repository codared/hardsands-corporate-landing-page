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

const Corporate = () => {
  const [boxIndex, setBoxIndex] = useState(1);

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
        {/* <Flex //NavBAr
          justifyContent="space-between"
          p={6}
          w="full"
        >
          <Box>
            <HardsandLink href="/">
              <Flex align="center">
                <Image
                  w="46px"
                  h="46px"
                  src={hardsandsIconLogo.src}
                  alt="hardsands Icon logo"
                  display={["none", "none", "flex"]}
                />
                <Image
                  w="168px"
                  h="15px"
                  ml="11px"
                  src={HardsandLogo.src}
                  alt="hardsands Icon logo"
                  display={["none", "none", "flex"]}
                />
              </Flex>
            </HardsandLink>
          </Box>
          <Flex my="auto">
          
            <Box mr={12}>
              <HardsandLink href={"/collections"}>
                <Text
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  color="rgba(0, 0, 0, 0.81)"
                >
                  Products
                </Text>
              </HardsandLink>
            </Box>
            <Box mr={12}>
              <HardsandLink href={"/articles/how-to-use"}>
                <Text
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  color="rgba(0, 0, 0, 0.81)"
                >
                  How To Use
                </Text>
              </HardsandLink>
            </Box>
            <Box mr={12}>
              <HardsandLink href={"/articles"}>
                <Text
                  fontFamily="Campton Light"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="34px"
                  textTransform="capitalize"
                  color="rgba(0, 0, 0, 0.81)"
                >
                  Blog
                </Text>
              </HardsandLink>
            </Box>
            <Box mr={12}>
              <Text
                fontFamily="Campton Light"
                fontSize="18px"
                fontWeight="400"
                lineHeight="34px"
                textTransform="capitalize"
                color="rgba(0, 0, 0, 0.81)"
              >
                Pricing
              </Text>
            </Box>
          </Flex>
          <Flex my="auto">
            <Box mx={8}>
              <Text
                fontFamily="Campton"
                fontSize="18px"
                fontWeight="500"
                lineHeight="34px"
                textTransform="capitalize"
                color="#000"
              >
                USD
              </Text>
            </Box>
            <Box mx={8}>
              <Text
                fontFamily="Campton"
                fontSize="20px"
                fontWeight="400"
                lineHeight="34px"
                textTransform="capitalize"
                color="#000"
              >
                Amount
              </Text>
            </Box>
          </Flex>
        </Flex> */}

        <Box
          w="71%"
          maxWidth="2150px"
          h="678px"
          bg="#FEF8F3"
          mt="70px"
          ml="2%"
          position="absolute"
          zIndex={-400}
        />

        <Flex // Empower Your Team
          alignItems="center"
          justifyContent="center"
          w="100%"
          ml="125px"
        >
          <Box w="530px" h="635px" pt="7px">
            <Image
              src={HappyConfidentProfessionalTeam.src}
              alt={"happyconfidentprofessionalimage"}
            />
          </Box>
          <Box w="57%" maxWidth="2250px" ml="90px">
            <Box w="75%" mt="172px">
              <Text
                w="100%"
                fontSize="47px"
                lineHeight="60px"
                textTransform="capitalize"
              >
                <Text
                  as="span"
                  color="#DF9F71"
                  fontFamily={"MADE Outer Sans Light"}
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="60px"
                >
                  {" "}
                  Empower your team to connect with
                </Text>
                <Text
                  as="span"
                  color="#160A01"
                  fontFamily={"MADE Outer Sans Light"}
                  fontWeight="600"
                  lineHeight="60px"
                >
                  {" "}
                  Our
                  <br /> cutting-edge solution{" "}
                </Text>
              </Text>
            </Box>
            <Box w="75%" maxWidth="2250px" mt="18px">
              <Text
                fontSize="23px"
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
            <Box w="30%" h="40px" mt="33px">
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
          <Box maxW="707px" h="34px" bg="white" mt="110px" mx="auto">
            <Text
              fontFamily="MADE Outer Sans Light"
              fontSize="48px"
              fontWeight="600"
              lineHeight="34px"
              textTransform="capitalize"
              color="#DF9F71"
            >
              Why Choose Hardsands?
            </Text>
          </Box>
          <Container as={Stack} maxW="986px" height="392px" mt="69px" mx="auto">
            <Image src={WhyChooseHardsands.src} alt={"whychoosehardsands"} />
          </Container>
          <Box width="1108px" height="136px" mt="49px" mx="auto">
            <Text
              color="#000"
              fontFamily="Campton Light"
              fontSize="19.5px"
              fontWeight="300"
              lineHeight="34px"
              textTransform="capitalize"
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
          <GridItem colSpan={5}>
            <Container as={Stack} mx="auto" maxW="70%" pt="10%" mr="0px">
              <Text
                fontFamily="MADE Outer Sans Light"
                fontSize="48px"
                fontWeight="600"
                lineHeight="55px"
                textTransform="capitalize"
                textAlign="center"
                alignItems="flex-end"
                mr="0px"
                bg="white"
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

            <Box mx="auto" width="80%" mr="5">
              <Flex mx="auto" justifyContent="space-between">
                <Box height="21px" width="48%" mt="54px">
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
                  >
                    {/* <Box height="21px" pl="23px" mt="17px" mb="16px"> */}
                    {/* <Text
                  fontFamily="Campton Light"
                  fontWeight="300"
                  color="rgba(0, 0, 0, 0.33)"
                >
                  Your name
                </Text> */}
                    {/* </Box> */}
                  </Input>
                </Box>
                {/* <Input placeholder="Your name" /> */}
                <Box height="21px" mt="54px" width="48%">
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
                  >
                    {/* <Box height="21px" pl="23px" mt="17px" mb="16px">
                  <Text
                    fontFamily="Campton Light"
                    fontWeight="300"
                    color="rgba(0, 0, 0, 0.33)"
                  >
                    test@gmail.org
                  </Text>
                </Box> */}
                  </Input>
                </Box>
              </Flex>
              <Flex mx="auto" justifyContent="space-between">
                <Box width="48%" height="21px" mt="102px">
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
                  >
                    {/* <Box width="91px" height="21px" ml="23px" mt="17px" mb="16px">
                  <Text
                    fontFamily="Campton Light"
                    fontWeight="300"
                    align="center"
                    color="rgba(0, 0, 0, 0.33)"
                  >
                    Your Name
                  </Text>
                </Box> */}
                  </Input>
                </Box>
                <Box width="48%" height="21px" mt="102px">
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
              <Flex mx="auto" justifyContent="space-between">
                <Box width="48%" height="21px" mt="102px">
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
                <Box width="48%" height="21px" mt="102px">
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
              <Box mt="104px" w="40%" mb="120px">
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
          <GridItem colStart={6} colEnd={10}>
            <Flex
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                // mt="42px"
                width="601px"
                height="527px"
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
          <Box width="504px" height="81px" mt="83px" mx="auto">
            <Heading
              fontFamily="MADE Outer Sans Light"
              fontSize="55px"
              fontWeight="400"
              lineHeight="60px"
              textTransform="capitalize"
              color="#DF9F71"
              textAlign="center"
              alignItems="center"
            >
              tailored for you
            </Heading>
          </Box>
          <Box width="498px" height="28px" mx="auto">
            <Text
              fontFamily="Campton Light"
              fontSize="20px"
              fontWeight="300"
              lineHeight="28px"
              textTransform="capitalize"
              textAlign="center"
            >
              We offer a range of services to meet your needs
            </Text>
          </Box>
          <Box>
            <Flex justifyContent="center" mt="7px" mb="173px">
              <Box width="520px" height="543px" mt="113px">
                <Image src={TailoredForYou.src} alt={"tailoredforyouimage"} />
              </Box>
              <Box width="9px" height="260px" mt="251px">
                <Image
                  src={TailoredForYouDivider.src}
                  alt={"tailoredforyoudividerimage"}
                />
              </Box>
              <Box width="55px" height="55px" mt="319px" ml="44px">
                <Image
                  src={TailoredForYouIcon.src}
                  alt={"tailoredforyouiconimage"}
                />
              </Box>
              <Box width="570px" height="136px" mt="319px" ml="21px">
                <Heading
                  fontFamily="MADE Outer Sans Light"
                  fontSize="32px"
                  fontWeight="300"
                  lineHeight="34px"
                  textTransform="capitalize"
                >
                  Access leads from a single dashboard
                </Heading>
                <Box width="445px" height="120px">
                  <Text
                    fontFamily="Campton Light"
                    fontSize="17px"
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

          <Box
            width="full"
            bg="#000"
            pb="161px"
            //IntegrationMadeEasy
          >
            <Flex
              // width="100%"
              // px="auto"
              mx="10%"
              alignContent="center"
              justifyContent="center"
            >
              <Box mt="263px">
                <Flex width="100%">
                  <Box width="1px" height="237px" bg="#FFF">
                    <Image src={Divider.src} alt={"divider"} />
                  </Box>
                  <Box
                    width="55px"
                    height="55px"
                    ml="26px"
                    mt="86px"
                    bg="black"
                  >
                    <Image
                      src={IntegrationMadeEasyIcon.src}
                      alt={"integrationmadeeasyicon"}
                    />
                  </Box>
                  <Box>
                    <Heading
                      color="#FFF"
                      fontFamily="MADE Outer Sans Light"
                      fontSize="32px"
                      fontWeight="300"
                      lineHeight="34px"
                      textTransform="capitalize"
                      ml="6%"
                      mt="86px"
                    >
                      Integration made easy
                    </Heading>
                    <Box width="439px" height="120px" mt="8px" ml="22px">
                      <Text
                        color="#FFF"
                        fontFamily="Campton Light"
                        fontSize="17px"
                        fontWeight="300"
                        lineHeight="30px"
                        textTransform="capitalize"
                      >
                        Connect any software to your dashboard without hassle..
                        Automate repetitive tasks and eliminate manual errors..
                        Simplify your workday and focus on what really matters.
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box width="520px" height="543px" ml="167px" mt="66px">
                <Flex
                  width="100%"
                  height="100%"
                  justifyItems="center"
                  alignItems="flex-end"
                >
                  <Image
                    src={IntegrationMadeEasyImage.src}
                    alt={"integrationmadeeasyimage"}
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Flex width="100%" justifyContent="center" mb="184px">
            <Box width="520px" height="542px" ml="8%" mt="99px">
              <Image
                src={EffortlesslyManageYourTeam.src}
                alt={"effortlessly-manage-your-team"}
              />
            </Box>
            <Box width="9px" height="261px" mt="245px" ml="61px">
              <Image src={DividerDownwards.src} alt={"divider"} />
            </Box>
            <Box width="55px" height="55px" mt="377px" ml="30px">
              <Image src={User.src} alt={"user"} />
            </Box>
            <Box width="544px" height="68px" mt="377px" ml="22px">
              <Heading
                color="#000"
                fontFamily="MADE Outer Sans Light"
                fontSize="32px"
                fontWeight="300"
                lineHeight="34px"
                textTransform="capitalize"
              >
                Effortlessly Manage Your Team
              </Heading>
              <Box width="439px" height="90px" mt="18px">
                <Text
                  color="#000"
                  fontFamily="Campton Light"
                  fontSize="17px"
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
          maxW="98%"
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
              fontSize="55px"
              lineHeight="34px"
            >
              Features that give us an edge
            </Heading>
            <Text
              fontFamily="Campton"
              fontSize="17px"
              lineHeight="30px"
              mt="20px"
            >
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </Box>

          <Flex justify="center" mt="85px" alignItems="flex-end">
            <Box width="36%" mx="1%">
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

            <Box width="36%" mx="1%">
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
                  fontFamily="Campton  "
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

            <Box width="36%" mx="1%" pb="56px">
              <Box height="571px" bg="#FEF8F3">
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
                  // mb="13%"
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
          pb="112px"
        >
          <Heading
            color="#DF9F71"
            textAlign="center"
            fontFamily="MADE Outer Sans Light"
            fontSize="48px"
            fontWeight="500"
            lineHeight="60px"
            textTransform="capitalize"
          >
            From Start to finish: our easy process
            <Text
              color="#000"
              textAlign="center"
              fontFamily="Campton Light"
              fontSize="20px"
              fontWeight="300"
              lineHeight="28px"
              textTransform="capitalize"
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
              mt="212px"
              justifyContent="space-between"
            >
              <Box width="31%" mr="2%" height="165px">
                <Flex>
                  <Img width="142px" height="121px" src={HC4.src} />
                  <Box width="75%">
                    <Box
                      width="163px"
                      height="104px"
                      backgroundImage={IMG1.src}
                      mt="-14px"
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
                        To activate the card on an Android device, turn on NFC
                        in settings and place it near the back camera. For an
                        iPhone, place the card on the front camera and click on
                        the instant notification to fill in activation code and
                        email.
                      </Text>
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box width="31%" mr="2%" height="165px">
                <Flex>
                  <Box width="142px" height="140px">
                    <Img src={HC1.src} />
                  </Box>
                  <Box width="70%">
                    <Box
                      width="203px"
                      height="104px"
                      backgroundImage={IMG2.src}
                      mt="-30px"
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
              <Box width="30%" height="165px">
                <Flex>
                  <Box>
                    <Img width="142px" height="140px" src={HC3.src} />
                  </Box>
                  <Box width="70%">
                    <Box
                      width="209px"
                      height="104px"
                      backgroundImage={IMG3.src}
                      mt="-30px"
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

        <Container //What Our Customers Are Saying
          as={Stack}
          maxW="full"
          mt="72px"
        >
          <Heading
            color="#DF9F71"
            fontFamily="MADE Outer Sans Light"
            fontSize="48px"
            fontWeight="500"
            textAlign="center"
            mt="41px"
          >
            What Our Customers Are Saying
          </Heading>
          <Flex width="full" justifyContent="center">
            <Box mr="77px" mt="256px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollLeft(346)}
                bg="white"
              >
                <Img width="39px" height="40px" src={ACL.src} />
              </Button>
            </Box>
            <Flex
              width="70%"
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
            <Box mt="256px" ml="77px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollRight(346)}
                bg="white"
              >
                <Img width="39px" height="40px" src={ACR.src} />
              </Button>
            </Box>
          </Flex>
        </Container>

        <Container //Landmarks
          as={Stack}
          maxW="96%"
          mt="100px"
          bg="#FEF8F3"
          py="47px"
        >
          <Flex justifyContent="space-between" px="5%" height="220px">
            <Box height="209px" w="22%">
              <Box>
                <Img src={Worldwide.src} />
              </Box>
              <Box width="80%">
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
                  fontSize="80px"
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  10+
                </Text>
              </Box>
            </Box>
            <Box width="1px" height="186px" bgColor="#D9D9D9" />
            <Box
              //@ts-ignore
              align="left"
              height="209px"
              w="20%"
            >
              <Box>
                <Img src={ProfileCircle.src} />
              </Box>
              <Box width="75%">
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
                  fontSize="80px"
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  3K+
                </Text>
              </Box>
            </Box>
            <Box width="1px" height="186px" bgColor="#D9D9D9" />
            <Box
              //@ts-ignore
              align="left"
              height="209px"
              w="22%"
            >
              <Box>
                <Img src={PersonalCard.src} />
              </Box>
              <Box width="80%">
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
                  fontSize="80px"
                  fontWeight="500"
                  lineHeight="55px"
                  textTransform="capitalize"
                  mt="17px"
                >
                  30K+
                </Text>
              </Box>
            </Box>
            <Box width="1px" height="186px" bgColor="#D9D9D9" />
            <Box
              //@ts-ignore
              width="19%"
              height="209px"
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
                  fontSize="80px"
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
          mt="119px"
        >
          <Text
            fontFamily="MADE Outer Sans Light"
            fontSize="48px"
            fontWeight="500"
            textAlign="center"
            mt="69px"
          >
            <Text as="span" color="#DF9F71">
              {"Trust Us To "}
            </Text>
            <Text as="span" color="#000">
              Deliver
            </Text>
          </Text>
          <Box width="63%" mx="auto">
            <Text
              fontFamily="Campton Light"
              fontSize="15px"
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

          <Flex mt="110px" width="full" justifyContent="center">
            <Box mt="98px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => cardScroll(-386)}
                bg="white"
              >
                <Img width="39px" height="40px" src={ACL.src} />
              </Button>
            </Box>
            <Flex
              width="81%"
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
                bg="white"
              >
                <Img width="39px" height="40px" src={ACR.src} />
              </Button>
            </Box>
          </Flex>

          <Box w="258px" h="63px" mt="77px" mb="56px" mx="auto">
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
          mt="81px"
          bg="#FEF8F3"
        >
          <Grid //Want to Maximize Your Team's  Potential
            mb="186px"
          >
            <GridItem colSpan={5}>
              <Container as={Stack} mx="auto" maxW="80%" mt="215px" mr="0px">
                <Text
                  width="100%"
                  fontFamily="MADE Outer Sans Light"
                  fontSize="48px"
                  fontWeight="600"
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
              <Box mt="27px" w="40%" ml="48%">
                <HardsandsButton
                  // @ts-ignore
                  w={"60%"}
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
            <GridItem colStart={6} colEnd={10}>
              <Flex
                height="100%"
                alignItems="center"
                justifyContent="space-between"
              >
                <Image
                  // my="auto"
                  width="635px"
                  height="450px"
                  // mt="70px"
                  src={UpgradingYourTeamImage.src}
                  alt={"upgrading-your-team-image"}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Container>

        <Container //FAQs
          as={Stack}
          maxW="full"
          bg="#000"
          mt="81px"
        >
          <Text
            color="#FFF"
            fontFamily="MADE Outer Sans Light"
            fontSize="16px"
            fontWeight="300"
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
            mt="113px"
          >
            FAQs
          </Text>
          <Heading
            color="#DF9F71"
            fontFamily="MADE Outer Sans Light"
            fontSize="35px"
            fontWeight="300"
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
          >
            Frequently Asked Questions
          </Heading>
          <Text
            color="rgba(255, 255, 255, 0.72)"
            fontFamily="Campton Light"
            fontSize="20px"
            fontWeight="400"
            lineHeight="34px"
            textTransform="capitalize"
            textAlign="center"
          >
            have questions? We’re here to help
          </Text>
          <Flex
            mx="auto"
            width="17%"
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
            <Box width="80%" mt="133px">
              <Flex width="100%" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    What is Hardsands Card
                  </Heading>
                  <Text
                    width="67%"
                    color="rgba(255, 255, 255, 0.69)"
                    fontFamily="Campton Light"
                    fontSize="15px"
                    fontWeight="400"
                    lineHeight="23px"
                    textTransform="capitalize"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                  </Text>
                </Text>
                <Box mt="52px" width="2%">
                  <Img src={CircleClicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    How do hardsands cards and Epoxy work?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Where should I place my hardsand Epoxy?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Can I get a hardsands card with my own logo/branding?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    What surfaces may hardsand Epoxy stick to?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Is there a monthly fee for using hardsands card or hardsands
                    Epoxy?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />

              <Flex width="100%" mt="23.5px" justifyContent="space-between">
                <Text>
                  <Heading
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Is it necessary for the receiver to use a hardsand product
                    or an app to receive my info?
                  </Heading>
                </Text>
                <Box width="2%">
                  <Img mt="25%" src={CircleUnclicked.src} />
                </Box>
              </Flex>
              <Img mt="9px" src={HorizontalDivider.src} />
            </Box>
            <Box
              mt="99px"
              mb="71px"
              width="80%"
              background="rgba(255, 255, 255, 0.07)"
              py="20px"
            >
              <Flex width="100%" justifyContent="space-around">
                <Text width="75%">
                  <Heading
                    color="#DF9F71"
                    fontFamily="Campton Light"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Still have questions?
                  </Heading>
                  <Text
                    color="#FFF"
                    fontFamily="Campton Light"
                    fontSize="15px"
                    fontWeight="400"
                    lineHeight="34px"
                    textTransform="capitalize"
                  >
                    Can’t find the answers you’re looking for? Contact us via
                    our Hardsands Technology Customer Support
                  </Text>
                </Text>
                <Box w="17%">
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

        <Grid
          //Interested in Maximizing Your Team's Potential?
          mb="133px"
        >
          <GridItem colSpan={5}>
            <Container as={Stack} maxW="85%" mt="140px" mr="0px">
              <Text
                width="100%"
                fontFamily="MADE Outer Sans Light"
                fontSize="48px"
                fontWeight="600"
                lineHeight="55px"
                textTransform="capitalize"
                textAlign="center"
                alignItems="flex-end"
                mr="0px"
                bg="white"
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
            <Box mx="auto" width="80%" mr="5">
              <Flex mx="auto" justifyContent="space-between">
                <Box height="21px" width="48%" mt="54px">
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
                <Box height="21px" mt="54px" width="48%">
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
              <Flex mx="auto" justifyContent="space-between">
                <Box width="48%" height="21px" mt="102px">
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
                <Box width="48%" height="21px" mt="102px">
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
              <Flex mx="auto" justifyContent="space-between">
                <Box width="48%" height="21px" mt="102px">
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
                <Box width="48%" height="21px" mt="102px">
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
              <Box mt="104px" w="40%">
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

          <GridItem colStart={6} colEnd={10}>
            <Flex
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                width="613px"
                height="515px"
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
