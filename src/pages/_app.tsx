import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
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
import AnalyticsScriptTag from "../modules/analytics/components/AnalyticsScriptTag";
import ManualAnalyticsTags from "../modules/analytics/components/ManualAnalyticsTags";
import AnalyticsProvider from "../modules/analytics/context/provider";
import { CopyrightYearProvider } from "modules/hardsands/contexts/CopyrightYearContext";
import { CheckoutProvider } from "redux/context";
import ErrorBoundary from "components/ErrorBoundary";
import ErrorFallback from "components/ErrorBoundary/ErrorFallback";
import config from "core/config";
import CurrencyDetector from "components/CurrencyDetector";
import { useTranslation } from "react-i18next";
import HardsandLink from "components/HardsandsLink";
import { richTextComponents } from "modules/articles";
import { repositoryName } from "modules/articles/prismicio";

Sentry.init({
  release: process.env.COMMIT_SHA,
  enabled: true,
  environment: config("ENVIRONMENT"),
  dsn: config("SENTRY_DSN"),
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
  const { t } = useTranslation();

  return (
    <>
      <ChakraProvider theme={theme}>
        <CopyrightYearProvider value={copyRightYear}>
          <AnalyticsProvider>
            <>
              <CheckoutProvider currency={currency}>
                <PrismicProvider
                  internalLinkComponent={(props) => <HardsandLink {...props} />}
                  richTextComponents={richTextComponents}
                >
                  <PrismicPreview repositoryName={repositoryName}>
                    <>
                      <ManualAnalyticsTags />
                      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=hardsands-blogs"></script>
                      {typeof window && <AnalyticsScriptTag />}
                      <Fonts />
                      <ErrorBoundary t={t} FallbackComponent={ErrorFallback}>
                        <CurrencyDetector />
                        <ColorModeScript initialColorMode={"light"} />
                        <Component {...pageProps} />
                      </ErrorBoundary>
                    </>
                  </PrismicPreview>
                </PrismicProvider>
              </CheckoutProvider>
            </>
          </AnalyticsProvider>
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
    // console.log("fetching translations took: " + (Date.now() - now));
  } catch (e) {
    // swallow for now because pre-rendering doesnt like this
  }

  return { translations, lang, currency: currency.toUpperCase() };
};

const makeStore: MakeStore<AppState> = (context: Context) => createStore();

export default createWrapper(makeStore).withRedux(HardsandsApp);
