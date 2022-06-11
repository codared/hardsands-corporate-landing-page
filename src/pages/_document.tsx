import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from 'core/config';

export default class HardsandsDocument extends Document {
  render() {
    const GTM_ID = config('TAG_MANAGER_ID');
    return (
      <Html>
        <Head />
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
