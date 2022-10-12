import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      /* latin-ext */
      @font-face {
        font-family: 'Campton';
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Campton-Book.woff2") format('woff2'), url("/fonts/Campton-Book.woff") format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Campton Light';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Campton-Light.woff2") format('woff2'), url("/fonts/Campton-Light.woff") format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Campton Bold';
        font-style: normal;
        font-weight: nromal;
        font-display: swap;
        src: url("/fonts/Campton-Bold.woff2") format('woff2'), url("/fonts/Campton-Bold.woff") format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Made Outer Sans Bold';
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/made_outer_sans_bold-webfont.woff2") format('woff2'), url("/fonts/made_outer_sans_bold-webfont.woff") format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Made Outer Sans Outline Bold';
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/made_outer_sans_outline_bold-webfont.woff2") format('woff2'), url("/fonts/made_outer_sans_outline_bold-webfont.woff") format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Made Outer Sans Light';
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/made_outer_sans_light-webfont.woff2") format('woff2'), url("/fonts/made_outer_sans_light-webfont.woff") format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Made Outer Sans Regular';
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/made_outer_sans_regular-webfont.woff2") format('woff2'), url("/fonts/made_outer_sans_regular-webfont.woff") format('woff');
      }
      `}
  />
);

export default Fonts;
