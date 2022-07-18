import Head from "next/head";
import React from "react";
import {
  BRAND_DESCRIPTION,
  BRAND_KEYWORDS,
  BRAND_TITLE,
} from "utils/constants";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

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
        <meta charSet="UTF-8" />
        <meta name="keywords" content={BRAND_KEYWORDS} />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657202058/hardsands/3_yeqdul.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657202058/hardsands/3_yeqdul.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="611" />
        <meta property="og:image:height" content="498" />
        <meta
          property="og:image:alt"
          content={pageDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default WithLayout;
