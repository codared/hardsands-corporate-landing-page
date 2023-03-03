import jwt_decode from "jwt-decode";
import { ACTIONS } from "modules/account/constants";
import { HARDSANDS_LOGIN_COOKIE } from "modules/authentication/constants";
import { Product, ProductOptions } from "modules/products/types";
import { getCookie } from "modules/shared/cookie";
import { SUPPORTED_CURRENCIES } from "./supportedCurrencies";
import { ActionsType } from "./types";
import * as prismicH from "@prismicio/helpers";

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const findFirstImage = (slices: any[]) => {
  const imageSlice = slices.find(
    (slice: { slice_type: string }) => slice.slice_type === "image"
  );

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

export const getExcerpt = (slices: any) => {
  const text = slices
    .filter((slice: { slice_type: string }) => slice.slice_type === "text")
    .map((slice: { primary: { text: any } }) =>
      prismicH.asText(slice.primary.text)
    )
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

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
  return Object.values(options.options).map((opt) => opt.text).reverse();
};

export const isTokenExpired = (token: string) => {
  if (!token) return true;
  const decoded: any = jwt_decode(token);
  return decoded.exp * 1000 < new Date().getTime();
};

export const getToken = () => {
  return getCookie(HARDSANDS_LOGIN_COOKIE);
};

export const mergeActions = (dbActions: any, localActions: ActionsType[]) => {
  return localActions.map((localAction: ActionsType) => {
    const neededActionsFromDB = dbActions.find(
      ({ action }: any) => action === localAction.fieldTitle
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
  const action = getActionById(id, cardActions);

  const localAction = ACTIONS?.find(
    (act) => act.fieldTitle === action.title
  ) as ActionsType;

  localAction.fields = localAction?.fields?.map((_action) => {
    const formKey = _action.formKey as string;
    let fields = action?.fields as any;

    // Only do this for whatsApp as the whatsappMessage come on from the DB as message,
    // which causes an undefined value
    let value;
    if (formKey === "whatsappMessage") {
      value = fields["message"];
    } else if (formKey === "homeCountryId") {
      value = fields["homeCountry"];
    } else if (formKey === "homeStateId") {
      value = fields["homeState"];
    } else {
      value = fields[formKey];
    }

    return {
      ..._action,
      value,
    };
  });

  return { ...localAction, id };
};

export const getActionsName = () => {
  return ACTIONS.map(({ fieldTitle }) => fieldTitle);
};

export const createSelectOptions = (options: any[]) => {
  return options?.map((option: any) => {
    if (typeof option === "string") {
      return {
        value: option,
        label: option,
      };
    } else if (!option.value && option.id) {
      return {
        value: option.id,
        label: option.value || option.name,
      };
    } else {
      return {
        ...option,
        label: option.value || option.name,
      };
    }
  });
};


export const getProductsBySlug = (
  slugs: string[],
  products: Product[] | undefined
) => {
  let newProducts: any = [];
  if (products?.length) {
    slugs.forEach((slug) => {
      newProducts.push(products?.find((prod) => slug === prod.slug));
    });
  } else {
    return products?.filter((prod) => slugs.includes(prod.slug));
  }
  return newProducts;
};

export const getProductBySlug = (
  slugs: string,
  products: Product[] | undefined
) => {
  return products?.find((prod) => slugs.includes(prod.slug));
};
