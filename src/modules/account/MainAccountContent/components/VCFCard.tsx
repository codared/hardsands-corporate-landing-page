import { Button } from "@chakra-ui/react";
import React from "react";
import { assignVCFData } from "utils/functions";
import { slugify } from "utils/string";
import vCardsJS from "vcards-js";

const VCFCard = ({ data }: any) => {
  const createVCard = () => {
    //create a new vCard
    var vCard = vCardsJS();

    return assignVCFData(vCard, data).getFormattedString();
  };

  const downloadTxtFile = (vcfText: string) => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${slugify(data.name)}.vcf`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Button
      display="flex"
      fontSize={"sm"}
      fontWeight="bold"
      color={"white"}
      bg={"brand.300"}
      p={["22px 16px", "22px 46px"]}
      alignItems="center"
      justifyContent={"center"}
      transition="all 200ms ease-in"
      border="1px solid #F5D7BB"
      borderRadius={0}
      w={["70%", "100%"]}
      mx={"auto"}
      _hover={{
        bg: "transparent",
        color: "brand.300",
        border: "1px solid #DF9F71",
      }}
      // fontFamily="Made Outer Sans Regular"
      onClick={() => downloadTxtFile(createVCard())}
      mb={6}
    >
      Download Contact
    </Button>
  );
};

export default VCFCard;
