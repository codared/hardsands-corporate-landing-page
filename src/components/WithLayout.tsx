import Head from "next/head";
import React from "react";
import { BRAND_DESCRIPTION, BRAND_TITLE } from "utils/contants";

const WithLayout = ({
  children,
  pageTitle = BRAND_TITLE,
  pageDescription = BRAND_DESCRIPTION,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default WithLayout;
