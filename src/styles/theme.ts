import { extendTheme } from "@chakra-ui/react";

import typography from "./typography";

const space = {
  px: "1px",
  "0": "0rem",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "7": "1.75rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  "96": "24rem",
};

const sizes = {
  boxed: "1150px",

  heightXl: "57px",
  heightXlMobile: "50px",

  heightLg: "52px",
  heightLgMobile: "38px",

  heightMd: "38px",
  heightMdMobile: "32px",

  heightSm: "32px",
  heightSmMobile: "24px",
};

const fontWeights = {
  normal: "400",
  bold: "600",
};

const fontSizes = {
  lg: ["1", null, "1.25rem"],
  md: [".8125rem", null, "1.0rem"],
  sm: [".6875rem", null, ".8125rem"],
  xs: [".6875rem", null, ".6875rem"],
};

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  disabled: "#CFD1C8",
  secondary: "#696969",
  // brand specific
  textPrimary: "#1E2D2B",
  textSecondary: "#A8A8A8",
  drawerText: "#0B0C0D",
  buttonText: "#0A0E0D",
  nightGreen: "#2b2e2b",
  lightGreen: "#889E8F",
  // primary bg
  // TODO search replace with better name
  moss: "#011621", // replaced
  sage: "#889E8F",
  midnightBlue: "#011621",
  rust: "#6C5833",
  lightRust: "#efd3b5",
  nightRust: "#61361e",
  brush: "#6A7B56",
  earth: "#DED3C4",
  saintpaddy: "#919A86",
  chicagoGrey: "#595958",

  seastone: "#cdd1ce",
  seastone2: "#e0e2e0",
  foam: "#e2e6e3",
  foam2: "#e9ebe7",
  charcoal: "#000000",
  offwhite: "#DED3C3", // replaced
  offwhite2: "#f2f2ef",
  offwhite3: "#f7f7f7",
  whiteSands: "#fcfcf9",
  morning: "#9eacae",
  showers: "#cee2ea",
  bigStone: "#364146",

  // form colors
  formError: "#dc3545",
  formHelperText: "#888",
  formIcon: "#2b2e2b",
  // Separator
  separator: "#5c5c5c",
  //badge
  tomato: "#f06570",
  // checkout
  sectionSeparator: "#202020",
  blackPearl: "#20272B",
  laurelGreen: "#258d03",
  checkoutText: "#152B2A",
  disabledNav: "#acacac",
  subHeading: "#999999",
  selectedAddressBg: "rgba(110, 123, 112, 0.1)",
  modalBg: "rgba(205, 209, 206,0.8)",
  checkMark: "#3d3f43",
  darkColor: "#1D2B2B",
  successBagdeColor: "#4D5549",
  lightGray: "#E5E5E5",
  topNavDarkBorder: "#292929",
  greySelectBorder: "#ACAFAD",
  detailsText: "#525F53",
  seaMist: "#C6CCC7",
  darkOrange: "#D0331F",
  willowGreen: "#6A7B56",

  // hardsands
  sandTone3: "#DF9F71",
  sandTone3RGB05: "rgba(223,159,113, 0.5)",
  sandTone3RGB03: "rgba(223,159,113, 0.3)",
  sandTone3RGB01: "rgba(223,159,113, 0.1)",
  sandTone2: "#F5D7BB",
  sandTone2RGB05: "rgba(245,215,187, 0.5)",
  sandTone2RGB03: "rgba(245,215,187, 0.3)",
  sandTone2RGB01: "rgba(245,215,187, 0.1)",
  sandTone1: "#F8ECDE",
  sandTone1RGB05: "rgba(248,236,222, 0.5)",
  sandTone1RGB03: "rgba(248,236,222, 0.3)",
  sandTone1RGB01: "rgba(248,236,222, 0.1)",

  brand: {
    100: "#F8ECDE",
    200: "#F5D7BB",
    300: "#DF9F71",
    900: "#000",
  },

  danger: '#EB6C6C',
  sandstone: "#EDEBDF",
  stone: "#DAE1E2", // replaced
  aboutBorder: "#CFD1C8",
  eggShell: "#F2F1EF",
  grapeFruit: "#E04713", // replaced
  secondaryTextColor: "#0E1E26",
  tertiaryTextColor: "#263339",
  greyTextColor: "#3d4246",
  darkGreyTextColor: "#333",
  dimGray: "#707070",
  whiteSmoke: "#F8F8F8",
  rustHover: "#E6CCB5",
  quaternaryTextColor: "#8d8e86",
  secondaryBgColor: "#fffdf6",
  darkBlueColor: "#021523",
  /* checkout , please don't change or remove these values ,
   it's to unify color names used in checkout page across brands*/
  checkoutBgColor: "#f5f5f4",
  cartTextColor: "#EDEBDF",
  cartButtonColor: "#DED3C3",
  /* account system , please don't change or remove these values ,
   it's to unify color names used in account system pages across brands*/
  tertiaryTextColorAS: "#263339",
  inputBgColor: "#011621",
  arrowColor: "#6f7780",
  successColor: "#489769",
  backLinkColor: "#848484",
  warningColor: "#b12704",
  editButtonColor: "#54725b",
  successMarkBorder: "rgba(110,123,112,0.37)",
  wildSand: "#f4f4f4",
  itemBgColor: "#eae8e9",
  fireFly: "#0E1E26",
  vermilion: "#F44C13",
  flame: "#F14D25",
};

const shadows = {
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  topNavShadow: "0 2px 3px -3px grey",
  addressBlockShadow:
    "1px 0 1px rgba(0, 0, 0, 0.2), -1px 0 1px rgba(0, 0, 0, 0.19)",
  inputShadow: "rgb(0, 100, 205) 0px 0px 5px",
  none: "none",
};

const breakpoints = ["425px", "768px", "1200px"];

const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  header: 1,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const radii = {
  none: "0",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  round: "50%",
  full: "9999px",
};

const opacity = {
  "0": "0",
  "20%": "0.2",
  "40%": "0.4",
  "60%": "0.6",
  "80%": "0.8",
  "100%": "1",
};

const borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",

  disabled: `1px solid ${colors.disabled}`,
  nightGreen: `1px solid ${colors.nightGreen}`,
  whiteSands: `1px solid ${colors.whiteSands}`,
  seastone: `1px solid ${colors.seastone}`,
  sandTone2: `1px solid ${colors.sandTone2}`,
  moss: `1px solid ${colors.moss}`,
  morning: `1px solid ${colors.morning}`,
  about: `1px dashed ${colors.aboutBorder}`,
  aboutSolid: `1px solid ${colors.aboutBorder}`,
  rust: `1px solid ${colors.rust}`,
  dimGrayDashed: `1px dashed ${colors.dimGray}`,
};

const durations = {
  instant: "0s",
  quick: "0.2s",
  default: "0.4s",
  slow: "0.6s",
  slower: "1.2s",
};

const easings = {
  default: "ease-in-out",
};

const transitions = {
  allEase: "all ease 500ms",
  cspEase: "opacity ease 500ms",
};

const globalStyles = {
  color: `black`,
  fontFamily: "body",
  "a:hover": {
    cursor: "pointer",
  },
  "a:focus, button:focus": {
    outline: 'none',
    outlineColor: colors.sandTone1,
  },
  "button:hover": {
    backgroundColor: "black",
    color: "white",
  },
};

const customTheme = extendTheme({
  styles: {
    global: globalStyles,
  },
  breakpoints,
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  durations,
  easings,
  ...typography,
  sizes,
  shadows,
  space,
  fontWeights,
  fontSizes,
  transitions,
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    cssVarPrefix: "hardsands",
  },
});

export type HardSandsTheme = typeof customTheme;

export default customTheme;
