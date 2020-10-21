import '../node_modules/@pyxeldev/reset-css/reset.min.css';
import '../styles/index.scss';
import '../public/icons.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Pyxel</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-179032245-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-179032245-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
