/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-script-component-in-head */
import config from "core/config";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { pageview } from "../lib/gtm";

const ManualScriptTag = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);
  const GTM_ID = config("TAG_MANAGER_ID");

  return (
    <Head key="analytics_tagmanager_script">
      <script> window.dataLayer = window.dataLayer || [] </script>
      <script
        id="gtag-base"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
    </Head>
  );
};

export default ManualScriptTag;
