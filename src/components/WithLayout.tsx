import config from "core/config";
import CheckoutHeader from "modules/checkout/components/CheckoutHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
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
  image_url = "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/12_1.jpg?v=1665057392",
  isCheckout,
  ogType = "website",
  ogUrl,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  isCheckout?: boolean;
  image_url?: string;
  ogType?: string;
  ogUrl?: string;
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const openGraphUrl = `${config("APP_URL")}${ogUrl || router.pathname}`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content={BRAND_KEYWORDS} />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content={
            image_url ||
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657202058/hardsands/3_yeqdul.jpg"
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            image_url ||
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657202058/hardsands/3_yeqdul.jpg"
          }
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="611" />
        <meta property="og:image:height" content="498" />
        <meta property="og:image:alt" content={pageDescription} />
        <meta name="theme-color" content="#F5D7BB" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content="Hardsands Technology" />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={openGraphUrl} />
        <meta
          name="facebook-domain-verification"
          content="0rddst5won3af00cv9hnfiz0mowd3s"
        />
      </Head>
      {!isCheckout ? <Navigation pageTitle={pageTitle} /> : <CheckoutHeader />}
      {children}
      <Footer />
    </>
  );
};

export default WithLayout;
