import { BoxProps, Box } from "@chakra-ui/react";

interface CompositeBarProps extends BoxProps {
  clicks?: string | number;
  activity?: string | number;
}

const CompositeBar = (props: CompositeBarProps) => {
  return (
    <Box
      borderRadius="4px"
      display="block"
      w="18px"
      pos={"relative"}
      {...props}
      bgColor="#f7f7f7"
      h={props.activity}
    >
      <Box
        borderRadius="4px"
        w="100%"
        bgColor="#DF9F71"
        pos={"absolute"}
        bottom={0}
        h={props.clicks}
        {...props}
      />
    </Box>
  );
};

export default CompositeBar;
