/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";

import config from "core/config";
import Script from "next/script";

const CrowdinInContextScriptTag = () => {
  const CROWDIN_PROJECT = config("CROWDIN_PROJECT");
  const CROWDIN_DOMAIN = config("CROWDIN_DOMAIN");
  const CROWDIN_IN_CONTEXT_ENABLED = config("CROWDIN_IN_CONTEXT_ENABLED");
  if (!CROWDIN_PROJECT || !CROWDIN_IN_CONTEXT_ENABLED) {
    return null;
  }

  return (
    <Head key="CrowdinInContext_script_tag">
      <Script
        id="crowdin-initializer"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
        window._jipt = window._jipt || [];
        window._jipt.push(['project', '${CROWDIN_PROJECT}']);
        window._jipt.push(['domain', '${CROWDIN_DOMAIN}']);
      `,
        }}
      />
      <Script type="text/javascript" src="//cdn.crowdin.com/jipt/jipt.js" />
    </Head>
  );
};

export default CrowdinInContextScriptTag;
