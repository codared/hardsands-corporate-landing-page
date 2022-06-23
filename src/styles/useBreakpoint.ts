import { useMediaQuery } from "@chakra-ui/react";
import { breakpoints } from "./theme";

const useBreakpoint = (minMax: string): { [key: string]: boolean } => {
  const [isLargerThan425] = useMediaQuery(`(${minMax}: ${breakpoints[0]})`);
  const [isLargerThan768] = useMediaQuery(`(${minMax}: ${breakpoints[1]})`);
  const [isLargerThan1200] = useMediaQuery(`(${minMax}: ${breakpoints[2]})`);

  return { isLargerThan425, isLargerThan768, isLargerThan1200 };
};

export default useBreakpoint;
