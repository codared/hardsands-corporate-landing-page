import Head from "next/head";
import React from "react";

const WithLayout = ({
  children,
  pageTitle,
  pageDescription,
}: {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
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
