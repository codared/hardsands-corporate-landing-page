import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

export const Card = forwardRef<BoxProps, "div">((props, ref) => (
  <Box bgColor={"#fff"} px="4" py="5" ref={ref} {...props} />
));
