import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface AccordionItemProps {
  title: string;
  description: string | ReactElement;
}

interface HardsandsAccordionProps {
  accordionItems: AccordionItemProps[];
  isMultiple?: boolean;
  pre?: boolean;
  isExpanded?: boolean;
}

const HardsandsAccordion = ({
  accordionItems,
  isMultiple = true,
  pre = false,
  isExpanded = false,
}: HardsandsAccordionProps) => {
  return (
    <Accordion allowMultiple={isMultiple}>
      {accordionItems &&
        accordionItems.map(({ title, description }: AccordionItemProps) => (
          <AccordionItem defaultChecked key={title}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ bg: "transparent", textColor: "black" }}
                  >
                    <Box flex="1" textAlign="left" fontWeight={"bolder"}>
                      {title}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                {pre ? (
                  <AccordionPanel
                    pb={4}
                    as="pre"
                    fontFamily={"Campton"}
                    whiteSpace="pre-wrap"
                  >
                    {description}
                  </AccordionPanel>
                ) : (
                  <AccordionPanel pb={4}>{description}</AccordionPanel>
                )}
              </>
            )}
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default HardsandsAccordion;
