import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import AlertMessage from "components/AlertMessage";
import CustomInput from "components/CustomInput";
import HardsandsButton from "components/HardsandsButton";
import Router from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getTrackingDetails } from "./services";
import TrackingLogo from "assets/icons/order-tracking.svg";
import { setCookie } from "modules/shared/cookie";

function TrackForm() {
  const { t } = useTranslation();
  const [trackingId, setTrackingId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTrackingId(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await getTrackingDetails(trackingId);
      if (!res.isError) {
        setCookie("hardsands_tracking_data", JSON.stringify(res.result));
        Router.push(`/order/track/${trackingId}`);
        setLoading(false);
      } else {
        setErrorMessage(`Invalid Tracking ID: ${res.message}`);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Container mb={[20]} justifyContent={"center"} alignItems={"center"}>
      <Image
        my={[10]}
        mx={"auto"}
        src={TrackingLogo.src}
        alt={"tracking logo"}
      />
      <Heading color={"brand.300"} textAlign={["center"]}>
        Track Order Status
      </Heading>
      {errorMessage && (
        <AlertMessage
          t={t}
          status={"error"}
          showCancelMessage={errorMessage}
          setShowCancelMessage={() => {}}
        />
      )}
      <Box w={["100%", "50%"]} my={[6]} mx={"auto"}>
        <CustomInput
          onChange={handleChange}
          name={"trackNumber"}
          value={trackingId}
          placeholder={"Enter Tracking ID"}
          borderColor={"black"}
        />
      </Box>
      <Button
        fontSize={"sm"}
        fontWeight="bold"
        color={"black"}
        bg={"brand.200"}
        p={["12px 16px", "12px 46px"]}
        w={["100%", "50%"]}
        mx={"auto"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        transition="all 200ms ease-in"
        border="1px solid #F5D7BB"
        borderRadius={"none"}
        _hover={{
          bg: "transparent",
          color: "brand.300",
          border: "1px solid #DF9F71",
        }}
        fontFamily="Made Outer Sans Regular"
        isLoading={loading}
        loadingText={"Getting Track Details..."}
        onClick={handleSubmit}
      >
        Track Order
      </Button>
    </Container>
  );
}

export default TrackForm;
