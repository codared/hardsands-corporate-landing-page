import {
  Container,
  Heading,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Button,
} from "@chakra-ui/react";
import AlertMessage from "components/AlertMessage";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { registerDevice } from "./service";
import { v5 as uuid } from "uuid";
import { setCookie } from "modules/shared/cookie";

const ActivateDeviceForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getDeviceId = () => {
    // get device id from cookie
    const deviceUUID = uuid(navigator.userAgent, uuid.URL);
    // set new device id forever
    setCookie("hardsands_device_id", deviceUUID, 30 * 24 * 60 * 60);
    return deviceUUID;
  };

  const handleDeviceActivation = async (e: any) => {
    e.preventDefault();
    if (!fields && fields.length !== 4) {
      return;
    } else {
      setLoading(true);
      const res = await registerDevice({
        pin: Number(fields),
        deviceId: getDeviceId(),
      });
      if (res.isError) {
        //@ts-ignore
        setErrorMessage(res.message);
        setLoading(false);
      } else if (res.isError === false) {
        setErrorMessage("");
        setSuccessMessage(res.result.message);
        setFields("");
        setLoading(false);
      }
      setLoading(false);
    }
  };

  const handleChange = (values: any) => {
    setFields(values);
  };

  return (
    <Container maxW={["100%", "5xl"]}>
      <Flex
        as="section"
        p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
        justify="center"
        direction={"column"}
      >
        <Heading mb={10}>Enter Activation Pin</Heading>
        {!!errorMessage && (
          <AlertMessage
            status={"error"}
            showCancelMessage={errorMessage}
            setShowCancelMessage={() => setErrorMessage("")}
            t={t}
          />
        )}
        {!!successMessage && (
          <AlertMessage
            status={"success"}
            showCancelMessage={successMessage}
            setShowCancelMessage={() => setSuccessMessage("")}
            t={t}
          />
        )}
        <HStack mb={10}>
          <PinInput value={fields} onChange={handleChange} size="lg" otp manageFocus={true}>
            <PinInputField borderColor={"black"} w={100} />
            <PinInputField borderColor={"black"} w={100} />
            <PinInputField borderColor={"black"} w={100} />
            <PinInputField borderColor={"black"} w={100} />
          </PinInput>
        </HStack>
        <Button
          w={"full"}
          color="white"
          bg={"brand.300"}
          _hover={{ textColor: "black", bg: "brand.200" }}
          borderRadius={"none"}
          py={[6]}
          isLoading={loading}
          loadingText={"Activating Device"}
          onClick={handleDeviceActivation}
        >
          Activate Device
        </Button>
      </Flex>
    </Container>
  );
};

export default ActivateDeviceForm;
