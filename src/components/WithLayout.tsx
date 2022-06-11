import Head from "next/head";
import React from "react";
import { BRAND_DESCRIPTION, BRAND_TITLE } from "utils/constants";
import Footer from "./Footer";
import Navigation from "./Navigation";

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
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default WithLayout;
