import {
  Alert,
  Flex,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { TFunction } from "react-i18next";

export default function AlertErrorMessage({
  t,
  showCancelMessageError,
  setShowCancelMessageError,
}: {
  t: TFunction;
  showCancelMessageError: string | null;
  setShowCancelMessageError: (message: string | null) => void;
}) {
  return (
    <>
      <Alert display={"flex"} justifyContent={"space-between"} status="error">
        <Flex>
          <AlertIcon />
          <Flex>
            <AlertTitle>{t("checkout:wait", "Wait!")}</AlertTitle>
            <AlertDescription>{showCancelMessageError}</AlertDescription>
          </Flex>
        </Flex>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => setShowCancelMessageError(null)}
        />
      </Alert>
      <Box h={8} />
    </>
  );
}
