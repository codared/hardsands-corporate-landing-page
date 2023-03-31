import { Box, Heading } from "@chakra-ui/react";

interface CardProps {
  bgWhite: boolean;
  title: string;
  number: string | number;
}

const ReportCard = ({ bgWhite, title, number }: CardProps) => {
  return (
    <Box
      pt={6}
      pb={4}
      textAlign="center"
      bg={`${bgWhite ? "#fff" : "#F9F9F9"}`}
      border={`${bgWhite ? "1px solid #DF9F71" : "none"}`}
    >
      <Heading fontSize={"1rem"} mb={2}>
        {title}
      </Heading>
      <Heading
        color={
          title.toLowerCase() === "email hits" ||
          title.toLowerCase() === "social hits"
            ? "#DF9F71"
            : "#000"
        }
        fontSize={["3.5rem"]}
      >
        {number}
      </Heading>
    </Box>
  );
};

export default ReportCard;
