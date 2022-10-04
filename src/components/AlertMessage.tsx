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

export type AlertStatus =
  | "error"
  | "info"
  | "warning"
  | "success"
  | "loading"
  | undefined;

export default function AlertMessage({
  t,
  status = undefined,
  title = "Wait!",
  showCancelMessage,
  setShowCancelMessage,
}: {
  t: TFunction;
  title?: string;
  status: AlertStatus;
  showCancelMessage: string | null;
  setShowCancelMessage: (message: string | null) => void;
}) {
  return (
    <>
      <Alert display={"flex"} justifyContent={"space-between"} status={status}>
        <Flex>
          <AlertIcon />
          <Flex>
            {/* <AlertTitle>{t("alert:title", `{{title}}!`, { title })}</AlertTitle> */}
            <AlertDescription>{showCancelMessage}</AlertDescription>
          </Flex>
        </Flex>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => setShowCancelMessage(null)}
        />
      </Alert>
      <Box h={8} />
    </>
  );
}
