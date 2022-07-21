import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import theme from "styles/theme";
import Fonts from "components/Fonts";
import { AppState } from "redux/rootReducer";
import { createStore } from "redux/store";
import { isServerRequest } from "utils/nextjs";
import {
  detectLanguage,
  fetchTranslations,
  initializeLanguage,
  LanguageResources,
} from "modules/i18n/actions";
import cookies from "next-cookies";
import { CURRENCY_COOKIE } from "utils/constants";
import { isSupportedCurrency } from "utils/functions";
import { useRef } from "react";
import ManualScriptTag from "modules/analytics/components/ManualScriptTag";
import { CopyrightYearProvider } from "modules/hardsands/contexts/CopyrightYearContext";

interface HardsandsAppProps extends AppProps {
  lang: string;
  currency: string;
  translations: LanguageResources;
}

function HardsandsApp({
  lang,
  currency,
  translations,
  Component,
  pageProps,
}: HardsandsAppProps) {
  // load translations the first render
  const i18nLoaded = useRef<boolean>(false);
  if (!i18nLoaded.current && translations) {
    initializeLanguage(lang, translations);
    i18nLoaded.current = true;
  }
  const copyRightYear: number = new Date().getFullYear();

  return (
    <>
      <ChakraProvider theme={theme}>
        <CopyrightYearProvider value={copyRightYear}>
          <ManualScriptTag />
          <Fonts />
          <ColorModeScript initialColorMode={"light"} />
          <Component {...pageProps} />
        </CopyrightYearProvider>
      </ChakraProvider>
    </>
  );
}

HardsandsApp.getInitialProps = async ({ ctx }: any) => {
  // no props need to be sent back down for SPA navigates
  // only initial page render
  if (!isServerRequest(ctx) || typeof window !== "undefined") {
    return {};
  }
  const lang = detectLanguage(ctx);
  const allCookies = cookies(ctx);
  const selectedCurrency =
    ctx.query.currency || allCookies[CURRENCY_COOKIE] || "";
  const currency: string = isSupportedCurrency(selectedCurrency)
    ? selectedCurrency
    : "USD";

  let translations = {};
  try {
    const now = Date.now();
    // only fetch translations on the first request, subsequent requests
    // will have translations in memory
    translations = await fetchTranslations(lang);
    console.log("fetching translations took: " + (Date.now() - now));
  } catch (e) {
    // swallow for now because pre-rendering doesnt like this
  }

  return { translations, lang, currency: currency.toUpperCase() };
};

const makeStore: MakeStore<AppState> = (context: Context) => createStore();

export default createWrapper(makeStore).withRedux(HardsandsApp);
