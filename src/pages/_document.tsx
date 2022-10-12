import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import config from "core/config";
import { detectLanguage } from "modules/i18n/actions";

export default class HardsandsDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      lang: detectLanguage(ctx),
    };
  }

  render() {
    return (
      <Html lang={this.props.lang} style={{ scrollBehavior: "smooth" }}>
        <Head />
        <body>
          <noscript>
            {/* <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            /> */}
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
