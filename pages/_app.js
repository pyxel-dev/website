import '../node_modules/@pyxeldev/reset-css/reset.min.css';
import '../styles/index.scss';
import '../public/icons.css';
import Head from 'next/head';
import { appWithTranslation } from '../i18n';

function App({ Component, pageProps }) {
  const isBrowser = typeof window !== 'undefined';
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Pyxel</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script defer src="https://stats.pyxel.dev/script.js" data-website-id="d0499688-fee3-479e-bb44-fc1a34f5a56b"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
