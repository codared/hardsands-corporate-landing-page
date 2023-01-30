import { Box } from "@chakra-ui/react";
import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  size = "base",
  className,
  children,
}: any) => {
  let maxW;
  if (size === "small") {
    maxW = "xl";
  } else if (size === "base") {
    maxW = "3xl";
  } else if (size === "wide") {
    maxW = "4xl";
  } else if (size === "widest") {
    maxW = "6xl";
  }

  return (
    // @ts-ignore
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <Box
        as={"div"}
        mx={"auto"}
        w={"full"}
        maxW={maxW}
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </Box>
    </Comp>
  );
};
