import WithLayout from "components/WithLayout";
import { getCookie, removeCookie } from "modules/shared/cookie";
import { getTrackingDetails } from "modules/track-order/services";
import TrackOrderDetails from "modules/track-order/TrackOrderDetails";
import { NextPageContext } from "next";
import cookies from "next-cookies";
// import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { isServerRequest } from "utils/nextjs";

function TrackingDetailsPage({ details }: any) {
  return (
    <WithLayout pageTitle="Track Order - Hardsands">
      <TrackOrderDetails details={details} />
    </WithLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  // dont handle async data fetches because the component's useProduct hook handles this
  if (!isServerRequest(ctx)) {
    return { props: {} };
  }

  const {
    query: { trackingId },
  } = ctx;

  const allCookies = cookies(ctx);
  const cookie = allCookies["hardsands_tracking_data"];

  if (!!cookie) {
    // deleteCookie("hardsands_tracking_data");
    return { props: { details: cookie } };
  } else {
    const { result } = await getTrackingDetails(trackingId as string);

    return {
      props: { details: result },
    };
  }
}

export default TrackingDetailsPage;
