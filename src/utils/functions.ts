import jwt_decode from "jwt-decode";
import { ACTIONS } from "modules/account/constants";
import { HARDSANDS_LOGIN_COOKIE } from "modules/authentication/constants";
import { ProductOptions } from "modules/products/types";
import { getCookie } from "modules/shared/cookie";
import { SUPPORTED_CURRENCIES } from "./supportedCurrencies";
import { ActionsType } from "./types";

export const requestAuthHeaders = () => {
  return new Headers({
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  });
};

export const requestJsonHeaders = () => {
  return new Headers({
    "Content-Type": "application/json",
  });
};

export const calculateDiscountPercentage = (
  originalValue: number,
  newValue: number
): number => {
  return originalValue > newValue
    ? Math.floor(((originalValue - newValue) / originalValue) * 100)
    : 0;
};

export const isSupportedCurrency = (currency: string): boolean => {
  return SUPPORTED_CURRENCIES.includes(currency?.toUpperCase());
};

export const getProductOptions = (options: ProductOptions) => {
  return Object.values(options.options).map((opt) => opt.text);
};

export const isTokenExpired = (token: string) => {
  if (!token) return true;
  const decoded: any = jwt_decode(token);
  return decoded.exp * 1000 < new Date().getTime();
  // return decoded.exp < new Date().getDate() - decoded.iat;
};

export const getToken = () => {
  return getCookie(HARDSANDS_LOGIN_COOKIE);
};

export const mergeActions = (dbActions: any, localActions: ActionsType[]) => {
  return localActions.map((localAction: any) => {
    const neededActionsFromDB = dbActions.find(
      ({ action }: any) => action === localAction.title
    );
    return {
      ...localAction,
      ...neededActionsFromDB,
    };
  });
};

export const getActionById = (id: number, cardActions: ActionsType[]) => {
  return cardActions?.find((action) => action.id === id) as ActionsType;
};

export const mergeActionFields = (cardActions: ActionsType[], id: number) => {
  const action = cardActions?.find((action) => action.id === id) as ActionsType;

  const localAction = ACTIONS?.find(
    (act) => act.title === action.title
  ) as ActionsType;

  localAction.fields = localAction?.fields?.map((_action) => {
    const name = (_action.name as string).toLowerCase();
    let fields = action?.fields as any;

    return {
      ..._action,
      value: fields[name],
    };
  });

  return { ...localAction, id };
};

export const getActionsName = () => {
  return ACTIONS.map(({ title }) => title);
};

// export function getProductVariant(
//   sizes: SizeOption[],
//   isSubscriptionOption?: boolean
// ) {
//   if (isSubscriptionOption) {
//     return sizes.find((opts) => opts.text === SUBSCRIPTION_PURCHASE_SUBFLAG)
//   } else {
//     return sizes.find((opts) => opts.text === ONE_TIME_PURCHASE_SUBFLAG)
//   }
// }
