import { removeDuplicates } from "./array";

const zeroDecimalCurrencies = [
  "BIF",
  "MGA",
  "CLP",
  "DJF",
  "PYG",
  "RWF",
  "GNF",
  "JPY",
  "KMF",
  "KRW",
  "UGX",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF",
];

export const TOP_CURRENCIES = {
  USD: "USD",
  EUR: "EUR",
  ILS: "ILS",
  AED: "AED",
  SAR: "SAR",
  QAR: "QAR",
  SGD: "SGD",
  NGN: "NGN",
};

export function formatCurrencyInteger(
  amount: number,
  currency: string,
  fractionDigits = 2,
  language = "en-US"
): string {
  // TODO add language support
  fractionDigits = zeroDecimalCurrencies.includes(currency)
    ? 0
    : fractionDigits;

  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount / 100);
}

export function replaceCurrencies(text: string) {
  return text.replace(
    /\$([0-9]+)/g,
    (match: any, p: any) => `{{currency_${match}}}`
  );
}

export function buildCurrencyTranslationParams(
  text: string,
  usdConversionRate: number,
  currency: string
) {
  const regex = /\$([0-9]+)/g;
  const dollarValues = removeDuplicates(text.match(regex) || []);

  return dollarValues.reduce((acc: any, value: string) => {
    const valueWithoutDollarSign = Number(value.substr(1));
    acc[`currency_${value}`] = formatCurrencyInteger(
      valueWithoutDollarSign * usdConversionRate * 100,
      currency
    );
    return acc;
  }, {});
}
