import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Circle,
  AccordionPanel,
  Text,
  ExpandedIndex,
} from "@chakra-ui/react";
import { ShippingMethodType } from "modules/checkout/types";

const CheckAccordion = ({
  allowMultiple = false,
  options,
  onChange,
  defaultIndex,
}: {
  allowMultiple?: boolean;
  defaultIndex?: ExpandedIndex | undefined;
  options: any[];
  onChange?: (val: string | number) => void;
}) => {
  return (
    <Accordion allowMultiple={allowMultiple} defaultIndex={defaultIndex}>
      {options.length &&
        options.map(
          ({
            title,
            subTitle,
            content,
            value,
            isChecked,
          }: ShippingMethodType) => (
            <AccordionItem
              key={title}
              borderWidth={1}
              borderColor={"black"}
              mb={2}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      onClick={onChange ? () => onChange(value) : () => {}}
                      _hover={{ bg: "transparent", color: "black" }}
                    >
                      <Box flex="1" textAlign="left" color="black">
                        {title}
                      </Box>

                      {!!subTitle && (
                        <Text mr={2} textTransform={"uppercase"}>
                          {subTitle}
                        </Text>
                      )}
                      <Box
                        borderWidth={1}
                        borderColor={"brand.300"}
                        p={0.5}
                        borderRadius="full"
                        mr={2}
                        onClick={(e) => {}}
                        boxSize={"19px"}
                      >
                        {isChecked || isExpanded ? (
                          <Circle size="13px" bg={"brand.300"} />
                        ) : null}
                      </Box>
                    </AccordionButton>
                  </h2>
                  {!!content && (
                    <AccordionPanel pb={4}>{content}</AccordionPanel>
                  )}
                </>
              )}
            </AccordionItem>
          )
        )}
    </Accordion>
  );
};

export default CheckAccordion;
