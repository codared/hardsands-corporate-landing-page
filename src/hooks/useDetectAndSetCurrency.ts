import { updateCurrency } from "modules/cart/actions";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "redux/context";
import { CURRENCY_COOKIE } from "utils/constants";
import { getCookie } from "utils/cookie";
import { CURRENCIES } from "utils/currencies";
import { isSupportedCurrency, getGeoIpCountryCode } from "utils/geoIp";
import { removeQueryParam } from "utils/removeQueryParam";

export function useDetectAndSetCurrency() {
  const { dispatch } = useContext(CheckoutContext);
  const router = useRouter();

  useEffect(() => {
    const defaultCurrencyData = { currency_code: "USD" };
    const detectAndSet = async (country: string | null) => {
      const currencyData =
        (country && CURRENCIES[country]) || defaultCurrencyData;

      const currencyParam = router.query.currency as string;
      const savedCurrency = getCookie(CURRENCY_COOKIE);
      const detectedCurrency =
        currencyParam || savedCurrency || currencyData.currency_code;

      const currency = isSupportedCurrency(detectedCurrency)
        ? detectedCurrency.toUpperCase()
        : "USD";

      dispatch(updateCurrency(currency));

      if (currencyParam) {
        removeQueryParam("currency");
      }
    };

    getGeoIpCountryCode().then(detectAndSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);
}
