import { Box, Text, Heading, Button, Avatar } from "@chakra-ui/react";
import { ReportCard, LeadsStatChart } from "./components";

const ReportWithId = () => {
  const reportData = [
    { id: 1, title: "Email Hits", number: 23, bgWhite: false },
    { id: 2, title: "Bank Account Hits", number: 1, bgWhite: false },
    { id: 3, title: "Whatsapp Hits", number: 32, bgWhite: false },
    { id: 4, title: "URL Hits", number: 0, bgWhite: true },
    {
      id: 5,
      title: "Social Hits",
      number: 12,
      bgWhite: false,
    },
    { id: 6, title: "Events Hits", number: 3, bgWhite: false },
    {
      id: 7,
      title: "Contact Card Hits",
      number: 10,
      bgWhite: false,
    },
    {
      id: 8,
      title: "Instagram Hits",
      number: 3,
      bgWhite: true,
    },
  ];

  const leadStats = [];
  return (
    <Box>
      <Heading mb={2}>Reports</Heading>
      <Text color="#737373" fontSize="14px">
        Please review the information below to access and download your reports.
      </Text>
      <Box display="flex" gap="1rem" justifyContent="flex-end" mt={4}>
        <Button color="#737373" border="1px solid #e0e0e0">
          Filter
        </Button>
        <Button bgColor="#48BB78" color="#fff">
          Download
        </Button>
      </Box>
      <Box bg="#fff" padding={["1rem", "2rem"]} mt={6}>
        <Box display="flex" alignItems="center" gap="1.5rem" mb={6}>
          <Avatar src="" />
          <Box>
            <Heading fontSize="0.875rem">Kennedy Johnson</Heading>
            <Text fontSize="0.75rem" color="#616161">
              kennedy@greenlimited.com
            </Text>
          </Box>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "1fr 20% 20% 1fr",
          ]}
          gap="1rem"
          fontWeight={"700"}
        >
          {reportData.map(({ id, title, number, bgWhite }) => (
            <ReportCard
              key={id}
              title={title}
              bgWhite={bgWhite}
              number={number}
            />
          ))}
        </Box>
        <LeadsStatChart />
      </Box>
    </Box>
  );
};

export default ReportWithId;
