import { ChakraStylesConfig } from "chakra-react-select";

export const COOKIE_LANG_KEY = "language";
export const COOKIE_DISCOUNT_CODE = "discount_code";
export const COOKIE_DISCOUNT_URL_SOURCE = "discount_source";
export const CUSTOMER_ENTRY_LANDING_PAGE = "customer_entry_landing_page";
export const PROMOCODE_COOKIE = "selected_promocode";
export const CART_ID_LOCAL_STORAGE_KEY = "hardsands_cart_id";
export const CURRENCY_COOKIE = "hardsands_selected_currency";
export const ONBOARDING_TOUR = "hardsands_onboarding_tour_shown";

export const BRAND_DESCRIPTION = `One time Business Card for your team, business and personal use.
All you have to do it tap on the device with the Hardsands card to share your
profile, business, bank details or even social media links. All card variants are customizable.
Just tap it!`;

export const BRAND_TITLE = `Hardsands - One time Business Card`;
export const BRAND_KEYWORDS = `hardsands, one time business card, business card for your team, electronic business card, card, nfc, contact card, share, tap`;

export const ngn = "₦";

export enum SOCIAL_LINKS {
  INSTAGRAM = "https://instagram.com/hardsandscard?igshid=YmMyMTA2M2Y=",
  TWITTER = "https://twitter.com/hardsandscard?s=21&t=9OYQOXg7JFUYuYEcm2vCVA",
  FACEBOOK = "https://facebook.com/profile.php?id=100086101846164",
  LINKEDIN = "https://www.linkedin.com/company/hardsandscard/",
  EMAIL = "mailto:info@hardsands.com",
  // TIKTOK = 'https://instagram.com/hardsandscard?igshid=YmMyMTA2M2Y=',
}

export const EMAIL_REGEX =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const chakraSelectStyles: ChakraStylesConfig = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    background: "brand.100",
    p: 0,
    w: "40px",
  }),
  inputContainer: (provider) => ({
    ...provider,
    minW: "313px",
  }),
};
